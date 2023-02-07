import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="hidden sm:flex justify-start gap-2 bg-[#1F2128]/10 dark:bg-[#1F2128] rounded-full py-2 px-4 items-center">
      <input
        type={"text"}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-transparent outline-none text-color2 dark:text-white/40"
        placeholder="Search"
      />
      <SearchIcon className="h-4 cursor-pointer text-[#101115] dark:text-white" />
    </div>
  );
}

export default SearchInput;
