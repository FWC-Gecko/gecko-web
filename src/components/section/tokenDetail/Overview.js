import React from "react";
import { createChart } from "lightweight-charts";
import { useEffectOnce } from "../../../hook/useEffectOnce";

function Overview() {
  useEffectOnce(() => {
    const chartOptions = {
      layout: {
        textColor: "black",
        background: { type: "solid", color: "white" },
      },
    };
    const chart = createChart(
      document.getElementById("OverviewChart"),
      chartOptions
    );
    const areaSeries = chart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    const data = [
      { value: 0, time: 1642425322 },
      { value: 8, time: 1642511722 },
      { value: 10, time: 1642598122 },
      { value: 20, time: 1642684522 },
      { value: 3, time: 1642770922 },
      { value: 43, time: 1642857322 },
      { value: 41, time: 1642943722 },
      { value: 43, time: 1643030122 },
      { value: 56, time: 1643116522 },
      { value: 46, time: 1643202922 },
    ];

    areaSeries.setData(data);

    chart.timeScale().fitContent();
  });

  return (
    <div className="mt-5">
      <p></p>
      <div id="OverviewChart" className="w-full"></div>
    </div>
  );
}

export default Overview;
