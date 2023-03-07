import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import Input from "../../components/section/auth/Input";
import SubmitButton from "../../components/section/auth/SubmitButton";
import useAuth from "../../hook/useAuth";
import Container from "./Container";
function ResetPassword() {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password1) {
      setAlert("Password not matched.", "warning");
      return false;
    }

    // Get Token
    const fullUrl = window.location.href;
    const temp = fullUrl.split("/");
    const token = temp[temp.length - 1];
    const res = await resetPassword({
      token: token,
      password,
    });
    if (res) {
      navigate("/login");
    }
  };

  return (
    <Container>
      <div className="max-w-[400px] w-11/12 m-auto text-white/90">
        <form onSubmit={onSubmit}>
          <p className="text-center font-bold text-2xl sm:text-3xl">
            Reset Password
          </p>
          <p className="text-center font-normal text-md mt-6">
            Enter your new password below , we're just being extra safe.
          </p>

          <div className="mt-10 sm:mt-20">
            <Input
              type={"password"}
              label="Password"
              placeholder={"Enter new password"}
              className={"mt-3"}
              value={password}
              onChange={setPassword}
            />
          </div>
          <div className="mt-4">
            <Input
              type={"password"}
              label="Confirm Password"
              placeholder={"Enter confirm password"}
              className={"mt-3"}
              value={password1}
              onChange={setPassword1}
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

export default ResetPassword;
