import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useEffectOnce } from "../../hook/useEffectOnce";
import { useParams } from "react-router-dom";
import Ad from "../../components/section/ad/Ad";

import useExchanges from "../../hook/useExchange";
import { LinkIcon, FeeIcon, TwitterIcon } from "./icons";

export default function ExchangeDetail() {
  const [exchangeInfo, setExchangeInfo] = useState();

  const params = useParams();
  const { getExchangeByID } = useExchanges();

  useEffect(() => {
    if (params.exchangeID) {
      const _getExgByID = async () => {
        setExchangeInfo(await getExchangeByID(params.exchangeID));
      };

      _getExgByID();
    }
  }, []);

  return (
    <>
      <Ad />
      <div className="pt-5 pb-10">
        <div className="n-container flex">
          <div>
            <div className="flex gap-5 items-center">
              <img src={exchangeInfo?.logo} />
              <p className="text-5xl font-extrabold">{exchangeInfo?.name}</p>
            </div>
            <div className="mt-8">
              <ul>
                <li className="flex items-center gap-4 my-3">
                  <LinkIcon />
                  <a
                    href={
                      exchangeInfo?.website?.length > 0 &&
                      exchangeInfo?.website[0]
                    }
                  >
                    {exchangeInfo?.website?.length > 0 &&
                      exchangeInfo?.website[0]}
                  </a>
                </li>
                <li className="flex items-center gap-4 my-3">
                  <FeeIcon />
                  <a
                    href={exchangeInfo?.fee?.length > 0 && exchangeInfo?.fee[0]}
                  >
                    Fees
                  </a>
                </li>
                <li className="flex items-center gap-4 my-3">
                  <TwitterIcon />
                  <a
                    href={
                      exchangeInfo?.twitter?.length > 0 &&
                      exchangeInfo?.twitter[0]
                    }
                  >
                    {exchangeInfo?.twitter?.length > 0 &&
                      `@${exchangeInfo?.twitter[0]?.split("/")[3]}`}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>123</div>
        </div>
      </div>
      <Ad />
    </>
  );
}
