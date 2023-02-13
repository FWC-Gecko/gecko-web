import { setAlert } from "../actions/alert";

import api from "../utils/api";

export default function usePost() {
  const addPost = async (req) => {
    try {
      const res = await api.post("/customer/posts/add", req);
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

  const getPosts = async (type) => {
    try {
      const res = await api.get(`/global/posts/${type}`);
      if (res.data.success) {
        return res.data.data.posts;
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
    addPost,
    getPosts,
  };
}
