import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LanguageSelect from "../section/navbar/LanguageSelect";
import PriceSelect from "../section/navbar/PriceSelect";
import { useTranslation } from "react-i18next";

import { logout } from "../../actions/auth";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const { t } = useTranslation();

  const Infos = () => {
    return (
      <div className="flex justify-start gap-4 items-center">
        <p className="text-sm text-white font-normal">
          Cryptos <span className="text-[#FF808A]">22,011</span>
        </p>
        <p className="text-sm text-white font-normal">
          Market Cap <span className="text-[#FF808A]">$840,576,683,048</span>
        </p>
        <p className="text-sm text-white font-normal">
          Exchanges <span className="text-[#FF808A]">529</span>
        </p>
        <p className="text-sm text-white font-normal">
          Market Cap <span className="text-[#FF808A]">$840,576,683,048</span>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-black py-3">
      <div className="n-container flex justify-between gap-4">
        <Infos />
        <div className="flex justify-end items-center gap-4">
          <LanguageSelect />
          <PriceSelect />
          {isAuthenticated ? (
            <div className="hidden sm:block">
              <Link to={"/profile"}>
                <p className="text-black dark:text-white cursor-pointer text-lg font-medium text-right">
                  {user && user.name}
                </p>
              </Link>
              <p
                className="text-black dark:text-white cursor-pointer text-sm text-right"
                onClick={logout}
              >
                {t("Logout")}
              </p>
            </div>
          ) : (
            <div className="hidden sm:flex gap-4">
              <Link to={"login"}>
                <button className="px-4 text-white bg-white/20 h-10 rounded-lg">
                  {t("Log In")}
                </button>
              </Link>
              <Link to={"signup"}>
                <button className="px-4 text-white bg-[#FF6673]  h-10 rounded-lg">
                  {t("Sign Up")}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
