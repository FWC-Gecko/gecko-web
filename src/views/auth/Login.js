import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useAuth from "../../hook/useAuth";
import useLoading from "../../hook/useLoading";
import Input from "../../components/section/auth/Input";
import SubmitButton from "../../components/section/auth/SubmitButton";
import GoogleButton from "../../components/section/auth/GoogleButton";
import Container from "./Container";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
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
      const res = await login(req);
      setLoading(false);
      if (res) {
        console.log(res);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container>
        <div className="max-w-[400px] w-11/12 m-auto text-white/90">
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
              <p className="font-medium text-sm"></p>
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
      </Container>
    </>
  );
};

export default Login;
