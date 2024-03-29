import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function TokenItem({ row }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/currencies/${row?._id}`);
      }}
      className="flex cursor-pointer w-full gap-2 items-center bg-[#E9E9E9] dark:bg-[#121318] rounded-[15px] px-4 h-16 sm:h-24 text-[#101115] dark:text-white "
    >
      <img src={row?.logo} alt="" className="h-10 w-10 rounded-full" />
      <div className="flex 2xl:block justify-between w-full">
        <div>
          <p
            className="text-[16px] font-[400] pl-2 whitespace-nowrap cursor-pointer"
            title={row?.name}
          >
            {row?.name.length > 10 ? row?.name.slice(0, 10) + "..." : row?.name}
          </p>
          <p className="text-[14px] text-[#9B9B9B] font-[400] pl-2">
            {row?.symbol}
          </p>
        </div>
        <p
          className={`text-[${
            row?.percent_change_24h > 0 ? "#16C784" : "#FF0000"
          }] text-md font-normal flex justify-start items-center`}
        >
          {row?.percent_change_24h > 0 ? (
            <>
              <KeyboardArrowUpIcon />
              {row?.percent_change_24h?.toFixed(2)}%
            </>
          ) : (
            <>
              <KeyboardArrowDownIcon />
              {row?.percent_change_24h?.toFixed(2)}%
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default TokenItem;
