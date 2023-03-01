import React from "react";

function Select({ items }) {
  return (
    <select className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full outline-none py-2 px-2 rounded-md mt-2">
      <option>-</option>
      {items.map((row, key) => {
        return <option value={row.no}>{row.text}</option>;
      })}
    </select>
  );
}

export default Select;
