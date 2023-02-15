import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useExchanges from "../../../hook/useExchange";
import Table from "../../common/table/Table";
import { getMaxMinQuote } from "../../../utils";
import { useEffectOnce } from "../../../hook/useEffectOnce";

function ExchangesTable() {
  const themeColor = useSelector((state) => state.auth.theme);
  const navigate = useNavigate();

  const { getExchangesList } = useExchanges();
  const [isTableLoading, setTableLoading] = useState(false);

  const [exchanges, setExchanges] = useState([]);

  const getExchanges = async () => {
    setTableLoading(true);
    const res = await getExchangesList();
    let _exs = [];
    for (let i = 0; i < res.length; i++)
      if (res[i].volume_24h != -1) {
        _exs.push({ ...res[i] });
        _exs[_exs.length - 1].index = _exs.length;
      }
    setExchanges(_exs);
    setTableLoading(false);
  };

  useEffectOnce(() => {
    getExchanges();
  });

  const columns = [
    {
      name: "#",
      selector: (row) => {
        return row.index;
      },
      width: "50px",
    },
    {
      name: "Exchange",
      selector: (row) => (
        <div
          className="flex justify-start items-center gap-3 py-2 cursor-pointer"
          onClick={() => onRowClick(row)}
        >
          <img src={row.logo} alt="" className="h-8 w-8 rounded-full" />
          <div>
            <p className="font-bold text-md">{row.name}</p>
          </div>
        </div>
      ),
      width: "15%",
    },
    {
      name: "Score",
      selector: (row) => (
        <p
          className={`rounded-md ${
            row.exchange_score > 6 ? "bg-[#16C784]" : "bg-[#f5b97f]"
          }  px-3 py-2 text-white`}
        >
          {row.exchange_score.toFixed(1)}
        </p>
      ),
    },
    {
      name: "Trading volume(24h)",
      selector: (row) => <p>{row.volume_24h}</p>,
      width: "13%",
    },
    {
      name: "AVG.Liquidity",
      selector: (row) => <p>{row.effective_liquidity_24h}</p>,
    },
    {
      name: "Weekly Visits",
      selector: (row) => <p>{row.weekly_visits}</p>,
    },
    {
      name: "#Markets",
      selector: (row) => <p>{row.num_market_pairs}</p>,
    },
    {
      name: "#Coins",
      selector: (row) => <p>{row.num_coins}</p>,
    },
    {
      name: "Fiat Supported",
      selector: (row) => <p>{row.fiats?.length} Fiats</p>,
    },
    {
      name: "Volume Graph(7d)",
      width: "15%",
      selector: (row) => {
        const { max, min } = getMaxMinQuote(row.quotes);
        return (
          <svg height="40" width="150">
            <polyline
              points={row.quotes
                .map(
                  (row1, key) =>
                    `${key * 5},${parseInt(
                      (max - row1.volume_24h) / ((max - min) / 40)
                    )}`
                )
                .join(" ")}
              style={{
                fill: "none",
                stroke:
                  row?.quotes[0].volume_24h >
                  row?.quotes[row?.quotes.length - 1].volume_24h
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
    navigate(`/exchanges/${row?.id}`);
  };

  return (
    <div className="py-5 sm:py-10">
      <Table
        data={exchanges}
        columns={columns}
        isTableLoading={isTableLoading}
        watchlistshow={false}
      />
    </div>
  );
}

export default ExchangesTable;
