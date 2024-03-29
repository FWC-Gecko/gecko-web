import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hook/useToken";
import Ad from "../../components/section/ad/Ad";
import Satistic from "../../components/section/tokenDetail/Satistic";
import TokenInfo from "../../components/section/tokenDetail/TokenInfo";
import Converter from "../../components/section/tokenDetail/Converter";
import Chat from "../../components/section/tokenDetail/Chat";
import Description from "../../components/section/tokenDetail/Description";
import Revaluation from "../../components/section/tokenDetail/Revaluation";
import Estimate from "../../components/section/tokenDetail/Estimate";
import News from "../../components/section/tokenDetail/News";
import { useEffectOnce } from "../../hook/useEffectOnce";
import { useParams } from "react-router-dom";
import Overview from "../../components/section/tokenDetail/overview/Overview";
import HistoricalData from "../../components/section/tokenDetail/HistoricalData";
import Markets from "../../components/section/tokenDetail/Markets";
import useLoading from "../../hook/useLoading";

function TokenDetail() {
  const { setLoading } = useLoading();
  const navigate = useNavigate();

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

  useEffectOnce(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  const [tokenInfo, setTokenInfo] = useState({});
  const subMenus = [
    "Overview",
    "Markets",
    "Historical Data",
    "News",
    // "Price Estimates",
    // "More Info",
  ];

  const [subMenu, setSubMenu] = useState(subMenus[0]);

  return (
    <>
      <Ad />
      <div className="pt-5 pb-10">
        <div className="n-container">
          <div className="bg-[#1B1C23]/10 dark:bg-[#1B1C23]/70 rounded-3xl flex justify-between items-center overflow-hidden netBg">
            <div className="flex justify-start items-center gap-4 pl-4 sm:pl-10 h-32 sm:h-48 z-10 text-black dark:text-white ">
              <img src={tokenInfo && tokenInfo.logo} alt="" />
              <div className="">
                <p className=" text-2xl sm:text-3xl font-bold">
                  {tokenInfo && tokenInfo.name}
                </p>
                <p className="text-sm mt-3">
                  Home {`> `}
                  <span className="text-[#BA4DF9]">
                    {tokenInfo && tokenInfo.name}
                  </span>
                </p>
                {/* <Link to={"/request-update"}> */}
                <button
                  onClick={() => {
                    localStorage.setItem(
                      "update-item",
                      JSON.stringify(tokenInfo)
                    );
                    navigate(`/request-update/${tokenId}`);
                  }}
                  className="text-white text-sm px-6 py-1.5 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-3"
                >
                  Request update
                </button>
                {/* </Link> */}
              </div>
            </div>
            <div className="absolute hidden sm:block sm:relative right-0">
              <img src="/img/56538722.png" alt="" className="h-32 sm:h-48" />
            </div>
          </div>
          <div className="mt-5 sm:mt-10">
            <TokenInfo tokenInfo={tokenInfo} />
          </div>
          <div className="mt-5 sm:mt-10">
            <div className="itemBg5 rounded-full flex justify-start p-2 border-[#23262F] dark:border overflow-auto w-full">
              {subMenus.map((row, key) => {
                return (
                  <button
                    key={key}
                    className={`px-6 py-2 rounded-full whitespace-nowrap ${
                      subMenu === row
                        ? "bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white"
                        : "text-[#8E8E8E]"
                    } `}
                    onClick={() => setSubMenu(row)}
                  >
                    {row}
                  </button>
                );
              })}
            </div>
            {subMenu === "Overview" && (
              <Overview tokenId={tokenId} tokenInfo={tokenInfo} />
            )}
            {subMenu === "Markets" && (
              <Markets tokenId={tokenId} tokenInfo={tokenInfo} />
            )}
            {subMenu === "Price Estimates" && <Estimate />}
            {subMenu === "News" && (
              <News tokenId={tokenId} tokenInfo={tokenInfo} />
            )}
            {subMenu === "Historical Data" && (
              <HistoricalData tokenId={tokenId} tokenInfo={tokenInfo} />
            )}
          </div>
          <div className="mt-5 sm:mt-10 sm:flex justify-between gap-6">
            <Converter tokenInfo={tokenInfo} />
            <Chat tokenInfo={tokenInfo} />
          </div>
          <Description tokenInfo={tokenInfo} />
          <Revaluation tokenInfo={tokenInfo} />
          <Satistic tokenInfo={tokenInfo} />
        </div>
      </div>
      <Ad />
    </>
  );
}

export default TokenDetail;
