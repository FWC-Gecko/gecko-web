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

  const getFeaturedTokens = async () => {
    try {
      const res = await api.get("/global/tokens/featured");
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

  const getNewTokens = async () => {
    const res = await getFeaturedTokens();
    return res?.newTokens || [];
  };

  const getTrendingTokens = async () => {
    const res = await getFeaturedTokens();
    return res?.highestTokens || [];
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

  const getTokenOverview = async ({ tokenId, chartType, period }) => {
    try {
      const res = await api.get(
        `/global/token/${tokenId}/overview?period=${period}&timeStart&timeEnd`
      );
      if (res.data.success) {
        // return res.data.data.sort(function (a, b) {
        //   // Turn your strings into dates, and then subtract them
        //   // to get a value that is either negative, positive, or zero.
        //   return new Date(a.timestamp) - new Date(b.timestamp);
        // });
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

  const getTokenHistoricalData = async (tokenId) => {
    try {
      const res = await api.get(`/global/token/${tokenId}/historicaldata`);
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

  const getTokenMarkets = async (tokenId) => {
    try {
      const res = await api.get(`/global/token/${tokenId}/markets`);
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
    getTrendingTokens,
    getTokenHistoricalData,
    getTokenMarkets
  };
}
