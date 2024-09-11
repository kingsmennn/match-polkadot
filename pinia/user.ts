import { defineStore } from "pinia";
import {
  AccountType,
  BlockchainUser,
  CreateUserDTO,
  STORE_KEY,
  STORE_KEY_MIDDLEWARE,
  User,
  Location,
  Store,
} from "@/types";
import { LOCATION_DECIMALS } from "@/utils/constants";
import { useStoreStore } from "./store";
import { useAnchorWallet } from "solana-wallets-vue";
import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import { marketAbi } from "@/blockchain/abi";
import { connectExtension } from "@/utils/connect_web3";
import { BN, BN_ONE } from "@polkadot/util";
import type { WeightV2 } from "@polkadot/types/interfaces";

import {
  web3AccountsSubscribe,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";

import { ContractPromise } from "@polkadot/api-contract";

type UserStore = {
  accountId: string | null;
  userDetails?: BlockchainUser;
  storeDetails?: Store[];
  blockchainError: {
    userNotFound: boolean;
    message?: string;
  };
};

const env = useRuntimeConfig().public;
export const MAX_CALL_WEIGHT = new BN(5_000_000_000_000).isub(BN_ONE);
export const PROOFSIZE = new BN(1_000_000);

export const storageDepositLimit = null;

const wallet = useAnchorWallet();
export const programID = new PublicKey(
  "89mKL8vWpyvdSimdYoZgXzMF9pb69VopCcAh1DZP41cL"
);
const preflightCommitment = "processed";
const connection = new Connection(env.solanaRpcUrl, preflightCommitment);
const provider = computed(() => {
  if (!wallet.value) return;
  return new AnchorProvider(
    connection,
    wallet.value,
    AnchorProvider.defaultOptions()
  );
});
const program = computed(() => {
  if (!provider.value) return;
  return new Program(marketAbi as any, programID, provider.value);
});

export const useUserStore = defineStore(STORE_KEY, {
  state: (): UserStore => ({
    accountId: null,
    userDetails: undefined,
    storeDetails: undefined,
    blockchainError: {
      userNotFound: false,
    },
  }),
  getters: {
    isConnected: (state) => !!state.accountId,
    isNotOnboarded: (state) =>
      !!state.accountId && state.blockchainError.userNotFound,
    passedSecondaryCheck: (state) => {
      return state.userDetails?.[6] === AccountType.BUYER
        ? !!state.userDetails?.[3][0] // buyers only need to give access to their location
        : !!state?.storeDetails?.[0]?.name; // sellers need to set up their store
    },
    username: (state) => state.userDetails?.[1],
    phone: (state) => state.userDetails?.[2],
    location: (state) => state.userDetails?.[3],
    accountType: (state) => state.userDetails?.[6],
  },
  actions: {
    async setUpPolkadotConnectEvents() {
      this.connectToPolkadot();
      web3AccountsSubscribe((accounts) => {
        if (accounts.length) {
          this.blockchainError.userNotFound = false;
          this.accountId = accounts[0].address;
          this.connectToPolkadot();
        }
      });
    },
    async connectToPolkadot() {
      try {
        const accounts = await connectExtension();
        this.accountId = accounts![0].address;

        const blockchainUser = await this.fetchUser(this.accountId);

        this.storeUserDetails(blockchainUser);

        if (this.accountType === AccountType.SELLER) {
          const storeStore = useStoreStore();
          const res = await storeStore.getUserStores(this.accountId!);
          this.storeDetails = res || [];
        }
      } catch (error) {
        console.error("Failed to connect to Wallet:", error);
      }
    },
    async getContract() {
      const api = await this.polkadotApi();
      return new ContractPromise(api as ApiPromise, marketAbi, env.contractId);
    },

    async disconnect() {
      this.accountId = null;
      this.userDetails = undefined;
      this.blockchainError.userNotFound = false;
    },

    async fetchUser(account_id: string): Promise<any> {
      const contract = await this.getContract();

      try {
        const api = await this.polkadotApi();
        const gasLimit = api?.registry.createType("WeightV2", {
          refTime: MAX_CALL_WEIGHT,
          proofSize: PROOFSIZE,
        }) as WeightV2;
        const { result, output } = await contract.query.getUser(
          account_id,
          {
            gasLimit,
            storageDepositLimit,
          },
          account_id
        );
        if (result.isErr) {
          throw new Error(result.asErr.toString());
        } else {
          const userInfo = output?.toJSON();
          const userData = (userInfo as any)?.ok;

          const results = [
            Number(userData.id),
            userData.username,
            userData.phone,
            [
              Number(userData.location.longitude),
              Number(userData.location.latitude),
            ],
            Number(userData.createdAt),
            Number(userData.updatedAt),
            Number(
              userData.accountType.toLowerCase() === AccountType.BUYER ? 0 : 1
            ),
          ];
          return results;
        }
      } catch (error) {
        console.log({ error });
        return [0, "", "", [0, 0], 0, 0, 0];
      }
    },

    async storeUserDetails(user: BlockchainUser) {
      const userCookie = useCookie<User>(STORE_KEY_MIDDLEWARE);

      const hasId = !!user[0];

      if (hasId) {
        const details = {
          id: Number(user[0]),
          username: user[1],
          phone: user[2],
          location: {
            long: Number(user[3][0]),
            lat: Number(user[3][1]),
          },
          createdAt: Number(user[4]),
          updatedAt: Number(user[5]),
          accountType:
            Number(user[6]) === 0 ? AccountType.BUYER : AccountType.SELLER,
        };

        this.userDetails = [
          details.id,
          details.username,
          details.phone,
          [details.location.long, details.location.lat],
          details.createdAt,
          details.updatedAt,
          details.accountType,
        ];

        userCookie.value = {
          id: this.accountId!,
          username: details.username,
          phone: details.phone,
          location: [details.location.long, details.location.lat],
          createdAt: new Date(details.createdAt),
          updatedAt: new Date(details.updatedAt),
          accountType: details.accountType,
        };
      } else if (!hasId && this.accountId) {
        this.blockchainError.userNotFound = true;
      }
    },

    async createUser({
      username,
      phone,
      lat,
      long,
      account_type,
    }: CreateUserDTO): Promise<string | undefined> {
      try {
        const contract = await this.getContract();
        const injector = await web3FromAddress(this.accountId!);
        const api = await this.polkadotApi();
        const { gasRequired } = await contract.query.createUser(
          this.accountId!,
          {
            gasLimit: api?.registry.createType("WeightV2", {
              refTime: MAX_CALL_WEIGHT,
              proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
          },
          username,
          phone,
          lat,
          long,
          account_type == AccountType.BUYER ? 0 : 1
        );

        await contract.tx
          .createUser(
            {
              gasLimit: api?.registry.createType(
                "WeightV2",
                gasRequired
              ) as WeightV2,
              storageDepositLimit,
            },
            username,
            phone,
            lat,
            long,
            account_type == AccountType.BUYER ? 0 : 1
          )
          .signAndSend(this.accountId!, { signer: injector.signer });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const blockchainUser = await this.fetchUser(this.accountId!);
        this.storeUserDetails(blockchainUser);

        this.blockchainError.userNotFound = false;
        return undefined;
      } catch (error) {
        console.error("Error creating user:", error);
        throw error;
      }
    },

    async updateUser({
      username,
      phone,
      lat,
      long,
      account_type,
    }: Partial<CreateUserDTO>): Promise<
      { tx: string; location: Location } | undefined
    > {
      try {
        const contract = await this.getContract();

        const payload = {
          username: username || this.userDetails?.[1],
          phone: phone || this.userDetails?.[2],
          lat: new BN(
            Math.trunc(
              (lat || this.userDetails?.[3][1]!) * 10 ** LOCATION_DECIMALS
            ).toString()
          ),
          lng: new BN(
            Math.trunc(
              (long || this.userDetails?.[3][0]!) * 10 ** LOCATION_DECIMALS
            ).toString()
          ),
          account_type: account_type == AccountType.BUYER ? 0 : 1,
        };

        const api = await this.polkadotApi();

        const { gasRequired } = await contract.query.updateUser(
          this.accountId!,
          {
            gasLimit: api?.registry.createType("WeightV2", {
              refTime: MAX_CALL_WEIGHT,
              proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
          },
          payload.username,
          payload.phone,
          payload.lat,
          payload.lng,
          payload.account_type
        );

        const injector = await web3FromAddress(this.accountId!);

        await contract.tx
          .updateUser(
            {
              gasLimit: api?.registry.createType(
                "WeightV2",
                gasRequired
              ) as WeightV2,
              storageDepositLimit,
            },
            payload.username,
            payload.phone,
            payload.lat,
            payload.lng,
            payload.account_type
          )
          .signAndSend(this.accountId!, { signer: injector.signer });

        return {
          tx: "",
          location: [Number(payload.lng), Number(payload.lat)],
        };
      } catch (error) {
        console.error("Error updating user:", error);
        throw error;
      }
    },
    async fetchUserById(userId: number) {
      try {
        const userStore = useUserStore();
        const contract = await userStore.getContract();
        const api = await userStore.polkadotApi();

        const { result, output } = await contract.query.getUserById(
          this.accountId!,
          {
            gasLimit: api?.registry.createType("WeightV2", {
              refTime: MAX_CALL_WEIGHT,
              proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
          },
          userId
        );
        if (result.isErr) {
          throw new Error(result.asErr.toString());
        }
        const userInfo = output?.toJSON();
        const userData = (userInfo as any)?.ok;

        userData.stores = [];
        try {
          const { result: storeResult, output: storeOutput } =
            await contract.query.get_user_stores(
              this.accountId!,
              {
                gasLimit: api?.registry.createType("WeightV2", {
                  refTime: MAX_CALL_WEIGHT,
                  proofSize: PROOFSIZE,
                }) as WeightV2,
                storageDepositLimit,
              },
              userData.authority
            );
        } catch (_) {}
      } catch (error) {
        throw error;
      }
      // try {
      //   const contract = await this.getContract();
      //   const userInfo = await contract.account.user.all([
      //     {
      //       memcmp: {
      //         offset: 8 + 0,
      //         bytes: ntobs58(userId),
      //       },
      //     },
      //   ]);

      //   const user_ = userInfo[0];

      //   const userStores = await contract.account.store.all([
      //     {
      //       memcmp: {
      //         offset: 8 + 0,
      //         bytes: user_.account.authority,
      //       },
      //     },
      //   ]);

      //   const user: any = {
      //     id: user_.account.id.toString(),
      //     username: user_.account.username,
      //     phone: user_.account.phone,
      //     location: [
      //       user_.account.location.longitude.toString(),
      //       user_.account.location.latitude.toString(),
      //     ],
      //     createdAt: new Date(user_.account.createdAt.toString() * 1000),
      //     updatedAt: new Date(user_.account.updatedAt.toString() * 1000),
      //     accountType: Object.keys(user_.account.accountType)[0],
      //     userAddress: user_.account.authority.toBase58(),
      //   };

      //   user.stores = userStores.map((store: any) => {
      //     return {
      //       id: store.account.id.toString(),
      //       name: store.account.name,
      //       description: store.account.description,
      //       phone: store.account.phone,
      //       location: [
      //         store.account.location.longitude.toString(),
      //         store.account.location.latitude.toString(),
      //       ],
      //     };
      //   });

      //   return user;
      // } catch (error) {
      //   console.log({ error });
      // }
    },

    async polkadotApi() {
      const wsProvider = new WsProvider(env.polkadotRpcUrl);
      return await ApiPromise.create({
        provider: wsProvider,
      });
    },

    async getUserLocation() {
      const env = useRuntimeConfig().public;

      const requestBody = {
        considerIp: true, // Uses the IP address if no other data is available
        // Optionally, you can provide information about WiFi access points and cell towers
      };

      const response = await $fetch(
        `https://www.googleapis.com/geolocation/v1/geolocate?key=${env.googleMapsApiKey}`,
        {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response as {
        location: {
          lat: number;
          lng: number;
        };
        accuracy: number;
      };
    },
  },
  persist: {
    paths: [
      "accountId",
      "userDetails",
      "blockchainError.userNotFound",
      "storeDetails.name",
      "storeDetails.description",
      "storeDetails.location",
    ],
    async afterRestore(context) {
      console.log("store restored");

      if (context.store.accountId) {
        await context.store.setUpPolkadotConnectEvents();
      }
    },
  },
});
