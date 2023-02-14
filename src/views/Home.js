import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Ad from "../components/section/ad/Ad";
import AssetsTable from "../components/section/assets/AssetsTable";
import LeftTokenPart from "../components/section/home/LeftTokenPart";
import NewTokens from "../components/section/home/NewTokens";
import RightTokenPart from "../components/section/home/RightTokenPart";
import TrendingTokens from "../components/section/home/TrendingTokens";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Ad />
      <div className="pt-5 pb-10">
        <div className="n-container rounded-2xl bg-gradient-to-t from-[#121318]/0 to-[#1B1C23]/5 dark:from-[#1B1C23]/0 dark:to-[#121318] p-4 sm:p-10">
          <div className="flex justify-between flex-col-reverse sm:flex-row items-center gap-10">
            <div className="sm:w-1/2">
              <p className="text-color2 dark:text-white text-2xl sm:text-4xl font-bold tracking-widest text-center sm:text-start leading-snug">
                Today's Cryptocurrency Prices By{" "}
                <span className="text-[#BA4DF9]">FWC Digital</span>
              </p>
              <p className="text-color2 dark:text-white text-lg sm:text-xl mt-5 leading-relaxed text-center sm:text-start">
                The total crypto market volume over the last 24 hours is{" "}
                <span className="text-[#BA4DF9]">$31.40B</span>, which makes a{" "}
                <span className="text-[#BA4DF9]">29.97</span>% increase. The
                total volume in DeFi is currently{" "}
                <span className="text-[#BA4DF9]">$2.13B</span>,{" "}
                <span className="text-[#BA4DF9]">6.78%</span> of the total
                crypto market <span className="text-[#BA4DF9]">24-hour</span>{" "}
                volume.
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-6">
                  Start Trading
                </button>
              </div>
            </div>
            <div className="sm:w-1/2">
              <img src="/img/Cap2e1.png" alt="" className="rounded-lg " />
            </div>
          </div>
        </div>
        <div className="n-container">
          <div className="sm:flex justify-between">
            <div className="sm:w-1/2">
              <LeftTokenPart />
            </div>
            <div className="sm:w-1/2">
              <RightTokenPart />
            </div>
          </div>
          <AssetsTable />

          <div className="sm:flex justify-between items-center gap-10 mt-10 sm:mt-20">
            <div className="sm:w-1/2">
              <img src="/img/plt.png" alt="" />
            </div>
            <div className="sm:w-1/2 mt-5 sm:mt-0 text-[#101115] dark:text-white">
              <p className="text-2xl sm:text-4xl font-bold leading-snug text-center sm:text-start">
                Be The First To Know About{" "}
                <span className="text-[#BA4DF9]">Crypto News</span> Every Day
              </p>
              <p className="text-lg mt-5 leading-relaxed text-center sm:text-start">
                Get crypto analysis, news and updates right to your inbox! Sign
                up here so you don't miss a single newsletter.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Link to={"/signup"}>
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-6">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad />
    </>
  );
};

export default Home;
