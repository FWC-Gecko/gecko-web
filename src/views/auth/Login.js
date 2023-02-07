import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useAuth from "../../hook/useAuth";
import useLoading from "../../hook/useLoading";
import Input from "../../components/section/auth/Input";
import SubmitButton from "../../components/section/auth/SubmitButton";
import GoogleButton from "../../components/section/auth/GoogleButton";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { t } = useTranslation();
  const { login } = useAuth();
  const { setLoading } = useLoading();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen authBg z-40">
        <div className="sm:w-1/2 h-full flex justify-center items-center bg-gradient-to-t from-[#BFA391]/70 dark:from-[#694C3E]/10 to-[#A6A0A8]/40 dark:to-[#575561]/30">
          <div className="max-w-[400px] w-11/12 m-auto text-[#101115] dark:text-white">
            <form onSubmit={onSubmit}>
              <Link to="/">
                <img
                  src="/img/logo.png"
                  alt=""
                  className="w-32 h-32 m-auto sm:m-0"
                />
              </Link>
              <p className="font-bold text-4xl text-center sm:text-start">
                Sign In
              </p>
              <p className="font-bold text-xl mt-3 text-center sm:text-start">
                Your Account
              </p>
              <Input
                type={"email"}
                label="Email"
                placeholder={"Enter email"}
                className={"mt-3"}
                value={email}
                onChange={setEmail}
              />
              <Input
                type={"password"}
                label="Password"
                placeholder={"Enter password"}
                className={"mt-3"}
                value={password}
                onChange={setPassword}
              />
              <div className="flex justify-end mt-4">
                <p className="font-medium text-sm">Forgot Password?</p>
              </div>
              <SubmitButton label={"LOGIN"} />
            </form>
            <div className="mt-4 flex items-center  justify-between">
              <hr className="w-2/5 text-white/60" />
              <p className="font-bold">{t("OR")}</p>
              <hr className="w-2/5 text-white/60" />
            </div>
            <GoogleButton label={"Login in with Google"} />
            <p className=" text-center mt-5">
              {t("Don't have a account")}? &nbsp;
              <Link to={"/signup"}>
                <span className="font-bold">{t("Sign Up")}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
