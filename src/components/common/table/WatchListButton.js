import React from "react";

function WatchListButton() {
  return (
    <div className="bg-[#21232C] px-4 h-10 rounded-full flex justify-start items-center gap-2 cursor-pointer">
      <img src="/img/star.png" alt="" className="h-4" />
      <p className="text-white">Watchlist</p>
    </div>
  );
}

export default WatchListButton;
