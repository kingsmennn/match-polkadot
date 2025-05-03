import lighthouse from "@lighthouse-web3/sdk";
import { PinataSDK } from "pinata";
const gateway = "https://emerald-odd-bee-965.mypinata.cloud";

class PinataUploadResponse {
  #url: string;
  #gateWay: string;
  constructor(url: string, gateway: string) {
    this.#url = url;
    this.#gateWay = gateway;
  }

  getUrl = () => this.#url;
  getGateWay = () => this.#gateWay;
}

export default function () {
  const env = useRuntimeConfig().public;
  const progress = ref(0);
  const pinata = new PinataSDK({
    pinataJwt: env.pinataJWT,
    pinataGateway: gateway,
  });

  const progressCallback = (progressData: any) => {
    let percentageDone =
      100 - Number((progressData?.total / progressData?.uploaded)?.toFixed(2));
    progress.value = percentageDone;
  };

  const uploadFile = async (file: any) => {
    const { cid } = await pinata.upload.public.file(file);
    const url = await pinata.gateways.public.convert(cid);
    progress.value = 0;
    return url;
  };

  return {
    progress,
    uploadFile,
  };
}
