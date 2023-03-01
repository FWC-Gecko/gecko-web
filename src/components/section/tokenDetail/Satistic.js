import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { formatPrice } from "../../../utils";

function Satistic({ tokenInfo }) {
  return (
    <div className="my-10 sm:my-20">
      <div className="px-0 sm:px-6">
        <div className="sm:flex justify-between items-center gap-4">
          <p className="text-2xl sm:text-4xl font-bold tracking-widest text-center sm:text-start leading-snug">
            <span className="text-[#BA4DF9] text-center sm:text-left">
              {tokenInfo?.symbol} Price
            </span>{" "}
            Statistics
          </p>
        </div>
        <div className="mt-2 sm:mt-4 sm:flex justify-between items-start gap-6">
          <div className="itemBg3 p-3 rounded-lg w-full">
            <p className="text-xl font-medium">{tokenInfo?.name} Price Today</p>
            <div className="itemBg2 rounded-lg my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>{tokenInfo?.name} Price</p>
              <p className="text-[#9B9B9B]">
                {formatPrice(tokenInfo?.price_usd)}
              </p>
            </div>
            <div className="itemBg2 rounded-lg my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>Price Change</p>
              <p
                className={
                  tokenInfo?.percent_change_24h_usd < 0
                    ? "text-[#FF5665]"
                    : "text-[#16C784]"
                }
              >
                {tokenInfo?.percent_change_24h_usd?.toFixed(2)}%
              </p>
            </div>
            <div className="itemBg2 rounded-lg my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>24h Low / 24h High</p>
              <p className="text-[#9B9B9B]">
                {formatPrice(tokenInfo?.low_24h_usd)} /{" "}
                {formatPrice(tokenInfo?.high_24h_usd)}
              </p>
            </div>
            <div className="itemBg2 rounded-lg my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>Trading Volume</p>
              <div className="text-right">
                <p className="text-[#9B9B9B]">
                  {formatPrice(tokenInfo?.volume_24h_usd)}
                </p>
                <p
                  className={
                    tokenInfo?.volume_change_24h_usd < 0
                      ? "text-[#FF5665]"
                      : "text-[#16C784]"
                  }
                >
                  {tokenInfo?.volume_change_24h_usd?.toFixed(2)}%
                </p>
              </div>
            </div>
            <div className="itemBg2 rounded-lg mt-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>Volume / Market Cap</p>
              <p className="text-[#9B9B9B]">
                Infinity <ArrowDropUpIcon className="text-[#FF5665]" />
              </p>
            </div>
          </div>
          <div className="w-full mt-3 sm:mt-0">
            <div className="itemBg3 p-3 rounded-lg w-full">
              <p className="text-xl font-medium">
                {tokenInfo?.name} Market Cap
              </p>
              <div className="itemBg2 rounded-lg my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
                <p>Market Cap</p>
                <div className="text-right">
                  <p className="text-[#9B9B9B]">
                    {formatPrice(tokenInfo?.market_cap_usd)}
                  </p>
                  <p className="text-[#16C784]">1.51%</p>
                </div>
              </div>
              <div className="itemBg2 rounded-lg mt-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
                <p>Fully Diluted Market Cap</p>
                <div className="text-right">
                  <p className="text-[#9B9B9B]">
                    {formatPrice(tokenInfo?.fully_diluted_market_cap_usd)}
                  </p>
                  <p className="text-[#16C784]">17.36%</p>
                </div>
              </div>
            </div>
            <div className="itemBg3 p-3 rounded-lg w-full mt-3">
              <p className="text-xl font-medium">
                {tokenInfo?.name} Price Yesterday
              </p>
              <div className="itemBg2 rounded-lg mt-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
                <p>Yesterday's Low / High</p>
                <div className="text-right">
                  <p className="text-[#9B9B9B]">$22,406.08 /</p>
                  <p className="text-[#9B9B9B]">$23,722.10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r hidden sm:block from-[#5B46DF] to-[#BA4DF9] h-40 rounded-lg -mt-36"></div>
    </div>
  );
}

export default Satistic;
