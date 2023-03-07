import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

function VerificationEmail() {
  return (
    <Container>
      <div className="max-w-[400px] w-11/12 m-auto text-white/90">
        <p className="font-bold text-3xl mt-3 text-center">
          Reset Account Password
        </p>
        <p className="text-start font-medium text-xl sm:text-2xl mt-16">
          Check email for reset link
        </p>
        <p className="text-start font-normal text-md mt-6 max-w-[600px]">
          An email has been sent to your email. Check the inbox of the your
          email account, and click the reset link provided.
        </p>
        <Link to={"/auth/forgot-password"}>
          <p className="mt-10 text-center">Didn't receive an email?</p>
        </Link>
      </div>
    </Container>
  );
}

export default VerificationEmail;
