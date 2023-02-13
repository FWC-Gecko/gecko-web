import { setAlert } from "../actions/alert";

import api from "../utils/api";

export default function useCommunity() {
  const getCommunityFollowersCount = async () => {
    try {
      const res = await api.get("/global/community/followers/count");
      return res.data.data.count;
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return [];
    }
  };

  const followCommunity = async () => {
    try {
      const res = await api.post("/customer/community/follow");
      console.log(res.data);
      return true;
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return [];
    }
  };

  const unFollowCommunity = async () => {
    try {
      const res = await api.get("/customer/community/unfollow");
      return res.data.data.count;
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return [];
    }
  };

  return { getCommunityFollowersCount, followCommunity, unFollowCommunity };
}
