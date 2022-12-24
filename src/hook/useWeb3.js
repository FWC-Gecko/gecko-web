import { SET_LOADING } from "../actions/types";
import store from "../store";

export default function useWeb3() {
  const connectWallet = async () => {
    try {
      console.log("wallet connect");
    } catch (error) {
      console.log(error);
    }
  };

  return { connectWallet };
}
