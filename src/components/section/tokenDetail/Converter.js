import React, { useState } from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";

function Converter({ tokenInfo }) {
  const [btcamount, setbtcamount] = useState(1);

  return (
    <div className="w-full sm:min-w-[400px]">
      <p className="text-3xl font-medium dark:text-white">
        {tokenInfo?.symbol} to USD
      </p>
      <div className="mt-4 bg-[#F1F3F5] dark:bg-[#121318] rounded-2xl flex justify-between items-center p-4 sm:p-6 border border-[#DFDFDF] dark:border-[#23262F]">
        <div className="flex justify-start items-center gap-3">
          <img src={tokenInfo?.logo} alt="" className="w-12 h-12" />
          <div className="text-sm">
            <p className="dark:text-[#9B9B9B]">{tokenInfo?.symbol}</p>
            <p className="text-md sm:text-lg dark:text-white">
              {tokenInfo?.name}
            </p>
          </div>
        </div>
        {/* <p className="text-2xl font-medium dark:text-white">1</p> */}
        <input
          type={"number"}
          className="bg-transparent outline-none text-2xl text-color2 text-right dark:text-white/40"
          value={btcamount}
          onChange={(e) => setbtcamount(e.target.value)}
        />
      </div>
      <div
        className="m-auto w-max px-4 py-2 rounded-lg  bg-[#F1F3F5] dark:bg-[#121318] my-5 border border-[#DFDFDF] dark:border-[#23262F] cursor-pointer"
        onClick={() => {
          setbtcamount(btcamount * tokenInfo?.price_usd?.toFixed(6));
        }}
      >
        <SwapVertIcon
          className="dark:text-white"
          style={{ fontSize: "30px" }}
        />
      </div>

      <div className="bg-[#F1F3F5] dark:bg-[#121318] rounded-2xl flex justify-between items-center p-4 sm:p-6 border border-[#DFDFDF] dark:border-[#23262F]">
        <div className="flex justify-start items-center gap-3">
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"
            alt=""
            className="w-12 h-12"
          />
          <div className="text-sm">
            <p className="dark:text-[#9B9B9B]">USD</p>
            <p className="text-md sm:text-lg dark:text-white">US Dollar</p>
          </div>
        </div>
        <p className="text-2xl font-medium dark:text-white">
          {btcamount * tokenInfo?.price_usd?.toFixed(6)}
        </p>
      </div>
    </div>
  );
}

export default Converter;
