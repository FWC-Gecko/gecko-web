import React, { useEffect } from "react";

import Title from "./../components/common/title/Title";
import { useTranslation } from "react-i18next";
import AssetsTable from "../components/section/AssetsTable";

const Home = () => {
  const { t } = useTranslation();

  const AdditionalItems = () => {
    return (
      <>
        <div className="max-w-[1000px] -mt-28 m-auto flex justify-between shadow-lg rounded-lg overflow-hidden ">
          <div className="w-full">
            <div className="px-6 py-3 flex justify-between items-center bg-[#E9E9E9]">
              <p className="text-lg font-bold text-black">Trending</p>
              <p className="text-md font-medium text-[#FF5665]">
                View More {`>`}
              </p>
            </div>
            <div className="bg-white py-4">
              <div className="border-r border-black/60 px-6">
                <div className="flex justify-between items-center border-b pb-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
                <div className="flex justify-between items-center border-b py-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
                <div className="flex justify-between items-center pt-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="px-6 py-3 flex justify-between items-center bg-[#E9E9E9]">
              <p className="text-lg font-bold text-black">Recently Added</p>
              <p className="text-md font-medium text-[#FF5665]">
                View More {`>`}
              </p>
            </div>
            <div className="bg-white py-4">
              <div className="border-r border-black/60 px-6">
                <div className="flex justify-between items-center border-b pb-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
                <div className="flex justify-between items-center border-b py-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
                <div className="flex justify-between items-center pt-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="px-6 py-3 flex justify-between items-center bg-[#E9E9E9]">
              <p className="text-lg font-bold text-black">Top Community</p>
              <p className="text-md font-medium text-[#FF5665]">
                View More {`>`}
              </p>
            </div>
            <div className="bg-white py-4">
              <div className=" px-6">
                <div className="flex justify-between items-center border-b pb-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
                <div className="flex justify-between items-center border-b py-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
                <div className="flex justify-between items-center pt-3 border-black/60">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src="/img/tokens/bitcoin.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p>Bitcoin</p>
                    <p className="text-black/70 text-xs">BTC</p>
                  </div>
                  <p className="text-[#FF5665]">1.38%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="bg-primaryGray">
        <Title
          title={t(
            "Today's Cryptocurrency Prices by Football World Communityt"
          )}
          subTitle={
            <p className="text-white text-md text-center">
              The total crypto market volume over the last 24 hours is{" "}
              <span className="text-[#FF808A]"> $31.40B</span>, which makes a
              <span className="text-[#FF808A]">29.97%</span> increase. The total
              volume in DeFi is currently{" "}
              <span className="text-[#FF808A]">$2.13B</span> ,{" "}
              <span className="text-[#FF808A]">6.78%</span> of the total crypto
              market <span className="text-[#FF808A]">24-hour</span> volume.
            </p>
          }
          isBlock={true}
        />
        <AdditionalItems />
        <AssetsTable />
      </div>
    </>
  );
};

export default Home;
