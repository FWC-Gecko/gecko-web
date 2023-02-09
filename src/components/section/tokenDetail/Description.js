import React from "react";

function Description() {
  return (
    <div>
      <div className="sm:flex justify-between items-center gap-10 mt-10 sm:mt-20">
        <div className="sm:w-1/2">
          <img src="/img/Group10426.png" alt="" />
        </div>
        <div className="sm:w-1/2 mt-5 sm:mt-0 text-[#101115] dark:text-white">
          <p className="text-2xl sm:text-4xl font-bold leading-snug text-center sm:text-start">
            <span className="text-[#BA4DF9]">BTC</span> Price Live Data
          </p>
          <p className="text-lg mt-5 leading-relaxed text-center sm:text-start">
            The live Bitcoin price today is $23,011.39 USD with a 24-hour
            trading volume of $31,439,945,638 USD. We update our BTC to USD
            price in real-time. Bitcoin is up 1.59% in the last 24 hours. The
            current CoinMarketCap ranking is #1, with a live market cap of
            $443,497,729,957 USD. It has a circulating supply of 19,272,968 BTC
            coins and a max. supply of 21,000,000 BTC coins.
          </p>
          <p className="text-lg mt-5 leading-relaxed text-center sm:text-start">
            If you would like to know where to buy Bitcoin at the current rate,
            the top cryptocurrency exchanges for trading in{" "}
            <span className="text-[#BA4DF9]">Bitcoin</span>
            stock are currently <span className="text-[#BA4DF9]">
              Binance
            </span>, <span className="text-[#BA4DF9]">BTCEX</span>,{" "}
            <span className="text-[#BA4DF9]">Bybit</span>,{" "}
            <span className="text-[#BA4DF9]">Deepcoin</span>, and{" "}
            <span className="text-[#BA4DF9]">BingX</span>. You can find others
            listed on our{" "}
            <span className="text-[#BA4DF9]">crypto exchanges page</span>.
          </p>
          <p className="text-2xl sm:text-4xl font-bold leading-snug text-center sm:text-start mt-5">
            What Is <span className="text-[#BA4DF9]">Bitcoin (BTC)?</span>
          </p>
          <p className="text-lg mt-5 leading-relaxed text-center sm:text-start">
            <span className="text-[#BA4DF9]">Bitcoin</span> is a decentralized{" "}
            <span className="text-[#BA4DF9]">cryptocurrency</span> originally
            described in a 2008{" "}
            <span className="text-[#BA4DF9]">whitepaper</span> by a person, or
            group of people, using the alias{" "}
            <span className="text-[#BA4DF9]">Satoshi Nakamoto</span>. It was
            launched soon after, in January 2009.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-6">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
