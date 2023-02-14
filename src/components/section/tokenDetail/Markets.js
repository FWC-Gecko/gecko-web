import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useEffectOnce } from "../../../hook/useEffectOnce";
import useToken from "../../../hook/useToken";

function Markets({ tokenId, tokenInfo }) {
  const theme = useSelector((state) => state.auth.theme);
  const [spotMarketData, setSpotMarketData] = useState([]);
  const [futureMarketData, setFutureMarketData] = useState([]);
  const [perpetualMarketData, setPerpetualMarketData] = useState([]);
  const { getTokenMarkets } = useToken();

  useEffect(() => {
    const _initTable = async () => {
      const _data = await getTokenMarkets(tokenId);
      setSpotMarketData(_data);
    };

    _initTable();
  }, []);

  return (
    <div className="mt-5 bg-white dark:bg-[#121318] dark:bg-gray-100 text-[#47484E] dark:text-white w-full overflow-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="p-3 text-left whitespace-nowrap">#</th>
            <th className="p-3 text-left whitespace-nowrap">Source</th>
            <th className="p-3 text-left whitespace-nowrap">Pairs</th>
            <th className="p-3 text-right whitespace-nowrap">Price</th>
            <th className="p-3 text-center whitespace-nowrap">+2% Depth</th>
            <th className="p-3 text-right whitespace-nowrap">-2% Depth</th>
            <th className="p-3 text-right whitespace-nowrap">Volume</th>
            <th className="p-3 text-right whitespace-nowrap">Volume %</th>
            <th className="p-3 text-right whitespace-nowrap">Confidence</th>
            <th className="p-3 text-right whitespace-nowrap">
              Liquidity Score
            </th>
            <th className="p-3 text-right whitespace-nowrap">Updated</th>
          </tr>
        </thead>
        <tbody>
          {spotMarketData?.spot?.map((item, index) => (
            <tr key={index}>
              <td className="p-3 text-left">{index + 1}</td>
              <td className="p-3 text-left flex items-center gap-5">
                <img src={item.logo} width={30} />
                <span>{item.source}</span>
              </td>
              <th
                className="p-3 text-left"
                style={{ color: theme === "light" ? "blue" : "cyan" }}
              >
                <span>{item.pairs}</span>
              </th>
              <td className="p-3 text-right">{item.price?.toFixed(3)}</td>
              <td className="p-3 text-center">
                {item.depth_positive_two?.toFixed(1)}
              </td>
              <td className="p-3 text-right">
                {item.depth_negative_two?.toFixed(1)}
              </td>
              <td className="p-3 text-right">{item.volume_24h?.toFixed(2)}</td>
              <td className="p-3 text-right">
                {(Math.random().toFixed(2) * 10).toFixed(2)}
              </td>
              <td className="p-3 text-right">
                {Math.random().toFixed(2) * 50 + 50}
              </td>
              <td className="p-3 text-right">
                {Math.random().toFixed(2) * 100 + 9000}
              </td>
              <td className="p-3 text-right">{"3 hours ago"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Markets;
