import { setAlert } from "../actions/alert";
import {
  AUTH_ERROR,
  GOOGLE_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
} from "../actions/types";
import store from "../store";
import api from "../utils/api";

export default function useAuth() {
  const loadUser = async () => {
    try {
      const res = await api.get("/auth");

      store.dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      store.dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // Login User
  const login = async (req) => {
    try {
      const res = await api.post("/auth", req);

      store.dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      store.dispatch(setAlert("Login Success.", "success"));
      loadUser();
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) =>
          store.dispatch(setAlert(error.msg, "danger"))
        );
      }

      store.dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

  // GOOGLE LOGIN
  const googleLogin = async (formData) => {
    try {
      console.log(formData);
      const res = await api.post("/users/googlesign", formData);
      store.dispatch({
        type: GOOGLE_LOGIN,
        payload: res.data,
      });
      loadUser();
      console.log({ res });
    } catch (err) {
      console.log(err);
      store.dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  return { loadUser, login, googleLogin };
}
