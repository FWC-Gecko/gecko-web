import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hook/useToken";
import Table from "../../common/table/Table";
import { formatNumber, formatPrice, getMaxMinValue } from "../../../utils";
import { useEffectOnce } from "../../../hook/useEffectOnce";

function AssetsTable() {
  const navigate = useNavigate();

  const { getAllowedTokens } = useToken();
  const [isTableLoading, setTableLoading] = useState(false);

  const [tokens, setTokens] = useState([]);

  const getAllowedTokensData = async () => {
    setTableLoading(true);
    const res = await getAllowedTokens();
    setTokens(res);
    setTableLoading(false);
  };

  useEffectOnce(() => {
    getAllowedTokensData();
  });

  const columns = [
    { name: "#", selector: (row, key) => key + 1, width: "3%" },
    {
      name: "Name",
      selector: (row) => (
        <div className="flex justify-start items-center gap-3 py-2">
          <img src={row.logo} alt="" className="h-8 w-8 rounded-full" />
          <div>
            <p className="font-bold text-md">{row.name}</p>
            <p className="text-[#9B9B9B] text-sm">{row.symbol}</p>
          </div>
        </div>
      ),
      width: "10%",
    },
    { name: "Price", selector: (row) => row.quoteLatest.price.toFixed(6) },
    {
      name: "1h%",
      selector: (row) => (
        <p
          className={
            row.quoteLatest.percent_change_1h > 0
              ? "text-[#16C784]"
              : "text-[#FF0000]"
          }
        >
          {row.quoteLatest.percent_change_1h}%
        </p>
      ),
    },
    {
      name: "24h%",
      selector: (row) => (
        <p
          className={
            row.quoteLatest.percent_change_24h > 0
              ? "text-[#16C784]"
              : "text-[#FF0000]"
          }
        >
          {row.quoteLatest.percent_change_24h}%
        </p>
      ),
    },
    {
      name: "7d%",
      selector: (row) => (
        <p
          className={
            row.quoteLatest.percent_change_7d > 0
              ? "text-[#16C784]"
              : "text-[#FF0000]"
          }
        >
          {row.quoteLatest.percent_change_7d}%
        </p>
      ),
    },
    {
      name: "Market Cap",
      width: "12%",
      selector: (row) => formatPrice(row.quoteLatest.market_cap),
    },
    {
      name: "Volume(24h)",
      width: "12%",
      selector: (row) => (
        <div>
          <p>${formatPrice(row.quoteLatest.volume_24h)}</p>
        </div>
      ),
    },
    {
      name: "Circulating Supply",
      width: "15%",
      selector: (row) => {
        return `${formatPrice(row.quoteLatest.circulating_supply)} ${
          row.symbol
        }`;
      },
    },
    {
      name: "Last 7 Days",
      selector: (row) => {
        const { max, min } = getMaxMinValue(row.quoteHistorical);
        console.log(max, min);
        return (
          <svg height="50" width="200">
            <polyline
              points={row.quoteHistorical
                .map(
                  (row1, key) =>
                    `${key * 3},${parseInt(
                      (row1.price - min) / ((max - min) / 50)
                    )}`
                )
                .join(" ")}
              // points="0,10 5,20 10,10"
              style={{
                fill: "none",
                stroke: "black",
                strokeWidth: "2",
              }}
            />
          </svg>
        );
      },
    },
  ];

  const onRowClick = async (row) => {
    console.log(row);
    navigate(`/token/${row?._id}`);
  };

  return (
    <div className="py-5 sm:py-10">
      <Table
        data={tokens}
        columns={columns}
        onRowClick={onRowClick}
        isTableLoading={isTableLoading}
      />
    </div>
  );
}

export default AssetsTable;
