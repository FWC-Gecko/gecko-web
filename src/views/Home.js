import React, { useEffect } from "react";

import Title from "./../components/common/title/Title";
import { useTranslation } from "react-i18next";
import AssetsTable from "../components/section/AssetsTable";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#0B0B0F] pt-5 pb-10">
        <div className="n-container rounded-2xl bg-gradient-to-t from-[#1B1C23]/0 to-[#121318] p-10">
          <div className="flex justify-between items-center gap-10">
            <div className="sm:w-1/2">
              <p className="text-white text-4xl font-bold tracking-widest leading-snug">
                Today's Cryptocurrency Prices By{" "}
                <span className="text-[#BA4DF9]">Football World Community</span>
              </p>
              <p className="text-white text-xl mt-5 leading-relaxed">
                The total crypto market volume over the last 24 hours is{" "}
                <span className="text-[#BA4DF9]">$31.40B</span>, which makes a{" "}
                <span className="text-[#BA4DF9]">29.97</span>% increase. The
                total volume in DeFi is currently{" "}
                <span className="text-[#BA4DF9]">$2.13B</span>,{" "}
                <span className="text-[#BA4DF9]">6.78%</span> of the total
                crypto market <span className="text-[#BA4DF9]">24-hour</span>{" "}
                volume.
              </p>
              <button className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-6">
                Start Trading
              </button>
            </div>
            <div className="sm:w-1/2">
              <img src="/img/prt.png" alt="" />
            </div>
          </div>
        </div>
        <div className="n-container p-10">
          <div className="bg-[#121318] p-6 border border-[#23262F] rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-white font-bold text-2xl">
                What Others Are{" "}
                <span className="text-[#BA4DF9]">Searching</span>
              </p>
              <p className="text-[#BA4DF9] cursor-pointer">
                View Most Popular Cryptocurrency
              </p>
            </div>
            <div className="flex justify-between mt-6">
              <div className="flex justify-start gap-2 items-center">
                <img src="/img/tokens/waves.png" alt="" />
                <p className="text-white text-lg font-bold">Waves</p>
                <p className="text-[#BA4DF9] text-sm font-normal">WAVES</p>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <img src="/img/tokens/bitcoin.png" alt="" />
                <p className="text-white text-lg font-bold">Bitcoin</p>
                <p className="text-[#BA4DF9] text-sm font-normal">BTC</p>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <img src="/img/tokens/cake.png" alt="" />
                <p className="text-white text-lg font-bold">PancakeSwap</p>
                <p className="text-[#BA4DF9] text-sm font-normal">CAKE</p>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <img src="/img/tokens/ETH.png" alt="" />
                <p className="text-white text-lg font-bold">Ethereum</p>
                <p className="text-[#BA4DF9] text-sm font-normal">ETH</p>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <img src="/img/tokens/art.png" alt="" />
                <p className="text-white text-lg font-bold">Ark</p>
                <p className="text-[#BA4DF9] text-sm font-normal">Ark</p>
              </div>
            </div>
          </div>
          <AssetsTable />
          <div className="flex justify-between items-center gap-10 mt-20">
            <div className="sm:w-1/2">
              <img src="/img/plt.png" alt="" />
            </div>
            <div className="sm:w-1/2">
              <p className="text-white text-4xl font-bold leading-snug">
                Be The First To Know About{" "}
                <span className="text-[#BA4DF9]">Crypto News</span> Every Day
              </p>
              <p className="text-white text-lg mt-5 leading-relaxed">
                Get crypto analysis, news and updates right to your inbox! Sign
                up here so you don't miss a single newsletter.
              </p>
              <button className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-6">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
