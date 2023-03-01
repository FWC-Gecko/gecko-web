import React from "react";
import { useState } from "react";
import { useEffectOnce } from "../hook/useEffectOnce";
import Input from "../components/section/listToken/Input";
import Select from "../components/section/listToken/Select";
import CheckBox from "../components/section/listToken/CheckBox";
import TextArea from "../components/section/listToken/TextArea";
import FileSelect from "../components/section/listToken/FileSelect";

function RequestUpdate() {
  const [tokenInfo, setTokenInfo] = useState({});
  const [email, setemail] = useState("");

  useEffectOnce(() => {
    setTokenInfo(JSON.parse(localStorage.getItem("update-item")));
  });

  const [requestType, setRequestType] = useState();
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

  const marketTypes = [
    {
      no: "1",
      text: "Spot",
    },
    {
      no: "2",
      text: "Perpetual Swap (No expiry)",
    },
    {
      no: "3",
      text: "Cash-Settled Futreus",
    },
    {
      no: "4",
      text: "Options",
    },
  ];

  return (
    <div>
      <div className="n-container py-5 sm:py-10 lg:w-[80%] xl:w-[40%]">
        <p className="text-3xl font-bold">Request To Update</p>
        <form className="text-sm">
          <p className="mt-10">
            Please review ALL the options and select the CORRECT form to ensure
            that your request gets routed to the correct team. Priority will be
            given to requesters that submit well-structured, actionable, and
            complete information to the CORRECT form.
          </p>
          <div>
            <Select items={requestTypes} setItem={setRequestType} />
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
              description={`Please refer to this format as an example. [Project's full name] -
              [Symbol] - [Request, e.g. Add Market, Add cryptoasset/exchange,
              Update cryptoasset/exchange, update supply]`}
            />
          </div>

          {(requestType === "3" ||
            requestType === "4" ||
            requestType === "5" ||
            requestType === "6" ||
            requestType === "7") && (
            <div className="mt-4">
              <CheckBox
                label={"Methodology Review"}
                description={
                  "I declare that I have read, understood, and fully agree to the terms and conditions stipulated at https://coinmarketcap.com/methodology/"
                }
              />
            </div>
          )}
          {(requestType === "3" ||
            requestType === "4" ||
            requestType === "5" ||
            requestType === "6" ||
            requestType === "7") && (
            <div className="mt-4">
              <CheckBox
                label={"Support Terms"}
                description={
                  "I acknowledge that CoinMarketCap reserves the right, in their sole discretion, to determine the suitability of my request for the site. In the event that CoinMarketCap rejects my request, I acknowledge that CoinMarketCap is not obligated to inform me or provide any reasons for such refusal."
                }
              />
            </div>
          )}
          {(requestType === "3" ||
            requestType === "4" ||
            requestType === "5" ||
            requestType === "6" ||
            requestType === "7") && (
            <div className="mt-4">
              <CheckBox
                label={"Accuracy Declaration"}
                description={
                  "I declare that the information provided on the form is accurate and complete to the best of my knowledge and that failure to fulfill these requirements may render my request inadmissible."
                }
              />
            </div>
          )}
          {requestType === "3" && (
            <div className="mt-4">
              <Select
                label={"Market Type"}
                items={marketTypes}
                description={
                  "Please indicate whether the market is classified as 'Spot', 'Perpetual swap', 'Options', or 'Physically-delivered futures'."
                }
              />
            </div>
          )}

          {requestType === "3" && (
            <div className="mt-4">
              <CheckBox
                label={"USD$1000 Volume (24-hr)"}
                description={
                  "I have checked and verified that the market(s)/pair(s) have at least USD$1000 trading volume (24-hr)."
                }
              />
            </div>
          )}
          {(requestType === "3" ||
            requestType === "4" ||
            requestType === "5" ||
            requestType === "6" ||
            requestType === "7") && (
            <div className="mt-4">
              <TextArea
                label={"Project(s)' CMC URL(s)"}
                description={
                  "Example: If you are looking to update information for Chainlink on CoinMarketCap, please provide the following link: https://coinmarketcap.com/currencies/chainlink. If you are unable to provide CMC URL(s), please FIRST submit a request to add a NEW cryptoasset/exchange."
                }
              />
            </div>
          )}
          {(requestType === "4" || requestType === "5") && (
            <div className="mt-4">
              <TextArea
                label={"Annex C - Supply Update"}
                description={
                  "Paste the URL of your completed Annex C Google Sheet here. Please review the instructions in Cell A1 here - https://docs.google.com/spreadsheets/d/1ON2o9fZtdj6aa_uaT7ALtGx1VxFnIDUi8-uS-fWji0o/edit#gid=1300521795 and paste the URL of your Google Sheet here."
                }
              />
            </div>
          )}
          {requestType === "3" && (
            <div className="mt-4">
              <TextArea
                label={"Direct Link to Market(s)/Pair(s)"}
                description={
                  "Provide valid URLs that link directly to the specific market(s)/pair(s), rather than the exchange. For example, https://www.binance.com/en/trade/pro/BTC_USDT INSTEAD of www.binance.com."
                }
              />
            </div>
          )}
          {(requestType === "6" || requestType === "7") && (
            <div className="mt-4">
              <TextArea
                label={"Describe what you would like us to update/address."}
                description={
                  "Be (i) specific, (ii) detailed, and (iii) concise. Review our data admissibility guidelines to understand our policies and the standard of proof required - (https://coinmarketcap.zendesk.com/hc/en-us/articles/360034124351-Listings-Criteria)."
                }
              />
            </div>
          )}
          {(requestType === "3" ||
            requestType === "4" ||
            requestType === "5" ||
            requestType === "6" ||
            requestType === "7") && (
            <div className="mt-4">
              <TextArea
                label={"Proof/Supporting evidence/documents"}
                description={
                  "Provide proof (e.g. imgur, gyazo) that the request is authentic (e.g. info is reflected on website, announcement thread, twitter page, etc.). Please ensure that the requested updates match what is found on the project’s website/social media accounts. If the request entails changing the project’s website, please explain why the team is unable to get the original URL to redirect to the new website. Type 'NA' if not applicable."
                }
              />
            </div>
          )}
          <div className="mt-4">
            <FileSelect />
          </div>
          <div className="mt-10 flex justify-center">
            <button className="bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] py-2 px-10 flex gap-1 justify-center items-center rounded-full text-white font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestUpdate;
