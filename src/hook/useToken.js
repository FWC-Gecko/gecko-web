import { setAlert } from "../actions/alert";

import api from "../utils/api";

export default function useToken() {
  const list = async (token) => {
    try {
      const res = await api.post("/tokens/list", token);
      if (res.data.success) {
        setAlert(res.data.message, "success");
        return true;
      }
      return false;
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return false;
    }
  };

  const getAllowedTokens = async () => {
    try {
      const res = await api.get("/tokens/allowed");
      if (res.data.success) {
        return res.data.tokens;
      }
      return [];
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return [];
    }
  };

  return { list, getAllowedTokens };
}
