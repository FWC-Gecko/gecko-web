import React from "react";
import { description } from "../../../constants";
import { formatPrice } from "../../../utils";

function Description({ tokenInfo }) {
  return (
    <div>
      <div className="sm:flex justify-between items-center gap-10 mt-10 sm:mt-20">
        <div className="sm:w-1/2">
          <img src="/img/Group10426.png" alt="" />
        </div>
        <div className="sm:w-1/2 mt-5 sm:mt-0 text-[#101115] dark:text-white">
          <p className="text-2xl sm:text-4xl font-bold leading-snug text-center sm:text-start">
            <span className="text-[#BA4DF9]">{tokenInfo?.symbol}</span> Price
            Live Data
          </p>
          <p className="text-sm md:text-lg mt-5 leading-relaxed text-center sm:text-start">
            The live <span className="text-[#BA4DF9]">{tokenInfo?.name}</span>{" "}
            price today is{" "}
            <span className="text-[#BA4DF9]">${tokenInfo?.price_usd}</span> USD
            with a 24-hour trading volume of{" "}
            <span className="text-[#BA4DF9]">
              {formatPrice(tokenInfo?.volume_24h_usd)}
            </span>{" "}
            USD. We update our{" "}
            <span className="text-[#BA4DF9]">{tokenInfo?.symbol}</span> to USD
            price in real-time.{" "}
            <span className="text-[#BA4DF9]">{tokenInfo?.name}</span> is{" "}
            <span className="text-[#BA4DF9]">
              {tokenInfo?.percent_change_24h_usd > 0 ? "up" : "down"}
            </span>{" "}
            {Math.abs(tokenInfo?.percent_change_24h_usd?.toFixed(3))}% in the
            last 24 hours. The current FWC Digital ranking is{" "}
            <span className="text-[#BA4DF9]">#{tokenInfo?.cmc_rank}</span>, with
            a live market cap of
            <span className="text-[#BA4DF9]">
              {formatPrice(tokenInfo?.market_cap_usd)}
            </span>{" "}
            USD. It has a circulating supply of{" "}
            <span className="text-[#BA4DF9]">
              {tokenInfo?.circulating_supply}
            </span>{" "}
            BTC coins.
          </p>
          <p className="text-sm md:text-lg mt-5 leading-relaxed text-center sm:text-start">
            If you would like to know where to buy Bitcoin at the current rate,
            the top cryptocurrency exchanges for trading in{" "}
            <span className="text-[#BA4DF9]">Bitcoin</span>
            stock are currently <span className="text-[#BA4DF9]">
              Binance
            </span>, <span className="text-[#BA4DF9]">BTCEX</span>,{" "}
            <span className="text-[#BA4DF9]">Bybit</span>,{" "}
            <span className="text-[#BA4DF9]">Deepcoin</span>, and{" "}
            <span className="text-[#BA4DF9]">BingX</span>. You can find others
            listed on our{" "}
            <span className="text-[#BA4DF9]">crypto exchanges page</span>.
          </p>
          <p className="mt-10 text-2xl sm:text-4xl font-bold leading-snug text-center sm:text-start">
            What is <span className="text-[#BA4DF9]">{tokenInfo?.name}</span>
            {/* {description[0]} */}
          </p>
          <p className="text-sm md:text-lg leading-5 mt-5 md:leading-relaxed text-center sm:text-start">
            {description[`${tokenInfo.symbol}`]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
