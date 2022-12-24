import React from "react";

function Satistic() {
  const data = [
    {
      title: "Football World Community Token",
      value: "$5.50049570",
      delta: "24h: -0.69%",
    },
    {
      title: "Football World Community Token",
      value: "$1.65652150",
      delta: "Fully diluted: $9,223,000",
    },
    {
      title: "Football World Community Token",
      value: "$8.65255322",
      delta: "Top 10: 84.68%",
    },
    {
      title: "Football World Community Token",
      value: "$7.4223552",
      delta: "24H Transfers: 163",
    },
  ];

  return (
    <div className="sm:flex justify-between pb-4 gap-4">
      {data.map((row, key) => {
        return (
          <div
            className="bg-[#121318] rounded-xl  p-4 sm:p-6 w-full mt-3"
            key={key}
          >
            <p className="text-white text-sm">{row.title}</p>
            <p className="text-[#BA4DF9] font-bold text-2xl sm:text-3xl">
              {row.value}
            </p>
            <p className="text-white text-base sm:text-lg">{row.delta}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Satistic;
