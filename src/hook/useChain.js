import { setAlert } from "../actions/alert";

import api from "../utils/api";

export default function useChain() {
  const getChains = async () => {
    try {
      const res = await api.get("/global/listtoken/blockchains");
      if (res?.data?.success) {
        return res?.data?.data?.blockchains;
      }
      return [];
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return [];
    }
  };

  return { getChains };
}
