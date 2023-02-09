import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Satistic() {
  return (
    <div className="my-10 sm:my-20">
      <div className="px-6">
        <div className="flex justify-between items-center gap-4">
          <p className="text-2xl sm:text-4xl font-bold tracking-widest text-center sm:text-start leading-snug">
            <span className="text-[#BA4DF9]">BTC Price</span> Statistics
          </p>

          <button className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-6">
            Show more
            <ChevronRightIcon />
          </button>
        </div>
        <div className="mt-4 flex justify-between items-start gap-6">
          <div className="bg-[#21232C] p-3 rounded-lg w-full">
            <p>Bitcoin Price Today</p>
            <div className="bg-[#121318] my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>QATAR 2022 TOKEN Price</p>
              <p className="text-[#9B9B9B]">$0.000000000099</p>
            </div>
            <div className="bg-[#121318] my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>Price Change</p>
              <p className="text-[#FF5665]">$0.000000000099</p>
            </div>
            <div className="bg-[#121318] my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>24h Low / 24h High</p>
              <p className="text-[#9B9B9B]">
                $0.000000000094 / $0.000000000114
              </p>
            </div>
            <div className="bg-[#121318] my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>Trading Volume</p>
              <div className="text-right">
                <p className="text-[#9B9B9B]">$1,313,963</p>
                <p className="text-[#FF5665]">17.36%</p>
              </div>
            </div>
            <div className="bg-[#121318] mt-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
              <p>Volume / Market Cap</p>
              <p className="text-[#9B9B9B]">
                Infinity <ArrowDropUpIcon className="text-[#FF5665]" />
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#21232C] p-3 rounded-lg w-full">
              <p>Bitcoin Market Cap</p>
              <div className="bg-[#121318] my-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
                <p>Market Cap</p>
                <div className="text-right">
                  <p className="text-[#9B9B9B]">$1,313,963</p>
                  <p className="text-[#16C784]">1.51%</p>
                </div>
              </div>
              <div className="bg-[#121318] mt-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
                <p>Fully Diluted Market Cap</p>
                <div className="text-right">
                  <p className="text-[#9B9B9B]">$1,313,963,200</p>
                  <p className="text-[#16C784]">17.36%</p>
                </div>
              </div>
            </div>
            <div className="bg-[#21232C] p-3 rounded-lg w-full mt-3">
              <p>Bitcoin Price Yesterday</p>
              <div className="bg-[#121318] mt-3 px-4 py-2 flex justify-between gap-4 items-center text-sm">
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
      <div className="bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] h-40 rounded-lg -mt-36"></div>
    </div>
  );
}

export default Satistic;
