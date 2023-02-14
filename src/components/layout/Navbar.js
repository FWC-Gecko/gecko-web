import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchInput from "../section/navbar/SearchInput";
import StarIcon from "@mui/icons-material/Star";
import PieChartIcon from "@mui/icons-material/PieChart";

const Navbar = () => {
  const { t } = useTranslation();

  const menus = [
    { title: "Cryptocurrencies", link: "/" },
    { title: "Exchanges", link: "/exchanges" },
    { title: "Community", link: "" },
  ];

  return (
    <>
      <div className="bg-color3 dark:bg-[#0B0B0F] py-3">
        <div className="n-container">
          <div className="flex justify-between items-center">
            <div className="flex justify-start gap-4 items-center">
              <Link to={"/"}>
                <img
                  src="/logo.png"
                  className="h-10 w-10 sm:h-16 sm:w-16"
                  alt=""
                />
              </Link>
              <SearchInput />
            </div>

            <div className="hidden lg:flex text-color2 dark:text-white text-lg text-center items-center gap-6">
              {menus.map((row, key) => {
                return (
                  <Link to={row.link}>
                    <p>{t(row.title)}</p>
                  </Link>
                );
              })}
            </div>

            <div className="hidden sm:flex justify-end gap-5 items-center">
              <div className="flex justify-start items-center gap-2">
                {/* <img src="/img/star.png" alt="" /> */}
                <StarIcon className="h-4 cursor-pointer text-[#B9B9B9] dark:text-white" />
                <p className="text-color2 dark:text-white">Watchlist</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <PieChartIcon className="h-4 cursor-pointer text-[#B9B9B9] dark:text-white" />
                <p className="text-color2 dark:text-white">Portfolio</p>
              </div>
            </div>

            <Link
              to={"/list-token"}
              onClick={() => localStorage.removeItem("list-token")}
            >
              <button className="bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] py-2 px-5 flex gap-1 justify-center items-center rounded-full text-white font-medium">
                <img src="/img/list-token.png" alt="" className="h-6" />
                Listing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
