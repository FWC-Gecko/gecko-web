import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/section/listToken/Input";
import NextButton from "../../components/section/listToken/NextButton";
import PreviousButton from "../../components/section/listToken/PreviousButton";
import useLoading from "../../hook/useLoading";
import useToken from "../../hook/useToken";
import Multiselect from "multiselect-react-dropdown";

function Step4({ activeStep, setActiveStep, assetstags }) {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { list } = useToken();

  let list_token_data = JSON.parse(localStorage.getItem("list-token"));

  const [website1, setWebsite1] = useState(list_token_data?.website1);
  const [website2, setWebsite2] = useState(list_token_data?.website2);
  const [cryptoAssetTags, setCryptoAssetTags] = useState(
    list_token_data?.cryptoAssetTags
  );
  const [coinmarketcap, setCoinmarketcap] = useState(
    list_token_data?.coinmarketcap
  );
  const [coingecko, setCoingecko] = useState(list_token_data?.coingecko);
  const [explorer, setExplorer] = useState(list_token_data?.explorer);
  const [whitepaper, setWhitepaper] = useState(list_token_data?.whitepaper);

  const [telegram, setTelegram] = useState(list_token_data?.telegram);
  const [twitter, setTwitter] = useState(list_token_data?.twitter);
  const [instagram, setInstagram] = useState(list_token_data?.instagram);
  const [github, setGithub] = useState(list_token_data?.github);
  const [linkedin, setLinkedin] = useState(list_token_data?.linkedin);
  const [youtube, setYoutube] = useState(list_token_data?.youtube);
  const [reddit, setReddit] = useState(list_token_data?.reddit);
  const [medium, setMedium] = useState(list_token_data?.medium);
  const [twitch, setTwitch] = useState(list_token_data?.twitch);
  const [facebook, setFacebook] = useState(list_token_data?.facebook);
  const [email, setEmail] = useState(list_token_data?.email);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    saveToLocalStorage();
    const res = await list(list_token_data);
    setLoading(false);
    if (res) {
      localStorage.removeItem("list-token");
      navigate("/");
    }
  };

  const onPrevStep = async () => {
    setLoading(true);
    saveToLocalStorage();
    setLoading(false);
    setActiveStep(activeStep - 1);
  };

  const saveToLocalStorage = () => {
    list_token_data.website1 = website1;
    list_token_data.website2 = website2;
    list_token_data.cryptoAssetTags = cryptoAssetTags;
    list_token_data.coinmarketcap = coinmarketcap;
    list_token_data.coingecko = coingecko;
    list_token_data.explorer = explorer;
    list_token_data.whitepaper = whitepaper;
    list_token_data.telegram = telegram;
    list_token_data.twitter = twitter;
    list_token_data.instagram = instagram;
    list_token_data.github = github;
    list_token_data.linkedin = linkedin;
    list_token_data.youtube = youtube;
    list_token_data.reddit = reddit;
    list_token_data.medium = medium;
    list_token_data.twitch = twitch;
    list_token_data.facebook = facebook;
    list_token_data.email = email;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
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
        <div className="mt-6">
          <p className="font-medium">Cryptoasset Tags*</p>
          <Multiselect
            options={assetstags} // Options to display in the dropdown
            selectedValues={cryptoAssetTags} // Preselected value to persist in dropdown
            className="mt-2 bg-transparent outline-0 w-full text-color2 "
            isObject={false}
            onSelect={(selectedList) => {
              setCryptoAssetTags(selectedList);
            }}
            onRemove={(selectedList) => {
              setCryptoAssetTags(selectedList);
            }}
            style={{
              multiselectContainer: {
                padding: 0,
              },
              chips: {
                background: "#23242E",
              },
              searchBox: {
                overflow: "auto",
                width: "100%",
                border: "none",
                background: "#575A7030",
                padding: 6,
                margin: 0,
              },
            }}
            // selectionLimit={4}
          />
        </div>
        <div className="mt-6 flex justify-between gap-6">
          <Input
            label="Coingecko URL"
            placeholder={"Enter Coingecko URL"}
            value={coingecko}
            onChange={setCoingecko}
            required={false}
          />
          <Input
            label="Coinmarketcap URL"
            placeholder={"Enter Coinmarketcap URL"}
            value={coinmarketcap}
            onChange={setCoinmarketcap}
            required={false}
          />
        </div>
        <div className="mt-6 flex justify-between gap-6">
          <Input
            label="WhitePaper"
            placeholder={"Enter WhitePaper"}
            value={whitepaper}
            onChange={setWhitepaper}
            required={false}
          />
          <Input
            label="Block Explorer"
            placeholder={"Enter Block Explorer"}
            value={explorer}
            onChange={setExplorer}
            required={false}
          />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-6">
          <Input
            label="Telegram"
            placeholder={"Enter Telegram"}
            value={telegram}
            onChange={setTelegram}
            required={false}
          />
          <Input
            label="Twitter"
            placeholder={"Enter Twitter"}
            value={twitter}
            onChange={setTwitter}
            required={false}
          />
          <Input
            label="Instagram"
            placeholder={"Enter Instagram"}
            value={instagram}
            onChange={setInstagram}
            required={false}
          />
          <Input
            label="Github"
            placeholder={"Enter Github"}
            value={github}
            onChange={setGithub}
            required={false}
          />
          <Input
            label="Linkedin"
            placeholder={"Enter Linkedin"}
            value={linkedin}
            onChange={setLinkedin}
            required={false}
          />
          <Input
            label="Youtube"
            placeholder={"Enter Youtube"}
            value={youtube}
            onChange={setYoutube}
            required={false}
          />
          <Input
            label="Reddit"
            placeholder={"Enter Reddit"}
            value={reddit}
            onChange={setReddit}
            required={false}
          />
          <Input
            label="Medium"
            placeholder={"Enter Medium"}
            value={medium}
            onChange={setMedium}
            required={false}
          />
          <Input
            label="Twitch"
            placeholder={"Enter Twitch"}
            value={twitch}
            onChange={setTwitch}
            required={false}
          />
          <Input
            label="Facebook"
            placeholder={"Enter Facebook"}
            value={facebook}
            onChange={setFacebook}
            required={false}
          />
          <Input
            label="Email"
            placeholder={"Enter Email"}
            value={email}
            onChange={setEmail}
            required={false}
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <PreviousButton onClick={onPrevStep} />
          <NextButton text={"Submit"} />
        </div>
      </form>
    </div>
  );
}

export default Step4;
