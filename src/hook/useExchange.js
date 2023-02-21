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
        setAlert("Server Error.", "error");
      }
      return [];
    }
  };

  const getMarketsByID = async (exchangeID = 270) => {
    try {
      const res = await api.get(`/global/exchange/${exchangeID}/markets`);
      if (res.data.success) {
        return res.data.data.pairs;
      }
      return [];
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Server Error.", "error");
      }
      return [];
    }
  };

  const getExchangeByID = async (exchangeID = 270) => {
    try {
      const res = await api.get(`/global/exchange/${exchangeID}`);
      if (res.data.success) {
        return res.data.data.exchange;
      }
      return {};
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Server Error.", "error");
      }
      return {};
    }
  };

  return {
    getExchangesList,
    getExchangeByID,
    getMarketsByID,
  };
}
