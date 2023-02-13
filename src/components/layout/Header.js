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

  const [infos, setInfos] = useState([]);
  useEffectOnce(() => {
    async function init() {
      const res = await getRecommendInfos();
      setInfos(res);
    }
    init();
  });

  const Infos = () => {
    return (
      <div className="hidden sm:flex justify-start gap-4 items-center">
        <p className="text-sm font-normal">
          Cryptos: <span className="text-[#BA4DF9]">{infos?.cryptoCount}</span>
        </p>
        <p className="text-sm font-normal">
          Market Cap:{" "}
          <span className="text-[#BA4DF9]">
            {formatPrice(infos?.totalMarketCap)}
          </span>
        </p>
        <p className="text-sm font-normal">
          Exchanges:{" "}
          <span className="text-[#BA4DF9]">{infos?.exchangeCount}</span>
        </p>
        <p className="text-sm font-normal">
          24h Vol:{" "}
          <span className="text-[#BA4DF9]">
            {formatPrice(infos?.totalVolume24h)}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-[#101115] py-2">
      <div className="n-container flex justify-between gap-4">
        <Infos />
        <div className="flex justify-end items-center gap-4 w-full sm:w-max">
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
