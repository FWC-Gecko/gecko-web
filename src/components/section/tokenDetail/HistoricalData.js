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
      console.log(_data);
      setHistoricalData(_data);
    };

    _initTable();
  }, []);

  return (
    <div className="mt-5">
      <table>
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
      </table>
    </div>
  );
}

export default HistoricalData;
