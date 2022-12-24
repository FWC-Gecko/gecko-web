import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import JWTDecode from "jwt-decode";
import Title from "../../components/common/title/Title";
import { useGoogleLogin } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useAuth from "../../hook/useAuth";
import useLoading from "../../hook/useLoading";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const { t } = useTranslation();
  const { login, googleLogin } = useAuth();
  const { setLoading } = useLoading();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const req = { email, password };
      await login(req);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const user = JWTDecode(tokenResponse.credential);
      console.log("tokenResponse", user);
      setLoading(true);
      await googleLogin({
        name: user.given_name,
        email: user.email,
        type: "google",
      });
      setLoading(false);
    },
  });

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen authBg z-40">
        <div className="sm:w-1/2 h-full flex justify-center items-center bg-gradient-to-t from-[#D38E4C]/20 to-[#1A1B23]/20">
          <div className="max-w-[400px] w-11/12 m-auto text-black">
            <form onSubmit={onSubmit}>
              <Link to="/">
                <img
                  src="/img/logo.png"
                  alt=""
                  className="w-32 h-32 m-auto sm:m-0"
                />
              </Link>
              <p className="text-white font-bold text-4xl text-center sm:text-start">
                Sign Into
              </p>
              <p className="text-white font-bold text-xl mt-3 text-center sm:text-start">
                Your Account
              </p>
              <div className="mt-3">
                <p className="text-white">{t("Email")}</p>
                <input
                  type={"email"}
                  placeholder="Enter email"
                  className="py-2 px-4 w-full mt-2 rounded outline-none bg-gradient-to-t from-[#575A70] to-[#575A70] text-white"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mt-3">
                <p className="text-white">{t("Password")}</p>
                <input
                  type={"password"}
                  placeholder="Enter password"
                  className="py-2 px-4 w-full mt-2 rounded outline-none bg-gradient-to-t from-[#575A70] to-[#575A70] text-white"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                  required
                />
              </div>
              <div className="flex justify-end mt-4">
                {/* <p className="text-sm items-center text-white flex gap-1">
                <input type={"checkbox"} /> {t("Remember Me")}
              </p> */}
                <p className="text-sm text-[#BA4DF9]">Forgot Password?</p>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white mt-5 h-12 rounded"
              >
                {t("LOGIN")}
              </button>
            </form>
            <div className="mt-4 flex items-center text-white justify-between">
              <hr className="w-2/5" />
              <p className="font-bold">{t("OR")}</p>
              <hr className="w-2/5" />
            </div>
            <button
              onClick={onGoogleLogin}
              className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-[#575A70]/40 to-[#575A70]/50 text-white mt-3 h-12 rounded"
            >
              <img src="/img/google.png" alt="" className="w-8" />
              {t("Login in with Google")}
            </button>
            <p className="text-white text-center mt-5">
              {t("Don't have a account")}? &nbsp;
              <Link to={"/signup"}>
                <span className="text-[#BA4DF9]">{t("Sign Up")}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
