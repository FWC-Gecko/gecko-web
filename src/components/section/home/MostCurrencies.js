import React from "react";

function MostCurrencies() {
  const currencies = [
    {
      icon: "/img/tokens/waves.png",
      name: "Waves",
      symbol: "Waves",
    },
    {
      icon: "/img/tokens/bitcoin.png",
      name: "Bitcoin",
      symbol: "BTC",
    },
    {
      icon: "/img/tokens/cake.png",
      name: "PancakeSwap",
      symbol: "CAKE",
    },
    {
      icon: "/img/tokens/ETH.png",
      name: "Ethereum",
      symbol: "ETH",
    },
    {
      icon: "/img/tokens/art.png",
      name: "Ark",
      symbol: "Ark",
    },
  ];

  return (
    <div className="bg-[#121318] p-6 border border-[#23262F] rounded-lg w-full">
      <div className="sm:flex justify-between items-center">
        <p className="text-white font-bold text-xl sm:text-2xl">
          What Others Are <span className="text-[#BA4DF9]">Searching</span>
        </p>
        <p className="text-[#BA4DF9] cursor-pointer">
          View Most Popular Cryptocurrency
        </p>
      </div>

      <div className="flex justify-start sm:justify-between items-center overflow-auto gap-14 sm:gap-0 mt-6">
        {currencies.map((row, key) => {
          return (
            <div className="flex gap-2 items-center" key={key}>
              <img src={row.icon} alt="" className="h-10 w-10" />
              <p className="text-white text-lg font-bold">{row.name}</p>
              <p className="text-[#BA4DF9] text-sm font-normal">{row.symbol}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MostCurrencies;
