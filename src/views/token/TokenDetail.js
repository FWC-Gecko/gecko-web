import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Ad from "../../components/section/ad/Ad";
import OtherTokenInfo from "../../components/section/tokenDetail/OtherTokenInfo";
import Satistic from "../../components/section/tokenDetail/Satistic";
import Transactions from "../../components/section/tokenDetail/Transactions";
import TokenInfo from "../../components/section/tokenDetail/TokenInfo";
import Chart from "../../components/section/tokenDetail/Chart";
import Converter from "../../components/section/tokenDetail/Converter";
import Chat from "../../components/section/tokenDetail/Chat";
import Description from "../../components/section/tokenDetail/Description";
import Revaluation from "../../components/section/tokenDetail/Revaluation";
import Estimate from "../../components/section/tokenDetail/Estimate";
import News from "../../components/section/tokenDetail/News";

function TokenDetail() {
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
            <Chart />
          </div>
          <div className="mt-5 sm:mt-10 flex justify-between gap-6">
            <Converter />
            <Chat />
          </div>
          <Description />
          <Revaluation />
          <Estimate />
          <Satistic />
          <News />
        </div>
      </div>
      <Ad />
    </>
  );
}

export default TokenDetail;
