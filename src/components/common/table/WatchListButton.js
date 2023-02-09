import React from "react";
import StarIcon from "@mui/icons-material/Star";

function WatchListButton() {
  return (
    <div className="itemBg7 px-4 h-10 rounded-full flex justify-start items-center gap-2 cursor-pointer">
      <StarIcon className="h-4 cursor-pointer" />
      <p className="">Watchlist</p>
    </div>
  );
}

export default WatchListButton;
