import React from "react";
import { useTranslation } from "react-i18next";
import Ad from "../components/section/ad/Ad";
import AssetsTable from "../components/section/assets/AssetsTable";
import LeftTokenPart from "../components/section/home/LeftTokenPart";
import RightTokenPart from "../components/section/home/RightTokenPart";
import { useParams } from "react-router-dom";

const Search = (props) => {
  const params = useParams();

  return (
    <>
      <Ad />
      <div className="pt-5 pb-10">
        <div className="n-container">
          <div className="justify-between py-4 sm:py-10 hidden sm:flex">
            <div className="sm:w-1/2">
              <LeftTokenPart />
            </div>
            <div className="sm:w-1/2">
              <RightTokenPart />
            </div>
          </div>
          <h1 className="text-color2 dark:text-white text-2xl sm:text-4xl font-bold tracking-widest text-center sm:text-start leading-snug">
            Search result for <span className="text-[#BA4DF9]">`{params.text}`</span>
          </h1>
          <AssetsTable searchText={params.text} watchlistshow={false} />
        </div>
      </div>
      <Ad />
    </>
  );
};

export default Search;
