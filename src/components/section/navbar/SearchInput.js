import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { toast } from "react-toastify";
import useAssetTag from "../../../hook/useAssetTag";
import useToken from "../../../hook/useToken";
import { useEffect } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [searchfocus, setsearchfocus] = useState(false);
  const [searchtoken, setsearchtoken] = useState([]);
  const navigate = useNavigate();

  const { get5AllowedTokens } = useToken();

  const handleChangeSearchValue = async (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    updateSearchTokens(searchValue);
  }, [searchValue]);

  const updateSearchTokens = async (_val) => {
    setsearchtoken(await get5AllowedTokens(searchValue));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchValue == "") {
      toast.error("Please input search box correctly.");
      return;
    }
    setSearchValue("");
    setsearchfocus(false);
    navigate(`/search/${searchValue}`);
  };

  const focusInput = async (e) => {
    setsearchfocus(true);
  };

  const blurInput = async (e) => {
    setTimeout(() => {
      setsearchfocus(false);
    }, 500);
  };

  const [searchWidth, setSearchWidth] = useState("0px");

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-start bg-[#1F2128]/10 dark:bg-[#1F2128] rounded py-2 px-2 sm:px-4 items-center w-max">
        <input
          onFocus={focusInput}
          onBlur={blurInput}
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

              navigate(`/search/${searchValue}`);
            }
          }}
        />
      </div>
      {searchfocus && (
        <div className="absolute bg-[whitesmoke] dark:bg-[#1F2128] py-2 px-2 sm:px-4 items-center max-w-[176px] sm:w-48 cursor-pointer">
          {searchtoken?.map((item, index) => (
            <a key={index} href={`/currencies/${item._id}`}>
              <div className="flex my-2 items-center gap-2">
                <img src={item.logo} width={25} height={25} />
                <p>{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </form>
  );
}

export default SearchInput;
