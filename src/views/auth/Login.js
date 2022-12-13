import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, googleLogin } from "../../actions/auth";
import JWTDecode from "jwt-decode";
import Title from "../../components/common/title/Title";
import { GoogleLogin } from "@react-oauth/google";
import { useTranslation } from "react-i18next";

const Login = ({ login, googleLogin, isAuthenticated }) => {
  const { t } = useTranslation();
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

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  const handleLogin = (tokenResponse) => {
    const user = JWTDecode(tokenResponse.credential);
    googleLogin({
      name: user.given_name,
      email: user.email,
      type: "google",
    });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="">
        <Title title={t("Login")} />

        <div className="bg-primaryGray dark:bg-thirdDark py-10">
          <div className="n-container">
            <div className="max-w-[400px] w-11/12 m-auto text-black">
              <div>
                <p>{t("Email")}</p>
                <input
                  type={"text"}
                  placeholder="Enter email"
                  className="py-2 px-4 w-full bg-fourth dark:bg-fourthDark border border-black dark:border-0 mt-2 rounded"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="mt-5">
                <p>{t("Password")}</p>
                <input
                  type={"password"}
                  placeholder="Enter password"
                  className="py-2 px-4 w-full bg-fourth dark:bg-fourthDark border border-black dark:border-0 mt-2 rounded"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                />
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-sm items-center flex gap-1">
                  <input type={"checkbox"} /> {t("Remember Me")}
                </p>
                {/* <p className="text-sm text-[#F4BC1D]">Forgot Password?</p> */}
              </div>
              <button
                className="w-full bg-[#FF2F40] text-white mt-5 h-10 rounded"
                onClick={onSubmit}
              >
                {t("LOGIN")}
              </button>
              <div className="mt-5 flex items-center justify-between">
                <hr className="w-2/5" />
                <p className="font-bold">{t("OR")}</p>
                <hr className="w-2/5" />
              </div>
              <div className="flex justify-center mt-3">
                <GoogleLogin
                  onSuccess={handleLogin}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  width="400"
                  size="large"
                />
              </div>
              <p className="text-black dark:text-white text-center mt-5">
                {t("Don't have a account")}? &nbsp;
                <Link to={"/signup"}>
                  <span className="text-[#FF2F40]">{t("Sign Up")}</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, googleLogin })(Login);
