import React, { useEffect } from "react";
import OtherTokenInfo from "../components/section/tokenDetail/OtherTokenInfo";
import Satistic from "../components/section/tokenDetail/Satistic";
import Transactions from "../components/section/tokenDetail/Transactions";

function TokenDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#0B0B0F]">
      <div className="n-container pb-10">
        <div className="bg-[#1B1C23]/70 rounded-3xl flex justify-between items-center">
          <div className="flex justify-start items-center gap-4 pl-10">
            <img src="/img/token-detail.png" alt="" />
            <div className="">
              <p className="text-white text-3xl font-bold">
                Football World Community Token
              </p>
              <p className="text-white text-sm">
                Home {`>`}{" "}
                <span className="text-[#BA4DF9]">
                  Football World Community Token
                </span>
              </p>
            </div>
          </div>
          <div>
            <img src="/img/56538722.png" alt="" className="h-48" />
          </div>
        </div>
        <div className="mt-10">
          <Satistic />
        </div>
        <div className="mt-10 flex justify-between gap-10">
          <Transactions />
          <OtherTokenInfo />
        </div>
      </div>
    </div>
  );
}

export default TokenDetail;
