import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { GoogleLogin } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import JWTDecode from "jwt-decode";
// import { googleLogin } from "../../actions/auth";

import Title from "../../components/common/title/Title";

const SingUp = ({ setAlert, register, isAuthenticated }) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (password !== password2) {
    //   setAlert("Passwords do not match", "danger");
    // } else {
    register({ name, email, password });
    // }
  };

  const handleLogin = (tokenResponse) => {
    const user = JWTDecode(tokenResponse.credential);
    // googleLogin({
    //   name: user.given_name,
    //   email: user.email,
    //   type: "google",
    // });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="">
        <Title title={"Sign Up"} />

        <div className="bg-third dark:bg-thirdDark py-10">
          <div className="n-container">
            <div className="max-w-[400px] w-11/12 m-auto text-black dark:text-white">
              <div>
                <p>Nickname</p>
                <input
                  type={"text"}
                  placeholder="Enter nickname"
                  className="py-2 px-4 w-full bg-fourth dark:bg-fourthDark border border-black dark:border-0 mt-2 rounded"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>

              <div className="mt-5">
                <p>Email</p>
                <input
                  type={"email"}
                  placeholder="Enter email"
                  className="py-2 px-4 w-full bg-fourth dark:bg-fourthDark border border-black dark:border-0 mt-2 rounded"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>

              <div className="mt-5">
                <p>Password</p>
                <input
                  type={"password"}
                  placeholder="Enter password"
                  className="py-2 px-4 w-full bg-fourth dark:bg-fourthDark border border-black dark:border-0 mt-2 rounded"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>

              <p className="mt-5 text-sm items-center flex gap-1">
                <input type={"checkbox"} /> Sign up to the newsletter to get the
                latest updates from us
              </p>
              <p className="mt-2 text-sm items-center flex gap-1">
                <input type={"checkbox"} />I agree to Staking Rewards{" "}
                <span className="text-[#FF2F40]">Terms of Service</span> &{" "}
                <span className="text-[#FF2F40]">Privacy Policy</span>
              </p>

              <button
                className="w-full bg-[#FF2F40] text-white mt-5 h-10 rounded"
                onClick={onSubmit}
              >
                SING UP
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

SingUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(SingUp);
