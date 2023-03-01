import React from "react";
import { useState } from "react";
import { useEffectOnce } from "../hook/useEffectOnce";
import Input from "../components/section/listToken/Input";

function RequestUpdate() {
  const [tokenInfo, setTokenInfo] = useState({});
  const [email, setemail] = useState("");

  useEffectOnce(() => {
    setTokenInfo(JSON.parse(localStorage.getItem("update-item")));
  });

  return (
    <div>
      <div className="n-container py-5 sm:py-10 lg:w-[60%] xl:w-[40%]">
        <p className="text-3xl font-bold">Request To Update</p>
        <form className="text-sm">
          <p className="mt-10">
            Please review ALL the options and select the CORRECT form to ensure
            that your request gets routed to the correct team. Priority will be
            given to requesters that submit well-structured, actionable, and
            complete information to the CORRECT form.
          </p>
          <div className="mt-4">
            <Input
              label="Your Email"
              placeholder={"Enter Email Address"}
              value={email}
              onChange={setemail}
              required={false}
            />
          </div>
          <div className="mt-4">
            <Input
              label="Subject Field (Please adhere to the format)"
              placeholder={"Subject Fields"}
              value={email}
              onChange={setemail}
              required={false}
            />
          </div>
          <div className="mt-2 text-[0.75rem]">
            Please refer to this format as an example. [Project's full name] -
            [Symbol] - [Request, e.g. Add Market, Add cryptoasset/exchange,
            Update cryptoasset/exchange, update supply]
          </div>
          <div className="mt-4">
            <Input
              label="Project(s)' CMC URL(s)"
              placeholder={"Type URL(s) here"}
              value={email}
              onChange={setemail}
              required={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestUpdate;
