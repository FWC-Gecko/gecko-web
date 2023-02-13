import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function TokenItem({ row }) {
  return (
    <div className="flex w-full gap-2 items-center bg-[#E9E9E9] dark:bg-[#121318] rounded-[15px] px-4 h-24 text-[#101115] dark:text-white">
      <img src={row?.logo} alt="" className="h-10 w-10" />
      <div>
        <p className="text-[16px] font-[400] pl-2 whitespace-nowrap">
          {row?.name}
        </p>
        <p className="text-[14px] text-[#9B9B9B] font-[400] pl-2">
          {row?.symbol}
        </p>
        <p
          className={`text-[${
            row?.volume_change_24h > 100 ? "#16C784" : "#FF0000"
          }] text-md font-normal flex justify-start items-center`}
        >
          {row?.volume_change_24h > 100 ? (
            <>
              <KeyboardArrowUpIcon />
              {row?.volume_change_24h?.toFixed(2)}%
            </>
          ) : (
            <>
              <KeyboardArrowDownIcon />
              {row?.volume_change_24h?.toFixed(2)}%
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default TokenItem;