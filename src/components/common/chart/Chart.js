import Highcharts from "highcharts/highstock";
import { useEffectOnce } from "../../../hook/useEffectOnce";

export const Chart = ({ data }) => {
  useEffectOnce(() => {
    const chart = Highcharts.stockChart("container", {
      chart: {
        height: 400,
      },

      rangeSelector: {
        enabled: false,
      },

      series: [
        {
          name: "",
          data: data,
          type: "area",
          threshold: null,
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              chart: {
                height: 300,
              },
              subtitle: {
                text: null,
              },
              navigator: {
                enabled: false,
              },
            },
          },
        ],
      },
    });
  });

  return (
    <div id="container">
      <p>asdf</p>
    </div>
  );
};
