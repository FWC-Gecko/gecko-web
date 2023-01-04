import { setAlert } from "../actions/alert";
import store from "../store";

export default function useWeb3() {
  const connectWallet = async () => {
    if (window.ethereum !== undefined) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } else {
      store.dispatch(setAlert("Please install Metamask.", "warning"));
      return false;
    }
  };

  return { connectWallet };
}
