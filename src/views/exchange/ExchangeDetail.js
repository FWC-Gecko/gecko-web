import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Ad from "../../components/section/ad/Ad";
import useExchanges from "../../hook/useExchange";

import ExchangeInformation from "../../components/section/exchangeDetail/ExchangeInformation";
import MarketsInformation from "../../components/section/exchangeDetail/MarketsInformation";

export default function ExchangeDetail() {
  const [exchangeInfo, setExchangeInfo] = useState();
  const [marketsInfo, setMarketsInfo] = useState();

  const params = useParams();
  const { getExchangeByID, getMarketsByID } = useExchanges();

  useEffect(() => {
    if (params.exchangeID) {
      const _getExgByID = async () => {
        setExchangeInfo(await getExchangeByID(params.exchangeID));
      };

      const _getMrksInfo = async () => {
        setMarketsInfo(await getMarketsByID(params.exchangeID));
      };

      _getExgByID();
      _getMrksInfo();
    }
  }, []);

  console.log(marketsInfo);

  return (
    <>
      <Ad />
      <div className="pt-5 pb-10">
        <ExchangeInformation exchangeInfo={exchangeInfo} />
        <MarketsInformation marketsInfo={marketsInfo} />
      </div>
      <Ad />
    </>
  );
}
