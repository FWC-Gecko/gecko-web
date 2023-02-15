import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useEffectOnce } from "../../hook/useEffectOnce";
import { useParams } from "react-router-dom";
import Ad from "../../components/section/ad/Ad";

import useExchanges from "../../hook/useExchange";
import { LinkIcon, FeeIcon, TwitterIcon } from "./icons";
import { formatPrice } from "../../utils";

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

  const handleProcessDescription = (descriptionText) => {
    if (descriptionText) {
      let returnText = "";
      const titleSeperated = descriptionText.split("##");
      for (let i = 0; i < titleSeperated.length; i++) {
        let lineSeperated = titleSeperated[i].split("\n");

        for (let j = 0; j < lineSeperated.length; j++) {
          if (j == 0)
            returnText += `<p style="font-size: 1.2rem;font-weight: 700;">${lineSeperated[j]}</p>`;
          else returnText += `<p>${lineSeperated[j]}</p>`;
        }
        returnText += "<br />";
      }
      return returnText;
    }
    return "";
  };

  return (
    <>
      <Ad />
      <div className="pt-5 pb-10">
        <div className="n-container md:flex-col flex-row">
          <div className="px-5 mx-5">
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
                    target="_blank"
                  >
                    {exchangeInfo?.website?.length > 0 &&
                      exchangeInfo?.website[0]}
                  </a>
                </li>
                <li className="flex items-center gap-4 my-3">
                  <FeeIcon />
                  <a
                    href={exchangeInfo?.fee?.length > 0 && exchangeInfo?.fee[0]}
                    target="_blank"
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
                    target="_blank"
                  >
                    {exchangeInfo?.twitter?.length > 0 &&
                      `@${exchangeInfo?.twitter[0]?.split("/")[3]}`}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-5 mx-5">
            <p className="mt-3">Total Trading Volume(24h)</p>
            <p className="text-4xl font-bold">
              {formatPrice(exchangeInfo?.volume_24h_usd)}
            </p>
            <p className="text-xl my-2">
              {exchangeInfo?.volume_24h_btc?.toFixed(2)} BTC
            </p>
            <p className="text-[1.6rem] mt-8 font-bold -mb-3">
              About {exchangeInfo?.name}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: handleProcessDescription(exchangeInfo?.description),
              }}
            ></div>
          </div>
        </div>
      </div>
      <Ad />
    </>
  );
}
