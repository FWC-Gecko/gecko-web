import React from "react";

function Chart(props) {
  const types = [
    "Overview",
    "Markets",
    "Historical Data",
    "News",
    "Price Estimates",
    "More Info",
  ];

  return (
    <div>
      <div className="itemBg5 rounded-full w-max p-2 border-[#23262F] dark:border">
        {types.map((row, key) => {
          return (
            <button
              key={key}
              className="text-[#8E8E8E] hover:text-white px-6 py-2 rounded-full hover:bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9]"
            >
              {row}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Chart;
