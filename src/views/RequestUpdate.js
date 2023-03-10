import React from "react";
import { useState } from "react";
import { useEffectOnce } from "../hook/useEffectOnce";
import Input from "../components/section/listToken/Input";
import Select from "../components/section/listToken/Select";
import CheckBox from "../components/section/listToken/CheckBox";
import TextArea from "../components/section/listToken/TextArea";
import FileSelect from "../components/section/listToken/FileSelect";
import useLoading from "../hook/useLoading";
import { Link, useNavigate, useParams } from "react-router-dom";
import useToken from "../hook/useToken";
import { formatAddress } from "../utils";

const tokenTypes = [
  { no: 0, text: "BNB" },
  { no: 1, text: "USDT" },
  { no: 2, text: "BUSD" },
  { no: 3, text: "FWC" },
];

function RequestUpdate() {
  const { getWalletAddress, submitUpdateRequest } = useToken();
  const [tokenInfo, setTokenInfo] = useState({});
  const [tokenPrices, setTokenPrices] = useState([]);
  const [step, setStep] = useState(0);
  const [walletAddress, setWalletAddress] = useState(
    "0x7D9209a1b4aC33710bc6F918F8C4166a1898eab8"
  );
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState(0);
  const { setLoading } = useLoading();

  const { tokenId } = useParams();
  const { getTokenInformation } = useToken();

  useEffectOnce(() => {
    const getTokenInfo = async () => {
      setLoading(true);
      const res = await getTokenInformation(tokenId);
      setLoading(false);
      setTokenInfo(res.token);
    };
    getTokenInfo();
  });

  const [email, setemail] = useState("");

  useEffectOnce(() => {
    setTokenInfo(JSON.parse(localStorage.getItem("update-item")));
  });

  const [requestType, setRequestType] = useState();
  const requestTypes = [
    {
      no: "1",
      text: "[Existing Cryptoasset & Exchange] Add market/pair",
    },
    // {
    //   no: "4",
    //   text: "[Existing Cryptoasset] Update supply figures",
    // },
    {
      no: "1",
      text: "[Existing Cryptoasset] Update supply figures",
    },
    {
      no: "1",
      text: "[Existing Cryptoasset] Coin/Token Swap",
    },
    {
      no: "1",
      text: "[Existing Cryptoasset] Update Info (e.g. Rebrand, URL update, Tagging)",
    },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { address, prices } = await getWalletAddress();
    setTokenPrices(prices);
    setWalletAddress(address);
    setStep(step + 1);
  };

  const submitContent = async () => {
    console.log("Handle Submit");
    console.log(email);
    console.log(requestType);
    console.log(walletAddress);
    console.log(amount);
    console.log(tokenTypes[paymentType]["text"]);
    await submitUpdateRequest(
      requestType,
      email,
      walletAddress,
      amount,
      tokenTypes[paymentType]["text"]
    );
    setStep(step + 1);
  };

  return (
    <div>
      <div className="n-container py-5 sm:py-10 lg:w-[80%] xl:w-[40%]">
        <div className="sm:flex justify-between items-center">
          <p className="text-xl sm:text-3xl font-bold text-center sm:text-start">
            Request To Update
          </p>
          <div className="flex justify-center sm:justify-end items-center gap-2">
            <img
              src={tokenInfo?.logo}
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p className="text-3xl font-bold">{tokenInfo?.name}</p>
            <p className="text-2xl text-[#BA4DF9] font-bold">
              ({tokenInfo?.symbol})
            </p>
          </div>
        </div>
        <p className="mt-10 text-sm sm:text-base">
          Please review ALL the options and select the CORRECT form to ensure
          that your request gets routed to the correct team. Priority will be
          given to requesters that submit well-structured, actionable, and
          complete information to the CORRECT form.
        </p>
        {step == 0 && (
          <form className="text-sm">
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
                    "I declare that I have read, understood, and fully agree to the terms and conditions stipulated at https://fwc.digital/"
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
                    "I acknowledge that FWC Digital reserves the right, in their sole discretion, to determine the suitability of my request for the site. In the event that FWC Digitial rejects my request, I acknowledge that FWC Digital is not obligated to inform me or provide any reasons for such refusal."
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
                    "Example: If you are looking to update information for Chainlink on FWC Digital, please provide the following link: https://fwc.digital/. If you are unable to provide CMC URL(s), please FIRST submit a request to add a NEW cryptoasset/exchange."
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
                    "Be (i) specific, (ii) detailed, and (iii) concise. Review our data admissibility guidelines to understand our policies and the standard of proof required - (https://fwc.digital/)."
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
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] py-2 px-10 flex gap-1 justify-center items-center rounded-full text-white font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {step == 1 && (
          <div className="my-5">
            <div className="flex justify-between">
              <span>Wallet Address</span>
            </div>
            <Input disabled required={false} value={walletAddress} />
          </div>
        )}
        {step == 2 && (
          <>
            <div className="my-5">
              <span>Payment Type</span>
              <Select
                label={""}
                items={tokenTypes}
                setItem={async (val) => {
                  setPaymentType(val);
                  setAmount(
                    (
                      (tokenPrices[tokenTypes[val].text].toFixed(3) * 100 + 1) /
                      100
                    ).toFixed(2)
                  );
                }}
              />
            </div>
            <div className="my-5">
              <span>Pay Amount</span>
              <Input disabled required={false} value={amount} />
            </div>
          </>
        )}
        {step >= 3 && (
          <div className="my-5">
            <div className="mt-2 flex justify-between">
              <div>Order ID:</div>
              <div className="text-right">123</div>
            </div>
            <div className="mt-2 flex justify-between">
              <div>Wallet Address:</div>
              <p className="text-right" title={walletAddress}>
                {formatAddress(walletAddress)}
              </p>
            </div>
            <div className="mt-2 flex justify-between">
              <div>Payment Type:</div>
              <div className="text-right">
                {tokenTypes[paymentType]["text"]}
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div>Payment Amount:</div>
              <div className="text-right">{amount}</div>
            </div>
          </div>
        )}
        {step !== 0 && step < 4 && (
          <div className="flex justify-between">
            <button
              onClick={() => setStep(step - 1)}
              className="bg-transparent border border-[#5B46DF] py-2 px-10 flex gap-1 justify-center items-center rounded-full  font-medium"
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (step == 3) {
                  submitContent();
                } else {
                  setStep(step + 1);
                }
              }}
              className="bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] py-2 px-10 flex gap-1 justify-center items-center rounded-full text-white font-medium"
            >
              {step < 3 ? "Next" : "Submit"}
            </button>
          </div>
        )}
        {step == 4 && (
          <Link to={"/"}>
            <p className="text-center text-xl sm:text-2xl mt-7 underline font-black">
              {/* Go back to dashboard! */}
              Please send specific amount of token to the address
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default RequestUpdate;
