import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hook/useToken";
import Table from "../../common/table/Table";

function AssetsTable() {
  const navigate = useNavigate();

  const { getAllowedTokens } = useToken();

  const [tokens, setTokens] = useState([]);

  const getAllowedTokensData = async () => {
    const res = await getAllowedTokens();
    console.log("res", res);
    setTokens(res);
  };

  useEffect(() => {
    getAllowedTokensData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { name: "#", selector: (row, key) => key + 1, width: '3%' },
    {
      name: "Name",
      selector: (row) => (
        <div className="flex justify-start items-center gap-3 py-2">
          <img
            src={row.logo}
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">{row.name}</p>
            <p className="text-[#9B9B9B] text-sm">{row.symbol}</p>
          </div>
        </div>
      ),
      width: "10%",
    },
    { name: "Price", selector: (row) => row.quoteLatest.price.toFixed(6) },
    {
      name: "1h%",
      selector: (row) => <p className={row.quoteLatest.percent_change_1h > 0 ? "text-[#16C784]" : "text-[#FF0000]"}>{row.quoteLatest.percent_change_1h}%</p>,
    },
    { name: "24h%", selector: (row) => <p className={row.quoteLatest.percent_change_24h > 0 ? "text-[#16C784]" : "text-[#FF0000]"}>{row.quoteLatest.percent_change_24h}%</p> },
    { name: "7d%", selector: (row) => <p className={row.quoteLatest.percent_change_7d > 0 ? "text-[#16C784]" : "text-[#FF0000]"}>{row.quoteLatest.percent_change_7d}%</p> },
    { name: "Market Cap", selector: (row) => row.quoteLatest.market_cap },
    {
      name: "Volume(24h)",
      selector: (row) => (
        <div>
          <p>${row.quoteLatest.volume_24h}</p>
          <p className="text-[#C8C8C8]">{row.quoteLatest.circulating_supply} {row.symbol}</p>
        </div>
      ),
    },
    {
      name: "Circulating Supply",
      selector: (row) => {return `${row.quoteLatest.circulating_supply} ${row.symbol}`},
    },
    {
      name: "Last 7 Days",
      selector: (row) => <img src="/img/chart.png" alt="" />,
    },
  ];

  const onRowClick = async (row) => {
    console.log(row);
    navigate(`/token-detail/${row?._id}`);
  };

  return (
    <div className="py-5 sm:py-10">
      <Table data={tokens} columns={columns} onRowClick={onRowClick} />
    </div>
  );
}

export default AssetsTable;
