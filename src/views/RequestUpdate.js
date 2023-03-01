import React from "react";
import { useState } from "react";
import { useEffectOnce } from "../hook/useEffectOnce";
import Input from "../components/section/listToken/Input";
import Select from "../components/section/listToken/Select";

function RequestUpdate() {
  const [tokenInfo, setTokenInfo] = useState({});
  const [email, setemail] = useState("");

  useEffectOnce(() => {
    setTokenInfo(JSON.parse(localStorage.getItem("update-item")));
  });

  const requestTypes = [
    // {
    //   no: "1",
    //   text: "[New Listing] Add cryptoasset",
    // },
    // {
    //   no: "2",
    //   text: "[New listing] ICO Calendar Form redirect [Apply here instead - https://tinyurl.com/yvwf7ra3]",
    // },
    {
      no: "3",
      text: "[New Listing] Add exchange",
    },
    {
      no: "4",
      text: "[Existing Cryptoasset &amp; Exchange] Add market/pair",
    },
    {
      no: "5",
      text: "[Existing Cryptoasset] Update supply figures",
    },
    {
      no: "6",
      text: "[Existing Cryptoasset] Coin/Token Swap",
    },
    {
      no: "7",
      text: "[Existing Exchange] Update info (e.g. Fiat on-ramp, Rebrand, API update)",
    },
    // {
    //   no: "8",
    //   text: "[Existing Cryptoasset] Update info (e.g. Rebrand, URL update, Tagging)",
    // },
    // {
    //   no: "9",
    //   text: "[Self-reporting Dashboard] Cryptoassets/KOLs/Organizations (official representatives only)",
    // },
    // {
    //   no: "10",
    //   text: "[Self-reporting Dashboard] Exchanges (official representatives only)",
    // },
    // {
    //   no: "11",
    //   text: "Add a new event to the events calendar",
    // },
    // {
    //   no: "12",
    //   text: "Report a bug",
    // },
    // {
    //   no: "13",
    //   text: "Feedback, Questions, Complaints, Account Deletion, &amp; Privacy Data Inquiry",
    // },
    // {
    //   no: "14",
    //   text: "Feature Request",
    // },
    // {
    //   no: "15",
    //   text: "[New Listing] Add Interest Product [Under Maintenance]",
    // },
    // {
    //   no: "16",
    //   text: "[Headlines by CoinMarketCap] Application [Under maintenance]",
    // },
    // {
    //   no: "17",
    //   text: "CoinMarketCap API Inquiries [pro.coinmarketcap.com]",
    // },
    // {
    //   no: "18",
    //   text: "Earn Campaign",
    // },
    // {
    //   no: "19",
    //   text: "CMC Airdrop Campaign",
    // },
    // {
    //   no: "20",
    //   text: "Mobile App Support [iOS and Android]",
    // },
  ];

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
          <div>
            <Select items={requestTypes} />
          </div>
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
