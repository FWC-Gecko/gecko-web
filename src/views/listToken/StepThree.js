import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hook/useLoading";
import useToken from "../../hook/useToken";

function StepThree({ activeStep, setActiveStep }) {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { list } = useToken();
  let list_token_data = JSON.parse(localStorage.getItem("list-token"));
  const [projectName, setProjectName] = useState(list_token_data?.projectName);
  const [coinmarketcapUrl, setCoinmarketcapUrl] = useState(
    list_token_data?.coinmarketcapUrl
  );
  const [twitter, setTwitter] = useState(list_token_data?.twitter);
  const [telegram, setTelegram] = useState(list_token_data?.telegram);
  const [discord, setDiscord] = useState(list_token_data?.discord);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const tokenData = {
      position: list_token_data.position,
      name: list_token_data.name,
      email: list_token_data.email,
      contactTelegram: list_token_data.contactTelegram,
      token_ticker: list_token_data.tokenTicker,
      contract_address: list_token_data.contractAddress,
      total_supply: list_token_data.totalSupply,
      decimals: list_token_data.decimals,
      chain: list_token_data.chain,
      project_name: projectName,
      coinmarketcap_url: coinmarketcapUrl,
      twitter,
      telegram,
      discord,
    };

    const res = await list(tokenData);
    setLoading(false);
    if (res) {
      localStorage.removeItem("list-token");
      navigate("/");
    }
  };

  const onPrevStep = async () => {
    setLoading(true);
    list_token_data.projectName = projectName;
    list_token_data.coinmarketcapUrl = coinmarketcapUrl;
    list_token_data.twitter = twitter;
    list_token_data.telegram = telegram;
    list_token_data.discord = discord;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
    setLoading(false);
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <hr className="text-[#DADADA] my-6" />

      <form onSubmit={onSubmit}>
        <div className="mt-4">
          <p className="text-white font-medium">Project Name</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="Enter Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white font-medium">Coinmarketcap Url</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="Enter coinmarketcap url"
              value={coinmarketcapUrl}
              onChange={(e) => setCoinmarketcapUrl(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-4 flex justify-start items-center gap-2">
          <p className="text-white w-20">Social Url</p>
          <hr className="text-[#23262F] w-full" />
        </div>
        <div className="flex justify-between gap-6 mt-4">
          <div className="w-full">
            <p className="text-white font-medium">Twitter</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"text"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-white font-medium">Telegram</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"text"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Telegram"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-white font-medium">Discord</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"text"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Discord"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="border border-[#BA4DF9] text-white text-sm font-medium rounded-full py-2 px-6"
            onClick={onPrevStep}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#5B46DF] text-white to-[#BA4DF9] text-sm font-medium rounded-full py-2 px-6"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepThree;
