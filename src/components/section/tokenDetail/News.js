import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

function News({ tokenInfo }) {
  const types = ["ALL", "News", "Alexandria", "Articles"];
  const [type, setType] = useState(types[0]);

  const NewsItem = () => {
    return (
      <div className="itemBg4 p-6 rounded-lg">
        <img src="/img/news.png" alt="" className="w-full rounded-lg" />
        <div className="flex justify-between items-center gap-4 mt-4">
          <p className="text-[#8B8B8B] items-center flex justify-start">
            <PersonIcon />
            Connor Stron
          </p>
          <div className="flex justify-end items-center gap-4">
            <p className="text-[#8B8B8B]">2 hours ago</p>
            <div className="bg-[#E8E8E8] dark:bg-[#2A2C34] rounded-full p-1 flex justify-end items-center gap-2">
              <img
                src="/img/41951.png"
                alt=""
                className="h-6 w-6 rounded-full"
              />
              <p className="px-1 font-medium">FTT</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg mt-2">
            BREAKING: Sam Bankman-Fried Orchestrated 'Massive, Years-Long
            Fraud,' SEC Court Filing Says
          </p>
          <p className="text-[#8B8B8B] text-sm mt-2">
            “Customers around the world believed his lies and sent billions of
            dollars to FTX, believing their assets were secure on the FTX
            trading platform," the document says....
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-5">
      <div className="flex justify-start items-center gap-4 pl-4">
        <img width={"40"} src={tokenInfo?.logo} />
        <p className="text-2xl">{tokenInfo?.name} News</p>
        {/* <div className="mt-4 sm:mt-0 flex justify-start sm:justify-end w-full overflow-auto items-center rounded-full border border-[#C4C4C4] dark:border-white p-1 gap-1">
          {types.map((row, key) => {
            return (
              <p
                key={key}
                className={`px-6 text-sm py-3 rounded-full cursor-pointer  ${
                  type === row
                    ? "bg-[#BA4DF9] text-white"
                    : "bg-transparent text-[#636363]"
                }`}
                onClick={() => {
                  setType(row);
                }}
              >
                {row}
              </p>
            );
          })}
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>

      <div className="flex justify-center mt-6">
        <button className="text-white text-sm px-6 py-2 m-auto rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow">
          Show All
        </button>
      </div>
    </div>
  );
}

export default News;
