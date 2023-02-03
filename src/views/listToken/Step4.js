import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/section/listToken/Input";
import useLoading from "../../hook/useLoading";
import useToken from "../../hook/useToken";

function Step4({ activeStep, setActiveStep }) {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { list } = useToken();

  let list_token_data = JSON.parse(localStorage.getItem("list-token"));

  const [website1, setWebsite1] = useState(list_token_data?.website1);
  const [website2, setWebsite2] = useState(list_token_data?.website2);
  const [cryptoassetTags, setCryptoassetTags] = useState(
    list_token_data?.cryptoassetTags
  );
  const [coinmarketcapUrl, setCoinmarketcapUrl] = useState(
    list_token_data?.coinmarketcapUrl
  );
  const [coingeckoURL, setCoingeckoURL] = useState(
    list_token_data?.coingeckoURL
  );
  const [blockExplorer, setBlockExplorer] = useState(
    list_token_data?.blockExplorer
  );
  const [whitePaper, setWhitePaper] = useState(list_token_data?.whitePaper);

  const onSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    // const tokenData = {
    //   position: list_token_data.position,
    //   name: list_token_data.name,
    //   email: list_token_data.email,
    //   contactTelegram: list_token_data.contactTelegram,
    //   token_ticker: list_token_data.tokenTicker,
    //   contract_address: list_token_data.contractAddress,
    //   total_supply: list_token_data.totalSupply,
    //   decimals: list_token_data.decimals,
    //   chain: list_token_data.chain,
    //   project_name: projectName,
    //   coinmarketcap_url: coinmarketcapUrl,
    //   twitter,
    //   telegram,
    //   discord,
    // };

    // const res = await list(tokenData);
    // setLoading(false);
    // if (res) {
    //   localStorage.removeItem("list-token");
    //   navigate("/");
    // }
  };

  const onPrevStep = async () => {
    setLoading(true);
    // list_token_data.projectName = projectName;
    // list_token_data.coinmarketcapUrl = coinmarketcapUrl;
    // list_token_data.twitter = twitter;
    // list_token_data.telegram = telegram;
    // list_token_data.discord = discord;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
    setLoading(false);
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <hr className="text-[#DADADA] my-6" />

      <form onSubmit={onSubmit}>
        <div className="mt-6 flex justify-between gap-6">
          <Input
            label="Website 1*"
            placeholder={"Enter Website 1"}
            value={website1}
            onChange={setWebsite1}
          />
          <Input
            label="Website 2*"
            placeholder={"Enter Website 1"}
            value={website2}
            onChange={setWebsite2}
          />
        </div>
        <div className="mt-6 flex justify-between gap-6">
          <Input
            label="Cryptoasset Tags"
            placeholder={"Enter Cryptoasset Tags"}
            value={cryptoassetTags}
            onChange={setCryptoassetTags}
          />
          <Input
            label="Coinmarketcap URL"
            placeholder={"Enter Coinmarketcap URL"}
            value={coinmarketcapUrl}
            onChange={setCoinmarketcapUrl}
            required={false}
          />
        </div>
        <div className="mt-6 flex justify-between gap-6">
          <Input
            label="Coingecko URL"
            placeholder={"Enter Coingecko URL"}
            value={coingeckoURL}
            onChange={setCoingeckoURL}
            required={false}
          />
          <div className="w-full">
            <p className="text-white font-medium">Block Explorer</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"text"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Block Explorer"
                value={blockExplorer}
                onChange={(e) => setBlockExplorer(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-6">
          <p className="text-white font-medium">WhitePaper</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="Enter WhitePaper"
              value={whitePaper}
              onChange={(e) => setWhitePaper(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between gap-6">
          <div className="w-full">
            <p className="text-white font-medium">Coingecko URL</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"text"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Coingecko URL"
                value={coingeckoURL}
                onChange={(e) => setCoingeckoURL(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-white font-medium">Block Explorer</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"text"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Block Explorer"
                value={blockExplorer}
                onChange={(e) => setBlockExplorer(e.target.value)}
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

export default Step4;
