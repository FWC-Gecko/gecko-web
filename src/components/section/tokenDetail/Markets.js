import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useEffectOnce } from "../../../hook/useEffectOnce";
import useToken from "../../../hook/useToken";
import TokenMarketsInformation from "./TokenMarketInformation";

function Markets({ tokenId, tokenInfo }) {
  const theme = useSelector((state) => state.auth.theme);
  const [marketData, setMarketData] = useState([]);
  const [futureMarketData, setFutureMarketData] = useState([]);
  const [perpetualMarketData, setPerpetualMarketData] = useState([]);
  const { getTokenMarkets } = useToken();

  useEffect(() => {
    const _initTable = async () => {
      const _data = await getTokenMarkets(tokenId);
      setMarketData(_data);
    };

    _initTable();
  }, []);

  return (
    <div className="mt-5 bg-white dark:bg-[#121318] dark:bg-gray-100 text-[#47484E] dark:text-white w-full overflow-auto">
      {marketData && <TokenMarketsInformation marketsInfo={marketData} />}
    </div>
  );
}

export default Markets;
