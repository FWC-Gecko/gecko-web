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

  const getTokenInformation = async (tokenID) => {
    try {
      const res = await api.get(`/global/token/${tokenID}`);

      if (res.data.success) {
        console.log(res.data.data)
        return res.data.data;
      }
      return {}
    } catch (error) {
      return {}
    }
  }

  const getAllowedTokens = async () => {
    try {
      const res = await api.get("/global/tokens?count=30&search=&page=1");
      if (res.data.success) {
        return res.data.data.tokens;
      }
      return [];
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return [];
    }
  };

  return { list, getAllowedTokens, getTokenInformation };
}
