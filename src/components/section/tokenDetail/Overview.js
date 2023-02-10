import React from "react";
import { createChart } from "lightweight-charts";
import { useEffectOnce } from "../../../hook/useEffectOnce";

function Overview() {
  useEffectOnce(() => {
    const chart = createChart(document.getElementById("OverviewChart"), {
      width: "100%",
      height: 300,
    });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 },
    ]);
  });

  return (
    <div>
      <p>asdfasdf</p>
      <div id="OverviewChart" className="w-full"></div>
    </div>
  );
}

export default Overview;
