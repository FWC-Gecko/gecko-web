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
    { name: "#", selector: (row, key) => key + 1, width: "40px" },
    {
      name: "Name",
      selector: (row) => (
        <div className="flex justify-start items-center gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      width: "150px",
    },
    { name: "Price", selector: (row) => "$0.0000006751" },
    {
      name: "1h%",
      selector: (row) => <p className="text-[#16C784]">0.13%</p>,
      width: "70px",
    },
    { name: "24h%", selector: (row) => "1.69%", width: "70px" },
    { name: "7d%", selector: (row) => "4.14%", width: "70px" },
    { name: "Market Cap", selector: (row) => "$640,202,503" },
    {
      name: "Volume(24h)",
      selector: (row) => (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
    },
    {
      name: "Circulating Supply",
      selector: (row) => "947,962,000,000,000 BTT",
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
