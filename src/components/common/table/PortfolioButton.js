import React from "react";
import PieChartIcon from "@mui/icons-material/PieChart";

function PortfolioButton() {
  return (
    <div className="itemBg7 px-4 h-10 rounded-full flex justify-start items-center gap-2 cursor-pointer">
      <PieChartIcon className="h-4 cursor-pointer" />
      <p>Portfolio</p>
    </div>
  );
}

export default PortfolioButton;
