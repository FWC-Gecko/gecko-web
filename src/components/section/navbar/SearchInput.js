import React, { useState } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex justify-start gap-2 bg-[#313843] rounded-md py-2 px-3">
      <img src="/img/search.png" alt="" />
      <input
        type={"text"}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-transparent outline-none text-white/40"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchInput;
