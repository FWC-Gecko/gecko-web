import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import SmsIcon from "@mui/icons-material/Sms";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InfoIcon from "@mui/icons-material/Info";
import { formatNumber, formatPrice } from "../../../utils";
import { Tooltip } from "@material-tailwind/react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import BuyDropdown from "./dropdowns/BuyDropdown";
import ExchangeDropdown from "./dropdowns/ExchangeDropdown";
import GamingDropdown from "./dropdowns/GamingDropdown";
import EarnCryptoDropdown from "./dropdowns/EarnCryptoDropdown";
import Dropdown from "../../common/dropdown/Dropdown";

function TokenInfo({ tokenInfo }) {
  const { t } = useTranslation();

  const [tagsCount, setTagsCount] = useState(4);

  return (
    <div className="bg-white dark:bg-[#121318] rounded-lg p-1 sm:p-6 text-[#101115] dark:text-white">
      <div className="flex flex-col-reverse xl:flex-row justify-between gap-6">
        <div className="grayGradientBg1 rounded-lg p-3 sm:p-6 w-full">
          <div className="sm:flex justify-between items-center gap-3">
            <div className="flex justify-start items-center gap-3">
              {/* <img src="/img/tokens/token1.png" alt="" className="h-12 w-12" /> */}
              <p className="itemBg1 px-3 py-1 rounded font-medium text-sm">
                {tokenInfo && tokenInfo.symbol}
              </p>
              <p className="itemBg1 px-3 py-1 rounded font-medium text-sm cursor-pointer">
                <StarBorderIcon />
              </p>
              <p className="itemBg1 px-3 py-1 rounded font-medium text-sm cursor-pointer">
                <IosShareIcon />
              </p>
            </div>
            <div className="flex justify-end items-center gap-3 mt-3 sm:mt-0">
              <p className="itemBg1 px-3 py-1 rounded font-medium text-sm whitespace-nowrap">
                Rank #{tokenInfo && tokenInfo.cmc_rank}
              </p>
              <p className="itemBg1 px-3 py-1 rounded text-[#9FA0A1] font-medium text-sm">
                Token
              </p>
              <p className="itemBg1 px-3 py-1 rounded text-[#9FA0A1] font-medium text-sm">
                On {formatNumber(tokenInfo ? tokenInfo.watchlistCount : 0)}{" "}
                Watchlists
              </p>
            </div>
          </div>

          <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-3">
            <p className="itemBg1 px-3 py-1 sm:py-2 rounded-lg font-medium flex text-sm sm:text-md justify-center items-center gap-2 w-full">
              <InsertLinkIcon style={{ fontSize: "20px" }} />
              Website
              <a
                href={tokenInfo && tokenInfo.website1}
                target="_blank"
                rel="noreferrer"
              >
                <OpenInNewIcon style={{ fontSize: "14px" }} />
              </a>
            </p>
            <p className="itemBg1 px-3 py-1 sm:py-2 rounded-lg font-medium flex text-sm sm:text-md justify-center items-center gap-2 w-full">
              <Dropdown
                Header={
                  <div className="flex justify-end gap-2 items-center cursor-pointer">
                    <p className="cursor-pointer text-right">Explorers</p>
                    <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
                  </div>
                }
                items={
                  tokenInfo && tokenInfo?.explorer
                    ? tokenInfo?.explorer?.map((row) => {
                        return {
                          content: (
                            <a href={row} target="_blank" rel="noreferrer">
                              <p className="cursor-pointer text-sm text-center w-[100%]">
                                {row?.split("/")[2]}
                              </p>
                            </a>
                          ),
                        };
                      })
                    : []
                }
              />
            </p>
            <p className="itemBg1 px-3 py-1 sm:py-2 rounded-lg font-medium flex text-sm sm:text-md justify-center items-center gap-2 w-full">
              <PersonIcon style={{ fontSize: "22px" }} />
              Community
              <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
            </p>
            <p className="itemBg1 px-3 py-1 sm:py-2 rounded-lg font-medium flex text-sm sm:text-md justify-center items-center gap-2 w-full">
              <SmsIcon style={{ fontSize: "22px" }} />
              Chat
              <OpenInNewIcon style={{ fontSize: "16px" }} />
            </p>
          </div>

          <div>
            <p className="mt-4">
              Contracts:{" "}
              {tokenInfo?.contractAddress?.length <= 0 && (
                <span className="text-sm sm:text-base">
                  Contract Address Not Supported
                </span>
              )}
            </p>

            {tokenInfo?.contractAddress?.length > 0 && (
              <div className="mt-2 sm:flex justify-start gap-3 items-center">
                <a
                  href={tokenInfo?.explorer[0]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center text-sm sm:text-md gap-2">
                    <img src={tokenInfo?.logo} alt="" className="h-6 w-6" />
                    <div className="block sm:flex justify-center items-center">
                      Blockchain ({tokenInfo?.contractAddress[0].blockchain}):{" "}
                      <span className="text-[#FF5665]">
                        {tokenInfo?.contractAddress[0].address.substr(0, 7)}...
                        {tokenInfo?.contractAddress[0].address.substr(
                          tokenInfo?.contractAddress[0].address.length - 7,
                          7
                        )}
                      </span>
                    </div>
                    <ContentCopyIcon style={{ fontSize: "16px" }} />
                    <img
                      src="/img/icons/metamask1.png"
                      alt=""
                      className="h-5 w-5"
                    />
                  </p>
                </a>

                <p className="itemBg1 px-4 py-2 rounded-lg font-bold flex justify-center items-center gap-2 mt-3 sm:mt-0">
                  <Dropdown
                    Header={
                      <div className="flex justify-end gap-2 items-center cursor-pointer">
                        <p className="cursor-pointer text-right">More</p>
                        <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
                      </div>
                    }
                    items={
                      tokenInfo && tokenInfo?.explorer
                        ? tokenInfo?.explorer?.map((item) => {
                            return {
                              content: (
                                <a href={item} target="_blank" rel="noreferrer">
                                  <p className="cursor-pointer text-sm text-center w-[100%]">
                                    {item?.split("/")[2]}
                                  </p>
                                </a>
                              ),
                            };
                          })
                        : []
                    }
                  />
                </p>
              </div>
            )}
          </div>

          <div className="mt-2 sm:mt-4 flex justify-start gap-3 items-start">
            <p className="sm:mt-3">Tags:</p>
            <div className="flex justify-start gap-2 sm:gap-3 items-center flex-wrap">
              {tokenInfo?.cryptoAssetTags?.map((item, index) => {
                if (index < tagsCount)
                  return (
                    <p
                      key={index}
                      className="itemBg1 px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-base font-medium flex justify-center items-center gap-2"
                    >
                      {item}
                    </p>
                  );
              })}
              <p
                className=" text-sm px-4 py-1 sm:py-2 rounded-full cursor-pointer font-medium sm:font-bold shadow"
                onClick={() => {
                  setTagsCount(
                    tagsCount > 4 ? 4 : tokenInfo?.cryptoAssetTags?.length
                  );
                }}
              >
                {tagsCount > 4 ? "Show Less" : "View All"}
              </p>
            </div>
          </div>
        </div>

        <div className="grayGradientBg1 rounded-lg p-3 sm:p-6 mt-4 xl:mt-0 w-full 2xl:w-max">
          <p className="text-lg font-medium">
            {tokenInfo && tokenInfo.name} ({tokenInfo && tokenInfo.symbol})
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center text-sm gap-2 sm:gap-3 mt-4 w-full 2xl:w-max">
            <BuyDropdown />
            <ExchangeDropdown />
            <GamingDropdown />
            <EarnCryptoDropdown />
          </div>
          <div className="mt-2 sm:mt-4 flex justify-between items-center">
            <p className="text-4xl font-medium">
              ${tokenInfo?.price_usd?.toFixed(5)}
            </p>
            <button className="text-white text-sm px-6 py-1.5 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-2">
              {tokenInfo?.percent_change_24h_usd?.toFixed(2)}%
            </button>
          </div>
          <div className="mt-0 sm:mt-4 flex justify-between items-center">
            <p className="sm:text-lg">
              {tokenInfo?.price_btc?.toFixed(9) < 0.000001
                ? `< 0.00000000001`
                : tokenInfo?.price_btc?.toFixed(9)}{" "}
              BTC
            </p>
            <p className="text-sm text-[#FF5665]">
              {tokenInfo?.price_change_24h_btc?.toFixed(2)}%
            </p>
          </div>
          <div className="mt-0 sm:mt-4 flex justify-between items-center">
            <p className="sm:text-lg">
              {tokenInfo?.price_eth?.toFixed(9) < 0.000001
                ? `< 0.00000000001`
                : tokenInfo?.price_eth?.toFixed(9)}{" "}
              ETH
            </p>
            <p className="text-sm text-[#FF5665]">
              {tokenInfo?.price_change_24h_btc?.toFixed(2)}%
            </p>
          </div>
          <div className="mt-0 sm:mt-4 flex items-end gap-3">
            <div>
              <p className="text-sm">Low:</p>
              <p>{tokenInfo && formatPrice(tokenInfo?.low_24h_usd)}</p>
            </div>
            <div className="w-full h-[6px] bg-[#D1D1D1] rounded mb-2" />
            <div>
              <p className="text-sm">High:</p>
              <p>{tokenInfo && formatPrice(tokenInfo?.high_24h_usd)}</p>
            </div>
            <div>
              <p className="itemBg1 px-1 py-1 rounded-lg font-medium flex justify-center items-center text-sm gap-1 cursor-pointer">
                24h
                <KeyboardArrowDownIcon style={{ fontSize: "10px" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2 sm:gap-6">
        <div className="grayGradientBg1 rounded-lg p-3 sm:p-6 w-full sm:mt-0">
          <div className="flex justify-start items-center gap-1">
            <p>Market Cap</p>
            <InfoIcon
              className="text-black/40 dark:text-white/60"
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="flex justify-between items-center sm:mt-2">
            <p className="text-xl font-medium tracking-tighter">
              {tokenInfo && formatPrice(tokenInfo?.market_cap_usd)}
            </p>
            <p
              className={`rounded-lg ${
                tokenInfo?.market_cap_dominance_usd > 0
                  ? "bg-[#16C784]"
                  : "bg-gradient-to-tr from-[#FF6673] to-[#FF1A2D]"
              } px-4 py-1 sm:py-2 text-sm sm:text-base text-white`}
            >
              {tokenInfo &&
                formatNumber(tokenInfo?.market_cap_dominance_usd?.toFixed(2))}
              %
            </p>
          </div>
          <div className="flex justify-between items-center text-sm sm:mt-2">
            <p>24h Volume</p>
            <p>{tokenInfo && formatPrice(tokenInfo?.volume_24h_usd)}</p>
          </div>
        </div>
        <div className="grayGradientBg1 rounded-lg p-3 sm:p-6 w-full sm:mt-0">
          <div className="flex justify-start items-center gap-1">
            <p>Fully Diluted Market Cap</p>
            {/* <InfoIcon
              className="text-black/40 dark:text-white/60"
              style={{ fontSize: "16px" }}
            /> */}
            <img src="/img/certified.svg" alt="" />
            {/* <WarningIcon
              className="text-[#FF5665]"
              style={{ fontSize: "16px" }}
            /> */}
          </div>
          <div className="flex justify-between items-center sm:mt-2">
            <p className="text-xl font-medium tracking-tighter">
              {formatPrice(tokenInfo?.fully_diluted_market_cap_usd)}
            </p>
            <p
              className={`rounded-lg bg-[#16C784] px-4 py-1 sm:py-2 text-sm sm:text-base text-white`}
            >
              13.05%
            </p>
          </div>
        </div>
        <div className="grayGradientBg1 rounded-lg p-3 sm:p-6 w-full sm:mt-0">
          <div className="flex justify-start items-center gap-1">
            <p>Volume</p>
            <p className="bg-black/10 rounded text-sm px-1">24h</p>
            <InfoIcon
              className="text-black/40 dark:text-white/60"
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="flex justify-between items-center sm:mt-2">
            <p className="text-xl font-medium tracking-tighter">
              {tokenInfo && formatPrice(tokenInfo?.volume_24h_usd)}
            </p>
            <p
              className={`rounded-lg ${
                tokenInfo?.volume_change_24h_usd > 0
                  ? "bg-[#16C784]"
                  : "bg-gradient-to-tr from-[#FF6673] to-[#FF1A2D]"
              } px-4 py-1 sm:py-2 text-sm sm:text-base text-white`}
            >
              {tokenInfo && formatNumber(tokenInfo?.volume_change_24h_usd)}%
            </p>
          </div>
          <div className="flex justify-between items-center text-sm sm:mt-2">
            <p>CEX Vol</p>
            <p>$1,293,988</p>
          </div>
          <div className="flex justify-between items-center text-sm sm:mt-1">
            <p>DEX Vol</p>
            <p>$167,936</p>
          </div>
        </div>
        <div className="grayGradientBg1 rounded-lg p-3 sm:p-6 w-full sm:mt-0">
          <div className="flex justify-start items-center gap-1">
            <p>Circulating Supply</p>
            <Tooltip
              content={
                <div className="w-80">
                  The FWC Digital team has verified the project's circulating
                  supply to be as follows:
                  <br /> <br />
                  <p className="bold flex justify-between">
                    <span>Circulating Supply</span>
                    <span>
                      {tokenInfo?.circulatingSupply?.toFixed(2)}
                      {tokenInfo?.symbol}
                    </span>
                  </p>
                </div>
              }
            >
              <InfoIcon
                className="text-black/40 dark:text-white/60 cursor-pointer"
                style={{ fontSize: "16px" }}
              />
            </Tooltip>
            <img src="/img/certified.svg" alt="" />
            {/* <img src="/img/certified.svg" /> */}
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xl font-medium tracking-tighter">
              {tokenInfo && formatNumber(tokenInfo.circulatingSupply)}{" "}
              {tokenInfo && tokenInfo.symbol}
            </p>
            <p
              className={`rounded-lg ${
                tokenInfo?.totalSupply / tokenInfo?.maxSupply > 0
                  ? "bg-[#16C784]"
                  : "bg-gradient-to-tr from-[#FF6673] to-[#FF1A2D]"
              } px-4 py-1 sm:py-2 text-sm sm:text-base text-white`}
            >
              {((tokenInfo?.totalSupply / tokenInfo?.maxSupply) * 100).toFixed(
                2
              )}
              %
            </p>
          </div>
          <div className="flex justify-between items-center text-sm sm:mt-2">
            <p>Max Supply</p>
            <p>{tokenInfo && formatNumber(tokenInfo.maxSupply)}</p>
          </div>
          <div className="flex justify-between items-center text-sm sm:mt-1">
            <p>Total Supply</p>
            <p>{tokenInfo && formatNumber(tokenInfo.totalSupply)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenInfo;
