import React, { useState } from "react";
import { useEffect } from "react";
// import { useEffectOnce } from "../../../hook/useEffectOnce";
import useToken from "../../../hook/useToken";

function HistoricalData({ tokenId, tokenInfo }) {
  const [thistoricalData, setHistoricalData] = useState([]);
  const { getTokenHistoricalData } = useToken();

  useEffect(() => {
    const _initTable = async () => {
      const _data = await getTokenHistoricalData(tokenId);
      setHistoricalData(_data);
    };

    _initTable();
  }, []);

  return (
    <div className="mt-5 bg-white dark:bg-[#121318] dark:bg-gray-100 text-[#47484E] dark:text-white">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Open*</th>
            <th className="p-3 text-left">High</th>
            <th className="p-3 text-right">Low</th>
            <th className="p-3 text-center">Close**</th>
            <th className="p-3 text-right">Volume</th>
            <th className="p-3 text-right">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {thistoricalData?.map((item, index) => (
            <tr key={index}>
              <td className="p-2 text-left">{item.timestamp}</td>
              <td className="p-2 text-left">{item.open.toFixed(7)}</td>
              <td className="p-2 text-left">{item.high.toFixed(7)}</td>
              <td className="p-2 text-right">{item.low.toFixed(7)}</td>
              <td className="p-2 text-center">{item.close.toFixed(7)}</td>
              <td className="p-2 text-right">{item.volume.toFixed(3)}</td>
              <td className="p-2 text-right">{item.market_cap.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <table>
        <tbody>
          {thistoricalData && thistoricalData.map((item, index) => {
            return <tr key={index}>
              <td>{item.timestamp}</td>
              <td>{item.open}</td>
              <td>{item.high}</td>
              <td>{item.low}</td>
              <td>{item.close}</td>
              <td>{item.market_cap}</td>
            </tr>;
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default HistoricalData;
