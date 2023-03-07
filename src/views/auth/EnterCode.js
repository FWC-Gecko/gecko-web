import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import VerificationInput from "react-verification-input";
import SubmitButton from "../../components/section/auth/SubmitButton";
import useAuth from "../../hook/useAuth";
import Container from "./Container";

function EnterCode() {
  const { verifyEmailWithCode, sendVerificationCode } = useAuth();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const checkCode = async (e) => {
    e.preventDefault();

    const data = { email, passcode: code };
    const res = await verifyEmailWithCode(data);
    if (res) {
      navigate(`/login`);
    }
  };

  const resendCode = async () => {
    const data = { email };
    await sendVerificationCode(data);
  };

  return (
    <Container>
      <div className="max-w-[400px] w-11/12 m-auto text-white/90">
        <form onSubmit={checkCode}>
          <div className="max-w-[500px] p-10 m-auto">
            <img
              src="/img/emojione_e-mail.png"
              alt=""
              className="m-auto w-32"
            />
            <p className="text-center font-bold text-2xl sm:text-3xl mt-16">
              Verify Your Email Address
            </p>
            <p className="text-center font-normal text-md mt-4">
              A Verification Code Has Been Sent To
            </p>
            <p className="text-center font-bold text-md mt-2">{email}</p>
            <p className="text-center font-normal text-md mt-10">
              Please check your inbox and enter the verification code below to
              venty your email address. The code will expire in 15 minutes.
            </p>

            <div className="mt-10  flex justify-center">
              <VerificationInput
                value={code}
                length={6}
                onChange={(e) => {
                  setCode(e);
                }}
              />
            </div>

            <div className="mt-0">
              <SubmitButton label={"Verify"} />
              <p
                className="text-md font-semibold cursor-pointer text-end mt-4"
                onClick={resendCode}
              >
                Resend code
              </p>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default EnterCode;
