import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "./Container";
import SubmitButton from "../../components/section/auth/SubmitButton";
import useAuth from "../../hook/useAuth";
import Input from "../../components/section/auth/Input";

function ForgotPassword() {
  const { sendForgotPasswordRequest } = useAuth();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState("");

  const sendCode = async (e) => {
    e.preventDefault();
    const data = { email };
    const res = await sendForgotPasswordRequest(data);

    if (res) {
      navigate(`/auth/verify-email?email=${email}`);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <div className="max-w-[400px] w-11/12 m-auto text-white/90">
        <p className="text-center font-bold text-2xl sm:text-3xl">
          Forget Your Password?
        </p>
        <p className="text-center font-normal text-md mt-6">
          Enter your email below to receive your password reset instructions.
        </p>

        <form onSubmit={sendCode}>
          <div className="mt-10 sm:mt-10">
            <Input
              type={"email"}
              label="Email"
              placeholder={"Enter email"}
              className={"mt-3"}
              value={email}
              onChange={setEmail}
            />
          </div>

          <div className="mt-4">
            <SubmitButton label="Reset Password" />
          </div>
        </form>
      </div>
    </Container>
  );
}

export default ForgotPassword;
