import { defineStore } from "pinia";
import { CreateStoreDTO, Store, STORE_STORE_KEY } from "@/types";
import {
  MAX_CALL_WEIGHT,
  programID,
  PROOFSIZE,
  storageDepositLimit,
  useUserStore,
} from "./user";
import {
  LOCATION_DECIMALS,
  STORE_COUNTER_PUBKEY,
  USER_TAG,
} from "@/utils/constants";
import { getEvmAddress } from "@/utils/contract-utils";
import { SystemProgram } from "@solana/web3.js";
import { useWallet } from "solana-wallets-vue";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { BN } from "@project-serum/anchor";
import { ntobs58 } from "@/utils/nb58";
import { web3FromAddress } from "@polkadot/extension-dapp";
import type { WeightV2 } from "@polkadot/types/interfaces";

export const useStoreStore = defineStore(STORE_STORE_KEY, {
  state: () => ({}),
  getters: {},
  actions: {
    async createStore({
      name,
      description,
      phone,
      latitude,
      longitude,
    }: CreateStoreDTO): Promise<any | undefined> {
      const userStore = useUserStore();
      const { publicKey } = useWallet();
      try {
        const contract = await userStore.getContract();
        const injector = await web3FromAddress(userStore.accountId!);
        const api = await userStore.polkadotApi();

        // new BN(
        //   Math.trunc(
        //     (long || this.userDetails?.[3][0]!) * 10 ** LOCATION_DECIMALS
        //   ).toString()
        // ),
        const long = new BN(Math.trunc(longitude * 10 ** LOCATION_DECIMALS));
        const lat = new BN(Math.trunc(latitude * 10 ** LOCATION_DECIMALS));
        const { gasRequired } = await contract.query.createStore(
          userStore.accountId!,
          {
            gasLimit: api?.registry.createType("WeightV2", {
              refTime: MAX_CALL_WEIGHT,
              proofSize: PROOFSIZE,
            }) as WeightV2,
            storageDepositLimit,
          },
          name,
          description,
          phone,
          lat,
          long
        );

        await contract.tx
          .createStore(
            {
              gasLimit: api?.registry.createType(
                "WeightV2",
                gasRequired
              ) as WeightV2,
              storageDepositLimit,
            },
            name,
            description,
            phone,
            lat,
            long
          )
          .signAndSend(userStore.accountId!, { signer: injector.signer });

        userStore.storeDetails = [
          {
            name,
            description,
            phone,
            location: [Number(long), Number(lat)],
          },
        ];
        return undefined;
      } catch (error) {
        console.error("Error creating user:", error);
        throw error;
      }
    },
    async getUserStores(accountId: string): Promise<any[] | undefined> {
      const userStore = useUserStore();
      const contract = await userStore.getContract();
      try {
        const stores = await contract.account.store.all([
          {
            memcmp: {
              offset: 8 + 0,
              bytes: accountId,
            },
          },
        ]);

        const response: any = stores.map((store) => {
          return [
            store.account.id.toString(),
            store.account.name,
            store.account.description,
            store.account.phone,
            [
              Number(store.account.location.longitude.toString()),
              Number(store.account.location.latitude.toString()),
            ],
          ];
        });

        userStore.storeDetails = response;
        return response;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
