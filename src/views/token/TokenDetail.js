import React, { useState, useEffect } from "react";
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

function TokenDetail() {
  useEffectOnce(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  const subMenus = [
    "Overview",
    "Markets",
    "Historical Data",
    "News",
    "Price Estimates",
    "More Info",
  ];

  const [subMenu, setSubMenu] = useState(subMenus[0]);

  const { getTokenInformation } = useToken();

  useEffect(async () => {
    const res = await getTokenInformation("63e52c62c0b59ca123be5f2a");
  }, []);

  return (
    <>
      <Ad />
      <div className="pt-5 pb-10">
        <div className="n-container">
          <div className="bg-[#1B1C23]/10 dark:bg-[#1B1C23]/70 rounded-3xl flex justify-between items-center overflow-hidden netBg">
            <div className="flex justify-start items-center gap-4 pl-4 sm:pl-10 h-32 sm:h-48 z-10 text-black dark:text-white ">
              <img src="/img/token-detail.png" alt="" />
              <div className="">
                <p className=" text-2xl sm:text-3xl font-bold">
                  Football World Community Token
                </p>
                <p className="text-sm mt-3">
                  Home {`> `}
                  <span className="text-[#BA4DF9]">
                    Football World Community Token
                  </span>
                </p>
                <button className="text-white text-sm px-6 py-1.5 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-3">
                  Request update
                </button>
              </div>
            </div>
            <div className="absolute sm:relative right-0">
              <img src="/img/56538722.png" alt="" className="h-32 sm:h-48" />
            </div>
          </div>
          <div className="mt-5 sm:mt-10">
            <TokenInfo />
          </div>
          <div className="mt-5 sm:mt-10">
            <div className="itemBg5 rounded-full w-max p-2 border-[#23262F] dark:border">
              {subMenus.map((row, key) => {
                return (
                  <button
                    key={key}
                    className={`px-6 py-2 rounded-full  ${
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
            {subMenu === "Price Estimates" && <Estimate />}
            {subMenu === "News" && <News />}
          </div>
          <div className="mt-5 sm:mt-10 flex justify-between gap-6">
            <Converter />
            <Chat />
          </div>
          <Description />
          <Revaluation />
          <Satistic />
        </div>
      </div>
      <Ad />
    </>
  );
}

export default TokenDetail;
