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
        setAlert("Sesrver Error.", "error");
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
        setAlert("Sesrver Error.", "error");
      }
      return {};
    }
  };

  const getAllowedTokens = async (searchText) => {
    // alert(searchText);
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
        setAlert("Sesrver Error.", "error");
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

  const voteToken = async (tokenId, mode = 1) => {
    try {
      const res = await api.post(
        `/global/token/${tokenId}/${mode == 1 ? "up" : "down"}`
      );
      if (res.data.success) {
        const count = await api.get(`/global/token/${tokenId}/vote`);
        if (count.data.success) {
          console.log(count.data);
          return count.data.data;
        }

        return 0;
      }
      return 0;
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
    getTokenMarkets,
    getLosers,
    getGainers,
  };
}
