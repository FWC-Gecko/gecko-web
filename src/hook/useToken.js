import { setAlert } from "../actions/alert";
import { dateToTimeStamp, formatDateDash } from "../utils";

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
        setAlert("Server Error.", "error");
      }
      return false;
    }
  };

  const getTokenInformation = async (tokenID) => {
    try {
      const res = await api.get(`/global/token/${tokenID}`);

      if (res.data.success) {
        return res.data.data;
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

  const getAllowedTokens = async (searchText) => {
    try {
      const res = await api.get(
        `/global/tokens?count=10&search=${searchText}&page=1`
      );
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
        setAlert("Server Error.", "error");
      }
      return [];
    }
  };

  const get5AllowedTokens = async (searchText) => {
    try {
      const res = await api.get(
        `/global/tokens?count=5&search=${searchText}&page=1`
      );
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
        setAlert("Server Error.", "error");
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
        setAlert("Server Error.", "error");
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
    return res?.trendingTokens || [];
  };
  const getLosers = async () => {
    const res = await getFeaturedTokens();
    return res?.lowestTokens || [];
  };
  const getGainers = async () => {
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
        setAlert("Server Error.", "error");
      }
      return [];
    }
  };

  const getTokenOverview = async ({
    tokenId,
    chartType,
    period,
    searchDate,
  }) => {
    try {
      const res = await api.get(
        `/global/token/${tokenId}/overview?period=${period}&timeStart${
          period === "DATE" && `=${formatDateDash(searchDate[0].startDate)}`
        }&timeEnd${
          period === "DATE" && `=${formatDateDash(searchDate[0].endDate)}`
        }`
      );
      if (res.data.success) {
        // return res.data.data.sort(function (a, b) {
        //   // Turn your strings into dates, and then subtract them
        //   // to get a value that is either negative, positive, or zero.
        //   return new Date(a.timestamp) - new Date(b.timestamp);
        // });
        return res.data.data.map((item, index) => {
          return [dateToTimeStamp(item?.timestamp), item?.price];
        });
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

  const getTokenMarketCap = async ({
    tokenId,
    chartType,
    period,
    searchDate,
  }) => {
    try {
      const res = await api.get(
        `/global/token/${tokenId}/overview?period=${period}&timeStart${
          period === "DATE" && `=${formatDateDash(searchDate[0].startDate)}`
        }&timeEnd${
          period === "DATE" && `=${formatDateDash(searchDate[0].endDate)}`
        }`
      );
      if (res.data.success) {
        return res.data.data.map((item, index) => {
          return [dateToTimeStamp(item?.timestamp), item?.marketCap];
        });
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
        setAlert("Server Error.", "error");
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
        setAlert("Server Error.", "error");
      }
      return [];
    }
  };

  const voteToken = async (tokenId, mode = 1) => {
    // Mode - 1: up, -1: down
    try {
      const res = await api.post(
        `/global/token/${tokenId}/${mode === 1 ? "up" : "down"}`
      );
      if (res.data.success) {
        setAlert(res.data.message, "success");
        return true;
      }
      return false;
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Server Error.", "error");
      }
      return false;
    }
  };

  const getVoteStatus = async (tokenId) => {
    try {
      const res = await api.get(`/global/token/${tokenId}/vote`);
      if (res.data.success) {
        return res.data.data.vote;
      }
      return null;
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Server Error.", "error");
      }
      return null;
    }
  };

  const getWalletAddress = async () => {
    try {
      const res = await api.get("/global/new_wallet");
      return {
        address: res.data.data.address,
        prices: res.data.data.price,
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Server Error.", "error");
      }
      return null;
    }
  };

  const getPaymentAmount = async () => {
    try {
      return 1;
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Server Error.", "error");
      }
      return null;
    }
  };

  const submitUpdateRequest = async (
    requestType,
    email,
    walletAddress,
    amount,
    tokenType
  ) => {
    try {
      const res = await api.post("/global/request/submit", {
        type: requestType,
        email: email,
        subject: "Hello, there!",
        market: "2",
        url: "https://fwc.digital/request-update/63eede4cb2699cd445d68a1a",
        description: "Update request test.",
        address: walletAddress,
        paymentToken: tokenType,
      });

      return true;
    } catch (error) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Server Error.", "error");
      }
      return false;
    }
  };

  return {
    list,
    getAllowedTokens,
    get5AllowedTokens,
    getTokenInformation,
    getNewTokens,
    getRecommendInfos,
    getTokenOverview,
    getTokenMarketCap,
    getTrendingTokens,
    getTokenHistoricalData,
    getTokenMarkets,
    getLosers,
    getGainers,
    getVoteStatus,
    voteToken,
    getWalletAddress,
    getPaymentAmount,
    submitUpdateRequest,
  };
}
