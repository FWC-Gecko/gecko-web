import React, { useEffect, useState } from "react";
import { useEffectOnce } from "../../../../hook/useEffectOnce";
import useToken from "../../../../hook/useToken";
import { formatDateDash } from "../../../../utils";
import { Chart } from "../../../common/chart/Chart";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tab from "../../../common/Tab";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "rsuite/DatePicker";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Overview({ tokenId, tokenInfo }) {
  const { getTokenOverview } = useToken();
  const [overview, setOverview] = useState([]);

  const chartTypes = [
    { slug: "Price", value: "Price" },
    { slug: "MarketCap", value: "Market Cap" },
  ];
  const [chartType, setChartType] = useState(chartTypes[0].slug);

  const periods = [
    { slug: "1D", value: "1D" },
    { slug: "7D", value: "7D" },
    { slug: "1M", value: "1M" },
    { slug: "1Y", value: "1Y" },
    { slug: "YTD", value: "YTD" },
    { slug: "ALL", value: "ALL" },
    { slug: "Calendar", value: <CalendarTodayIcon /> },
    { slug: "LOG", value: "LOG" },
  ];
  const [period, setPeriod] = useState(periods[5].slug);

  useEffect(() => {
    async function getTokenOverviewData() {
      if (tokenId) {
        const res = await getTokenOverview({ tokenId, chartType, period });
        setOverview(res);
      }
    }
    getTokenOverviewData();
  }, [tokenId, chartType, period]);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const tempArray = [];
    for (let i = 0; i < overview.length; i++) {
      const element = overview[i];
      const row = {
        time: formatDateDash(element.timestamp),
        value: element.price,
      };
      tempArray.push(row);
    }
    setTableData(tempArray);
  }, [overview]);

  const handleFullScreen = useFullScreenHandle();

  return (
    <FullScreen handle={handleFullScreen}>
      <div className="mt-5 bg-white dark:bg-[#121318] p-6 rounded-lg">
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
          <Tab
            items={periods}
            selectedItem={period}
            setItem={setPeriod}
            size="sm"
          />
        </div>
        <div className="mt-5">
          <Chart data={tableData} />
        </div>
      </div>
    </FullScreen>
  );
}

export default Overview;
