import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hook/useToken";
import Table from "../../common/table/Table";
import { formatPrice, getMaxMinValue } from "../../../utils";
import { useEffectOnce } from "../../../hook/useEffectOnce";
import { toast } from "react-toastify";

function AssetsTable() {
  const themeColor = useSelector((state) => state.auth.theme);
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

  const giveStarToCoin = async (row) => {
    console.log(row);
    toast.success(`You gave a star to ${row.name}`);
  };

  const columns = [
    {
      name: "",
      selector: (row, index) => (
        <img
          className="cursor-pointer"
          onClick={() => giveStarToCoin(row)}
          src={`/img/star${themeColor === "light" ? "1" : ""}.png`}
          width={"100%"}
        />
      ),
      width: "50px",
    },
    {
      name: "Name",
      selector: (row) => (
        <div
          className="flex justify-start items-center gap-3 py-2 cursor-pointer"
          onClick={() => onRowClick(row)}
        >
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
          {row.quoteLatest.percent_change_1h.toFixed(2)}%
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
          {row.quoteLatest.percent_change_24h.toFixed(2)}%
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
          {row.quoteLatest.percent_change_7d.toFixed(2)}%
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
          <p>{formatPrice(row.quoteLatest.volume_24h)}</p>
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
        return (
          <svg height="40" width="150">
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
