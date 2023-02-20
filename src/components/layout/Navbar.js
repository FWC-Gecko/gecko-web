import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchInput from "../section/navbar/SearchInput";
import StarIcon from "@mui/icons-material/Star";
import PieChartIcon from "@mui/icons-material/PieChart";
import ListingButton from "../section/navbar/ListingButton";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "../section/navbar/MobileMenu";
import { useState } from "react";
import Menus from "../section/navbar/Menus";

const Navbar = () => {
  const { t } = useTranslation();

  const [isMobileMenuShow, setMobileMenuShow] = useState(false);

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

            <div className="hidden xl:block">
              <Menus />
            </div>

            <div className="hidden xl:flex justify-end gap-5 items-center">
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

            <div className="hidden xl:flex justify-end">
              <ListingButton />
            </div>

            <p
              className="xl:hidden cursor-pointer"
              onClick={() => setMobileMenuShow(true)}
            >
              <MenuIcon />
            </p>
          </div>
        </div>
        <MobileMenu isShow={isMobileMenuShow} setShow={setMobileMenuShow} />
      </div>
    </>
  );
};

export default Navbar;
