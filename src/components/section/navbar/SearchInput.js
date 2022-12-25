import React, { useState } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="hidden sm:flex justify-start gap-2 bg-[#1F2128] rounded-full py-2 px-4 items-center">
      <input
        type={"text"}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-transparent outline-none text-white/40"
        placeholder="Search"
      />
      <img src="/img/search.png" alt="" className="h-4 cursor-pointer" />
    </div>
  );
}

export default SearchInput;
