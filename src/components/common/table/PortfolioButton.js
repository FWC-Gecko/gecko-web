import React from "react";

function PortfolioButton() {
  return (
    <div className="bg-[#21232C] px-4 h-10 rounded-full flex justify-start items-center gap-2 cursor-pointer">
      <img src="/img/circle.png" alt="" className="h-4" />
      <p className="text-white">Portfolio</p>
    </div>
  );
}

export default PortfolioButton;
