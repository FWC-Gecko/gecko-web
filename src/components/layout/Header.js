import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import LanguageSelect from "../section/navbar/LanguageSelect";
import PriceSelect from "../section/navbar/PriceSelect";
import { useTranslation } from "react-i18next";
import useAuth from "../../hook/useAuth";
import useLoading from "../../hook/useLoading";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const { t } = useTranslation();
  const { logout } = useAuth();
  const { setLoading } = useLoading();

  const onLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  const Infos = () => {
    return (
      <div className="flex justify-start gap-4 items-center">
        <p className="text-sm text-white font-normal">
          Cryptos <span className="text-[#BA4DF9]">22,011</span>
        </p>
        <p className="text-sm text-white font-normal">
          Market Cap <span className="text-[#BA4DF9]">$840,576,683,048</span>
        </p>
        <p className="text-sm text-white font-normal">
          Exchanges <span className="text-[#BA4DF9]">529</span>
        </p>
        <p className="text-sm text-white font-normal">
          Market Cap <span className="text-[#BA4DF9]">$840,576,683,048</span>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-[#101115] py-2">
      <div className="n-container flex justify-between gap-4">
        <Infos />
        <div className="flex justify-end items-center gap-4">
          <LanguageSelect />
          <PriceSelect />
          {isAuthenticated ? (
            <div className="hidden sm:block">
              <Menu>
                <MenuHandler>
                  <div className="flex justify-end gap-2 items-center">
                    <img
                      src={user && user.avatar}
                      alt=""
                      className="w-8 rounded-full"
                    />
                    <p className="text-white cursor-pointer text-lg text-right">
                      {user && user.name}
                    </p>
                    <img
                      src="/img/down_arrow.png"
                      alt=""
                      className="w-3 mt-1"
                    />
                  </div>
                </MenuHandler>
                <MenuList className="w-32 bg-[#101115] border-white/5 border p-0">
                  <MenuItem className="hover:bg-white/10 flex justify-center items-center p-2">
                    <Link to="/user/profile" className="">
                      <p className="text-white cursor-pointer text-sm text-center">
                        {t("Profile")}
                      </p>
                    </Link>
                  </MenuItem>
                  <MenuItem className="hover:bg-white/10 flex justify-center items-center p-2">
                    <p
                      className="text-white cursor-pointer text-sm text-center"
                      onClick={onLogout}
                    >
                      {t("Logout")}
                    </p>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          ) : (
            <div className="hidden sm:flex gap-4">
              <Link to={"login"}>
                <button className="px-4 text-white bg-white/20 h-9 rounded-full">
                  {t("Log In")}
                </button>
              </Link>
              <Link to={"signup"}>
                <button className="px-4 text-white  bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] h-9 rounded-full">
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
