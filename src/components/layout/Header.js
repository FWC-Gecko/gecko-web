import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import LanguageSelect from "../section/navbar/LanguageSelect";
import PriceSelect from "../section/navbar/PriceSelect";
import { useTranslation } from "react-i18next";
import useAuth from "../../hook/useAuth";
import useLoading from "../../hook/useLoading";
import ToggleColorTheme from "../section/navbar/ToggleColorTheme";
import SignInButton from "../section/navbar/SignInButton";
import SignUpButton from "../section/navbar/SignUpButton";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const { t } = useTranslation();
  const { logout } = useAuth();
  const { setLoading } = useLoading();

  console.log("user", user);

  const onLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  const Infos = () => {
    return (
      <div className="hidden sm:flex justify-start gap-4 items-center">
        <p className="text-sm font-normal">
          Cryptos: <span className="text-[#BA4DF9]">22,011</span>
        </p>
        <p className="text-sm font-normal">
          Market Cap: <span className="text-[#BA4DF9]">$840,576,683,048</span>
        </p>
        <p className="text-sm font-normal">
          Exchanges: <span className="text-[#BA4DF9]">529</span>
        </p>
        <p className="text-sm font-normal">
          Market Cap: <span className="text-[#BA4DF9]">$840,576,683,048</span>
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
            <div className="">
              <Menu>
                <MenuHandler>
                  <div className="flex justify-end gap-2 items-center">
                    <img
                      src={user && user.avatar}
                      alt=""
                      className="w-8 rounded-full"
                    />
                    <p className="cursor-pointer text-lg text-right">
                      {user && user?.userName}
                    </p>
                    <KeyboardArrowDownIcon />
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
