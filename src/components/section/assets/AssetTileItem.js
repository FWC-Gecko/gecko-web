import React from "react";

function AssetTileItem({ row, onRowClicked }) {
  return (
    <div
      className="bg-[#21232C] rounded-lg border border-[#23262F] p-3 mt-3 sm:mt-0"
      onClick={onRowClicked}
    >
      <div className="flex justify-between items-center">
        {row.name}
        {row.last7days}
      </div>
      <div className="flex justify-between gap-2">
        <div>
          <p className="text-[#C2C2C2]">Price</p>
          <p className="text-white">{row.price}</p>
        </div>
        <div>
          <p className="text-[#C2C2C2]">1h%</p>
          <p className="text-white">{row.hourPercent}</p>
        </div>
        <div>
          <p className="text-[#C2C2C2]">24h%</p>
          <p className="text-white">{row.dayPercent}</p>
        </div>
        <div>
          <p className="text-[#C2C2C2]">7d%</p>
          <p className="text-white">{row.weekPercent}</p>
        </div>
      </div>
      <hr className="text-[#666666] w-full my-2" />
      <div className="flex justify-start gap-6">
        <div>
          <p className="text-[#C2C2C2]">Market Cap</p>
          <p className="text-white">{row.marketCap}</p>
        </div>
        <div>
          <p className="text-[#C2C2C2]">Volume(24h)</p>
          <p className="text-white">{row.dayVolume}</p>
        </div>
      </div>
      <hr className="text-[#666666] w-full my-2" />
      <div>
        <p className="text-[#C2C2C2]">Circulating Supply</p>
        <p className="text-white">{row.circulatingSupply}</p>
      </div>
    </div>
  );
}

export default AssetTileItem;
