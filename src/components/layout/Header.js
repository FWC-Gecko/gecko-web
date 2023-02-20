import React from "react";
import { useSelector } from "react-redux";
import LanguageSelect from "../section/navbar/LanguageSelect";
import PriceSelect from "../section/navbar/PriceSelect";
import ToggleColorTheme from "../section/navbar/ToggleColorTheme";
import SignInButton from "../section/navbar/SignInButton";
import SignUpButton from "../section/navbar/SignUpButton";
import { useEffectOnce } from "../../hook/useEffectOnce";
import useToken from "../../hook/useToken";
import { useState } from "react";
import { formatPrice } from "../../utils";
import ProfileDropdown from "../section/auth/ProfileDropdown";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { getRecommendInfos } = useToken();

  const [ethGas, setEthGas] = useState(24);

  const [infos, setInfos] = useState([]);
  useEffectOnce(() => {
    async function init() {
      const res = await getRecommendInfos();
      console.log(res);
      setInfos(res);
    }
    init();
  });

  const Infos = () => {
    return (
      <div className="w-full overflow-auto justify-start md:justify-center xl:justify-start flex items-center py-2 gap-4">
        <div className="flex lg:block text-sm">
          <p className="whitespace-nowrap">Cryptos:</p>
          <p className="text-[#BA4DF9]">{infos?.cryptoCount}</p>
        </div>
        <div className="flex lg:block text-sm">
          <p className="whitespace-nowrap">Market Cap:</p>
          <p className="text-[#BA4DF9]">{formatPrice(infos?.totalMarketCap)}</p>
        </div>
        <div className="flex lg:block text-sm">
          <p className="whitespace-nowrap">Exchanges:</p>
          <p className="text-[#BA4DF9]">{infos?.exchangeCount}</p>
        </div>
        <div className="flex lg:block text-sm">
          <p className="whitespace-nowrap">24h Vol:</p>
          <p className="text-[#BA4DF9]">{formatPrice(infos?.totalVolume24h)}</p>
        </div>
        <div className="flex lg:block text-sm">
          <p className="whitespace-nowrap">Dominance:</p>
          <p className="text-[#BA4DF9] whitespace-nowrap">
            BTC: {infos?.dominanceBTC?.toFixed(2)}% ETH:{" "}
            {infos?.dominanceETH?.toFixed(2)}%
          </p>
        </div>
        <div className="flex lg:block text-sm">
          <p className="whitespace-nowrap">ETH Gas:</p>
          <p className="text-[#BA4DF9] whitespace-nowrap">{ethGas} Gwei</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-[#101115] py-2">
      <div className="n-container flex justify-between gap-4">
        <Infos />
        <div className="hidden xl:flex justify-end items-center gap-4 w-full sm:w-max">
          <LanguageSelect />
          <PriceSelect />
          <ToggleColorTheme />
          {isAuthenticated ? (
            <ProfileDropdown />
          ) : (
            <div className="flex gap-4">
              <SignInButton />
              <SignUpButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
