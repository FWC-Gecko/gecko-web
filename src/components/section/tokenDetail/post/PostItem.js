import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function PostItem({ post }) {
  return (
    <div className="px-4 py-2 border-b border-[#DFDFDF] ">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <img
            src={post?.customer?.avatar || "/img/user-avatar.png"}
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <p>{post?.customer?.userName}</p>
        </div>
        <div>
          {post?.status === "bullish" && (
            <p
              className={`rounded-md pr-3 pl-1 items-center flex justify-center cursor-pointer text-xs bg-[#16C784] text-white`}
            >
              <ArrowDropUpIcon />
              Bullish
            </p>
          )}
          {post?.status === "bearish" && (
            <p
              className={`rounded-md pr-3 pl-1 items-center flex justify-center cursor-pointer text-xs bg-[#EA3943] text-white`}
            >
              <ArrowDropDownIcon />
              Bearish
            </p>
          )}
        </div>
      </div>
      <p className="mt-1 text-sm">{post?.text}</p>
    </div>
  );
}

export default PostItem;
