import { setAlert } from "../actions/alert";

import api from "../utils/api";

export default function useExchanges() {
  const getExchangesList = async () => {
    try {
      const res = await api.get("/global/exchanges");
      if (res.data.success) {
        return res.data.data.exchanges;
      }
      return [];
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Sesrver Error.", "error");
      }
      return [];
    }
  };

  return {
    getExchangesList
  };
}
