import React, { useEffect, useState } from "react";
import useToken from "../../../../hook/useToken";
import { Chart } from "../../../common/chart/Chart";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tab from "../../../common/Tab";
import { addDays } from "date-fns";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import RangeDateSelector from "./RangeDateSelector";
import { useEffectOnce } from "../../../../hook/useEffectOnce";

function Overview({ tokenId, tokenInfo }) {
  const { getTokenOverview, getTokenMarketCap } = useToken();
  const [overview, setOverview] = useState([]);
  const [isChartLoading, setChartLoading] = useState(false);

  useEffectOnce(() => {
    console.log("100", 100);
    console.log("Math", Math.log(100));
  });

  const chartTypes = [
    { slug: "Price", value: "Price" },
    { slug: "MarketCap", value: "Market Cap" },
  ];
  const [chartType, setChartType] = useState(chartTypes[0].slug);

  const [searchDate, setSearchDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const periods = [
    { slug: "1D", value: "1D" },
    { slug: "7D", value: "7D" },
    { slug: "1M", value: "1M" },
    { slug: "1Y", value: "1Y" },
    { slug: "YTD", value: "YTD" },
    { slug: "ALL", value: "ALL" },
    // { slug: "Calendar", value: <CalendarTodayIcon /> },
    // { slug: "LOG", value: "LOG" },
  ];
  const [period, setPeriod] = useState(periods[5].slug);

  useEffect(() => {
    async function getTokenOverviewData() {
      if (tokenId && period !== "LOG") {
        setChartLoading(true);
        if (chartType === "Price") {
          const res = await getTokenOverview({
            tokenId,
            chartType,
            period,
            searchDate,
          });
          setOverview(res);
        } else if (chartType === "MarketCap") {
          const res = await getTokenMarketCap({
            tokenId,
            chartType,
            period,
            searchDate,
          });
          setOverview(res);
        }
        setChartLoading(false);
      } else if (period === "LOG") {
        console.log(overview);
        setChartLoading(true);
        const res = overview.map((item, index) => {
          return [item[0], Math.log(item[1])];
        });

        setTimeout(() => {
          setOverview(res);
          setChartLoading(false);
        }, 200);
      }
    }
    getTokenOverviewData();
  }, [tokenId, chartType, period, searchDate, chartType]);

  const handleFullScreen = useFullScreenHandle();

  return (
    <FullScreen handle={handleFullScreen}>
      <div className="mt-5 bg-white dark:bg-[#121318] p-3 sm:p-6 rounded-lg">
        <div className="flex justify-between items-center gap-4">
          <p className="text-xl">{tokenInfo?.name} to USD Chart</p>
          <div className="flex justify-end items-center gap-2">
            <button
              className="itemBg7 p-1 rounded-md"
              onClick={handleFullScreen.enter}
            >
              <FullscreenIcon />
            </button>
            <button className="itemBg7 p-1 rounded-md">
              <MoreVertIcon />
            </button>
          </div>
        </div>

        <div className="md:flex justify-between items-center gap-2 mt-3">
          <Tab
            items={chartTypes}
            selectedItem={chartType}
            setItem={setChartType}
            size="sm"
          />

          <div
            className={`itemBg5 rounded-full flex justify-start border-[#23262F] dark:border overflow-auto p-1 mt-2 md:mt-0`}
          >
            {periods.map((row, key) => {
              return (
                <button
                  key={key}
                  className={`rounded-full whitespace-nowrap ${
                    period === row?.slug
                      ? "bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white"
                      : "text-[#8E8E8E]"
                  } px-5 py-1 text-sm `}
                  onClick={() => setPeriod(row?.slug)}
                >
                  {row.value}
                </button>
              );
            })}

            <button
              className={`rounded-full whitespace-nowrap ${
                period === "DATE"
                  ? "bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white"
                  : "text-[#8E8E8E]"
              } px-5 py-1 text-sm `}
            >
              <RangeDateSelector
                setPeriod={setPeriod}
                searchDate={searchDate}
                setSearchDate={setSearchDate}
              />
            </button>
            <button
              className={`rounded-full whitespace-nowrap ${
                period === "LOG"
                  ? "bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white"
                  : "text-[#8E8E8E]"
              } px-5 py-1 text-sm `}
              onClick={() => setPeriod("LOG")}
            >
              LOG
            </button>
          </div>
        </div>
        <div className="mt-5">
          {isChartLoading ? (
            <div className="flex justify-center items-center h-[300px]">
              <p className="text-center">Loading...</p>
            </div>
          ) : (
            <Chart data={overview} />
          )}
        </div>
      </div>
    </FullScreen>
  );
}

export default Overview;
