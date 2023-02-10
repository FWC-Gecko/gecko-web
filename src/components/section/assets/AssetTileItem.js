import React from "react";
import { formatPrice, getMaxMinValue } from "../../../utils";

function AssetTileItem({ row, onRowClicked }) {
  const { max, min } = getMaxMinValue(row.quoteHistorical);
  return (
    <div
      className="bg-[#21232C] text-sm rounded-lg border border-[#23262F] p-3 mt-3 sm:mt-0"
      onClick={onRowClicked}
    >
      <div className="text-lg">{row.name}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div>
          <p className="text-[#C2C2C2]">Price</p>
          <p className="text-white">{row.quoteLatest.price.toFixed(6)}</p>
        </div>
        <div>
          <p className="text-[#C2C2C2]">1h%</p>
          <p
            className={
              row.quoteLatest.percent_change_1h > 0
                ? "text-[#16C784]"
                : "text-[#FF0000]"
            }
          >
            {row.quoteLatest.percent_change_1h}%
          </p>
        </div>
        <div>
          <p className="text-[#C2C2C2]">24h%</p>
          <p
            className={
              row.quoteLatest.percent_change_24h > 0
                ? "text-[#16C784]"
                : "text-[#FF0000]"
            }
          >
            {row.quoteLatest.percent_change_24h}%
          </p>
        </div>
        <div>
          <p className="text-[#C2C2C2]">7d%</p>
          <p
            className={
              row.quoteLatest.percent_change_7d > 0
                ? "text-[#16C784]"
                : "text-[#FF0000]"
            }
          >
            {row.quoteLatest.percent_change_7d}%
          </p>
        </div>
      </div>
      <hr className="text-[#666666] w-full my-2" />
      <div className="flex justify-start gap-6">
        <div>
          <p className="text-[#C2C2C2]">Market Cap</p>
          <p className="text-white">
            {formatPrice(row.quoteLatest.market_cap)}
          </p>
        </div>
        <div>
          <p className="text-[#C2C2C2]">Volume(24h)</p>
          <p className="text-white">
            {formatPrice(row.quoteLatest.volume_24h)}
          </p>
        </div>
      </div>
      <hr className="text-[#666666] w-full my-2" />
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#C2C2C2]">Circulating Supply</p>
          <p className="text-white">
            {formatPrice(row.quoteLatest.circulating_supply)}
          </p>
        </div>

        <svg height="40" width="90">
          <polyline
            points={row.quoteHistorical
              .map(
                (row1, key) =>
                  `${key * 3},${parseInt(
                    (max - row1.price) / ((max - min) / 40)
                  )}`
              )
              .join(" ")}
            // points="0,10 5,20 10,10"
            style={{
              fill: "none",
              stroke:
                row?.quoteHistorical[0].price >
                row?.quoteHistorical[row?.quoteHistorical.length - 1].price
                  ? "red"
                  : "green",
              strokeWidth: "1",
            }}
          />
        </svg>
      </div>
    </div>
  );
}

export default AssetTileItem;
