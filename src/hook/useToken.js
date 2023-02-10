import { setAlert } from "../actions/alert";

import api from "../utils/api";

export default function useToken() {
  const list = async (token) => {
    try {
      const res = await api.post("/global/listtoken/add", token);
      if (res.data.success) {
        setAlert(res.data.message, "success");
        return true;
      }
      return false;
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Sesrver Error.", "error");
      }
      return false;
    }
  };

  const getTokenInformation = async (tokenID) => {
    try {
      const res = await api.get(`/global/token/${tokenID}`);

      if (res.data.success) {
        console.log(res.data.data);
        return res.data.data;
      }
      return {};
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Sesrver Error.", "error");
      }
      return {};
    }
  };

  const getAllowedTokens = async () => {
    try {
      const res = await api.get("/global/tokens?count=20&search=&page=1");
      if (res.data.success) {
        return res.data.data.tokens.map((item, index) => {
          return { ...item, tid: index };
        });
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

  const getNewTokens = async () => {
    try {
      const res = await api.get("/global/tokens/new");
      if (res.data.success) {
        return res.data.data.tokens;
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

  const getRecommendInfos = async () => {
    try {
      const res = await api.get("/global/recommend");
      if (res.data.success) {
        return res.data.data;
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

  const getTokenOverview = async (tokenId) => {
    try {
      const res = await api.get(
        `/global/token/${tokenId}/overview?period=ALL&timeStart&timeEnd`
      );
      if (res.data.success) {
        return res.data.data;
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
    list,
    getAllowedTokens,
    getTokenInformation,
    getNewTokens,
    getRecommendInfos,
    getTokenOverview,
  };
}
