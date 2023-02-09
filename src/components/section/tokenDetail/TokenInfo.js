import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import SmsIcon from "@mui/icons-material/Sms";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArticleIcon from "@mui/icons-material/Article";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";

function TokenInfo() {
  return (
    <div className="bg-white dark:bg-[#121318] rounded-lg p-6 text-[#101115] dark:text-white">
      <div className="flex justify-between gap-6">
        <div className="grayGradientBg1 rounded-lg p-6 w-full">
          <div className="flex justify-between items-center gap-3">
            <div className="flex justify-start items-center gap-3">
              <img src="/img/tokens/token1.png" alt="" className="h-12 w-12" />
              <p className="text-xl font-medium">BitCoin</p>
              <p className="itemBg1 px-3 py-1 rounded font-medium text-sm">
                BTC
              </p>
              <p className="itemBg1 px-3 py-1 rounded font-medium text-sm cursor-pointer">
                <StarBorderIcon />
              </p>
              <p className="itemBg1 px-3 py-1 rounded font-medium text-sm cursor-pointer">
                <IosShareIcon />
              </p>
            </div>
            <div className="flex justify-end items-center gap-3">
              <p className="itemBg1 px-3 py-1 rounded font-medium text-sm">
                Rank #2676
              </p>
              <p className="itemBg1 px-3 py-1 rounded text-[#9FA0A1] font-medium text-sm">
                Token
              </p>
              <p className="itemBg1 px-3 py-1 rounded text-[#9FA0A1] font-medium text-sm">
                On 73,482 Watchlists
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-start gap-3 items-center">
            <p className="itemBg1 px-3 py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full">
              <InsertLinkIcon style={{ fontSize: "20px" }} />
              Website
              <OpenInNewIcon style={{ fontSize: "14px" }} />
            </p>

            <p className="itemBg1 px-3 py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full">
              <SearchIcon style={{ fontSize: "22px" }} />
              Explorers
              <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
            </p>
            <p className="itemBg1 px-3 py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full">
              <PersonIcon style={{ fontSize: "22px" }} />
              Community
              <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
            </p>
            <p className="itemBg1 px-3 py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full">
              <SmsIcon style={{ fontSize: "22px" }} />
              Chat
              <OpenInNewIcon style={{ fontSize: "16px" }} />
            </p>
          </div>

          <p className="mt-4">Contracts:</p>
          <div className="mt-2 flex justify-start gap-3 items-center">
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2">
              <img src="/img/icons/18391.png" alt="" className="h-6 w-6" />
              BNB Smart Chain (BEP20):{" "}
              <span className="text-[#FF5665]">0x6d3a...ade19fc</span>
              <ContentCopyIcon style={{ fontSize: "16px" }} />
              <img src="/img/icons/metamask1.png" alt="" className="h-5 w-5" />
            </p>

            <p className="itemBg1 px-4 py-2 rounded-lg font-bold flex justify-center items-center gap-2">
              <ArticleIcon style={{ fontSize: "16px" }} />
              More
              <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
            </p>
          </div>

          <p className="mt-4">Tags:</p>
          <div className="mt-2 flex justify-start gap-3 items-center">
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2">
              Decentralized Exchange (DEX) Token
            </p>
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2">
              Defi
            </p>
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2">
              Yield Farming
            </p>
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2">
              DAO
            </p>
          </div>
          <button className="text-white text-sm px-6 py-1.5 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-4">
            View All
          </button>
        </div>

        <div className="grayGradientBg1 rounded-lg p-6">
          <p className="text-lg font-medium">Qatar 2022 Token Price (FWC)</p>
          <div className="flex items-center text-sm gap-3 mt-4">
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full shadow">
              Buy
              <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
            </p>
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full shadow">
              Exchange
              <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
            </p>
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full shadow">
              Gaming
              <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
            </p>
            <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2 whitespace-nowrap w-full shadow">
              Earn Crypto
              <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
            </p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-4xl font-medium">$0.0...00103</p>
            <button className="text-white text-sm px-6 py-1.5 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-4">
              9.98%
            </button>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-lg">{`<`}0.000000000001 BTC</p>
            <p className="text-sm text-[#FF5665]">10.64%</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-lg">{`<`}0.000000000001 ETH</p>
            <p className="text-sm text-[#FF5665]">11.87%</p>
          </div>
          <div className="mt-4 flex items-end gap-3">
            <div>
              <p className="text-sm">Low:</p>
              <p>$0.0...01024</p>
            </div>
            <div className="w-full h-[6px] bg-[#D1D1D1] rounded mb-2" />
            <div>
              <p className="text-sm">High:</p>
              <p>$0.0...01179</p>
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
      <div className="mt-6 flex justify-between gap-6">
        <div className="grayGradientBg1 rounded-lg p-6 w-full">
          <div className="flex justify-start items-center gap-1">
            <p>Market Cap</p>
            <InfoIcon
              className="text-black/40 dark:text-white/60"
              style={{ fontSize: "16px" }}
            />
            <WarningIcon
              className="text-[#FF5665]"
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-3xl font-medium tracking-tighter">$10,401,194</p>
            <p className="rounded-lg bg-[#16C784] px-4 py-2 text-white">
              0.00%
            </p>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <p>24h Volume / Market Cap</p>
            <p>0.131</p>
          </div>
        </div>
        <div className="grayGradientBg1 rounded-lg p-6 w-full">
          <div className="flex justify-start items-center gap-1">
            <p>Fully Diluted Market Cap</p>
            <InfoIcon
              className="text-black/40 dark:text-white/60"
              style={{ fontSize: "16px" }}
            />
            <WarningIcon
              className="text-[#FF5665]"
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-3xl font-medium tracking-tighter">$19,628,422</p>
            <p className="rounded-lg bg-gradient-to-tr from-[#FF6673] to-[#FF1A2D] px-4 py-2 text-white">
              13.05%
            </p>
          </div>
        </div>
        <div className="grayGradientBg1 rounded-lg p-6 w-full">
          <div className="flex justify-start items-center gap-1">
            <p>Volume</p>
            <p className="bg-black/10 rounded text-sm px-1">24h</p>
            <InfoIcon
              className="text-black/40 dark:text-white/60"
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-3xl font-medium tracking-tighter">$19,628,422</p>
            <p className="rounded-lg bg-gradient-to-tr from-[#FF6673] to-[#FF1A2D] px-4 py-2 text-white">
              13.05%
            </p>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <p>CEX Vol</p>
            <p>$1,293,988</p>
          </div>
          <div className="flex justify-between items-center text-sm mt-1">
            <p>DEX Vol</p>
            <p>$167,936</p>
          </div>
        </div>
        <div className="grayGradientBg1 rounded-lg p-6 w-full">
          <div className="flex justify-start items-center gap-1">
            <p>Self Reported Circulating Supply</p>
            <InfoIcon
              className="text-black/40 dark:text-white/60"
              style={{ fontSize: "16px" }}
            />
            <WarningIcon
              className="text-[#FF5665]"
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-3xl font-medium tracking-tighter">
              99,712,041,000 FWC
            </p>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <p>Max Supply</p>
            <p>200,000,000,000</p>
          </div>
          <div className="flex justify-between items-center text-sm mt-1">
            <p>Total Supply</p>
            <p>200,000,000,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenInfo;