import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { toast } from "react-toastify";
import useAssetTag from "../../../hook/useAssetTag";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChangeSearchValue = async (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchValue == "") {
      toast.error("Please input search box correctly.");
      return;
    }

    location.href = `/search/${searchValue}`;
  };

  const [searchWidth, setSearchWidth] = useState("0px");

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-start bg-[#1F2128]/10 dark:bg-[#1F2128] rounded-full py-2 px-2 sm:px-4 items-center w-max">
        <input
          type={"text"}
          value={searchValue}
          onChange={(e) => handleChangeSearchValue(e)}
          className={`bg-transparent outline-none text-color2 dark:text-white/40 w-[${searchWidth}] max-w-[120px] sm:w-48`}
          placeholder="Search"
        />
        <SearchIcon
          type="submit"
          className="h-4 cursor-pointer text-[#101115] dark:text-white"
          onClick={() => {
            if (searchWidth === "0px") {
              setSearchWidth("70px");
            } else {
              if (searchValue == "") {
                toast.error("Please input search box correctly.");
                return;
              }

              location.href = `/search/${searchValue}`;
            }
          }}
        />
      </div>
    </form>
  );
}

export default SearchInput;
