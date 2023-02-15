import React from "react";
import { useState } from "react";
import { formatPrice } from "../../../utils";

export default function MarketsInformation({ marketsInfo }) {
  const activeClassName = `dark:rounded-[10px 10px 0px 0px] dark:bg-[#ffffff55] bg-[#00000044]`;
  const [activeStep, setActiveStep] = useState(1);
  console.log(marketsInfo);

  return (
    <div className="n-container">
      <div className="flex-col items-end gap-5 justify-between my-5">
        <p className="text-3xl font-bold text-center">Markets</p>
        <div className="border-b border-gray-200 dark:border-gray-700 mx-10 mt-5 sm:mt-0">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li
              className="mr-2 cursor-pointer"
              onClick={() => setActiveStep(1)}
            >
              <span
                className={`inline-flex p-2 text-[1rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  activeStep == 1 && activeClassName
                }`}
              >
                Spot
              </span>
            </li>
            <li
              className="mr-2 cursor-pointer"
              onClick={() => setActiveStep(2)}
            >
              <span
                className={`inline-flex p-2 text-[1rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  activeStep == 2 && activeClassName
                }`}
                aria-current="page"
              >
                Perpetual
              </span>
            </li>
            <li
              className="mr-2 cursor-pointer"
              onClick={() => setActiveStep(3)}
            >
              <span
                className={`inline-flex p-2 text-[1rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  activeStep == 3 && activeClassName
                }`}
              >
                Futures
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-5 w-full overflow-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-3 text-left whitespace-nowrap">#</th>
              <th className="p-3 text-left whitespace-nowrap">Currency</th>
              <th className="p-3 text-left whitespace-nowrap">Pair</th>
              <th className="p-3 text-right whitespace-nowrap">Price</th>
              {activeStep == 1 && (
                <>
                  <th className="p-3 text-center whitespace-nowrap">
                    +2% Depth
                  </th>
                  <th className="p-3 text-right whitespace-nowrap">
                    -2% Depth
                  </th>
                </>
              )}
              <th className="p-3 text-right whitespace-nowrap">Volume</th>
              <th className="p-3 text-right whitespace-nowrap">Volume %</th>
              {/* <th className="p-3 text-right whitespace-nowrap">Liquidity</th> */}
              <th className="p-3 text-right whitespace-nowrap">Updated</th>
            </tr>
          </thead>
          <tbody>
            {marketsInfo &&
              marketsInfo[
                activeStep == 1
                  ? "spot"
                  : activeStep == 2
                  ? "perpetual"
                  : "futures"
              ].map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="p-3 text-left whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="p-3 text-left whitespace-nowrap flex gap-3">
                      <img src={item.logo} width={25} />
                      <span>{item.market_pair_base.currency_symbol}</span>
                    </td>
                    <td className="p-3 text-left whitespace-nowrap">
                      {item.market_pair_base.currency_symbol}
                      {"/"}
                      {item.market_pair_quote.currency_symbol}
                    </td>
                    <td className="p-3 text-right whitespace-nowrap">
                      {formatPrice(item.quote.USD.price)}
                    </td>
                    {activeStep == 1 && (
                      <>
                        <td className="p-3 text-center whitespace-nowrap">
                          {formatPrice(item.quote.USD.depth_positive_two)}
                        </td>
                        <td className="p-3 text-right whitespace-nowrap">
                          {formatPrice(item.quote.USD.depth_negative_two)}
                        </td>
                      </>
                    )}
                    <td className="p-3 text-right whitespace-nowrap">
                      {formatPrice(item.quote.USD.volume_24h)}
                    </td>
                    <td className="p-3 text-right whitespace-nowrap">
                      {(
                        item.quote.exchange_reported.volume_percentage * 10
                      ).toFixed(2)}
                      %
                    </td>
                    {/* <td className="p-3 text-right whitespace-nowrap">
                      Liquidity
                    </td> */}
                    <td className="p-3 text-right whitespace-nowrap">
                      {new Date(item.quote.USD.last_updated).toDateString(
                        "YYYY/MM/DD"
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
