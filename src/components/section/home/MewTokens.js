import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function TrendingTokens() {
  const currencies = [
    {
      icon: "/img/tokens/token1.png",
      name: "Waves",
      symbol: "Waves",
    },
    // {
    //   icon: "/img/tokens/token2.png",
    //   name: "Bitcoin",
    //   symbol: "BTC",
    // },
    {
      icon: "/img/tokens/token3.png",
      name: "PancakeSwap",
      symbol: "CAKE",
    },
  ];

  return (
    <div className="NewTokenBG text-white p-8">
      <div className="rounded-[18px] bg-gradient-to-r from-[#BA4DF9] to-[#BA4DF9]/0 p-[1px]">
        <div className="bg-[#F6F6F6] dark:bg-[#21232C] rounded-[18px] p-5">
          <div className="flex justify-between w-full items-center mb-6">
            <div className="flex justify-start items-center gap-3">
              <img src="/img/icons/star.png" alt="" className="h-8 w-8" />
              <p className="text-[#101115] dark:text-white text-lg font-bold">
                New Tokens
              </p>
            </div>
            <p className="text-[#BA4DF9] text-lg cursor-pointer flex items-center">
              View More <ChevronRightIcon />
            </p>
          </div>
          <div className="flex justify-between items-center gap-3">
            {currencies.map((row, key) => {
              return (
                <div
                  className="flex w-full gap-2 items-center bg-[#E9E9E9] dark:bg-[#121318] rounded-[15px] px-4 py-2 text-[#101115] dark:text-white"
                  key={key}
                >
                  <p>{key + 1}</p>
                  <img src={row.icon} alt="" className="h-10 w-10" />
                  <div className="flex items-start gap-1">
                    <div>
                      <p className="text-[20px] font-[400]">{row.name}</p>
                      <p className="text-[#16C784] text-md font-normal flex justify-start items-center">
                        <KeyboardArrowDownIcon />
                        1.38%
                      </p>
                    </div>
                    <p className="text-[16px] text-[#9B9B9B] font-[400] mt-1">
                      {row.symbol}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTokens;
