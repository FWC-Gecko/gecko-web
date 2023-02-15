import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Ad from "../../components/section/ad/Ad";

import useExchanges from "../../hook/useExchange";

export default function ExchangeDetail() {
  const params = useParams();

  const { getExchangeByID } = useExchanges();

  useEffect(() => {
    if (params.exchangeID) {
      const _getExgByID = async () => {
        console.log(await getExchangeByID(params.exchangeID));
      };

      _getExgByID();
    }
  }, []);

  return (
    <>
      <Ad />
      <div className="pt-5 pb-10">
        <div className="n-container"></div>
      </div>
      <Ad />
    </>
  );
}
