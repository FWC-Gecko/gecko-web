import React, { useEffect, useState } from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";

function Converter({ tokenInfo }) {
  const USD = {
    name: "United States Dollar",
    symbol: "USD",
    logo: "https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg",
  };

  const [token1, setToken1] = useState(tokenInfo);
  const [token2, setToken2] = useState(USD);

  const [token1Amount, setToken1Amount] = useState(1);
  const [token2Amount, setToken2Amount] = useState(
    Number(tokenInfo?.price_usd).toFixed(2)
  );

  useEffect(() => {
    if (tokenInfo) {
      setToken1(tokenInfo);
      setToken2(USD);
      setToken1Amount(1);
      setToken2Amount(Number(tokenInfo?.price_usd).toFixed(2));
    }
  }, [tokenInfo]);

  const swapToken = async () => {
    const tempToken = token1;
    setToken1(token2);
    setToken2(tempToken);

    const tempTokenAmount = token1Amount;
    setToken1Amount(token2Amount);
    setToken2Amount(Number(tempTokenAmount).toFixed(2));
  };

  useEffect(() => {
    if (token1.symbol !== "USD") {
      setToken2Amount(Number(token1Amount * token1.price_usd).toFixed(2));
    } else {
      setToken2Amount(Number(token1Amount / token2.price_usd).toFixed(2));
    }
  }, [token1Amount]);

  return (
    <div className="w-full sm:min-w-[400px]">
      <p className="text-3xl font-medium dark:text-white">
        {tokenInfo?.symbol} to USD
      </p>
      <div className="mt-4 bg-[#F1F3F5] dark:bg-[#121318] rounded-2xl flex justify-between items-center p-4 sm:p-6 border border-[#DFDFDF] dark:border-[#23262F]">
        <div className="flex justify-start items-center gap-3">
          <img src={token1?.logo} alt="" className="w-12 h-12" />
          <div className="text-sm">
            <p className="dark:text-[#9B9B9B]">{token1?.symbol}</p>
            <p className="text-md sm:text-lg dark:text-white">{token1?.name}</p>
          </div>
        </div>
        <input
          type={"number"}
          className="bg-transparent outline-none text-2xl text-color2 text-right w-20 sm:w-32 dark:text-white/40"
          value={token1Amount}
          onChange={(e) => setToken1Amount(e.target.value)}
        />
      </div>
      <div
        className="m-auto w-max px-4 py-2 rounded-lg  bg-[#F1F3F5] dark:bg-[#121318] my-5 border border-[#DFDFDF] dark:border-[#23262F] cursor-pointer"
        onClick={swapToken}
      >
        <SwapVertIcon
          className="dark:text-white"
          style={{ fontSize: "30px" }}
        />
      </div>

      <div className="bg-[#F1F3F5] dark:bg-[#121318] rounded-2xl flex justify-between items-center p-4 sm:p-6 border border-[#DFDFDF] dark:border-[#23262F]">
        <div className="flex justify-start items-center gap-3">
          <img src={token2?.logo} alt="" className="w-12 h-12" />
          <div className="text-sm">
            <p className="dark:text-[#9B9B9B]">{token2.symbol}</p>
            <p className="text-md sm:text-lg dark:text-white">{token2.name}</p>
          </div>
        </div>
        <p className="text-2xl font-medium dark:text-white">
          {Number(token2Amount).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Converter;
