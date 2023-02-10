import React from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";

function Converter() {
  return (
    <div className="w-fullsm:min-w-[400px]">
      <p className="text-3xl font-medium dark:text-white">
        BTC to USD Converter
      </p>
      <div className="mt-4 bg-[#F1F3F5] dark:bg-[#121318] rounded-2xl flex justify-between items-center p-4 sm:p-6 border border-[#DFDFDF] dark:border-[#23262F]">
        <div className="flex justify-start items-center gap-3">
          <img src="/img/tokens/token1.png" alt="" className="w-12 h-12" />
          <div className="text-sm">
            <p className="dark:text-[#9B9B9B]">BTC</p>
            <p className="text-md sm:text-lg dark:text-white">Bitcoin</p>
          </div>
        </div>
        <p className="text-2xl font-medium dark:text-white">1</p>
      </div>
      <div className="m-auto w-max px-4 py-2 rounded-lg  bg-[#F1F3F5] dark:bg-[#121318] my-5 border border-[#DFDFDF] dark:border-[#23262F] cursor-pointer">
        <SwapVertIcon
          className="dark:text-white"
          style={{ fontSize: "30px" }}
        />
      </div>

      <div className="bg-[#F1F3F5] dark:bg-[#121318] rounded-2xl flex justify-between items-center p-4 sm:p-6 border border-[#DFDFDF] dark:border-[#23262F]">
        <div className="flex justify-start items-center gap-3">
          <img src="/img/tokens/token2.png" alt="" className="w-12 h-12" />
          <div className="text-sm">
            <p className="dark:text-[#9B9B9B]">USD</p>
            <p className="text-md sm:text-lg dark:text-white">
              United States Dollar
            </p>
          </div>
        </div>
        <p className="text-2xl font-medium dark:text-white">23182.17</p>
      </div>
    </div>
  );
}

export default Converter;
