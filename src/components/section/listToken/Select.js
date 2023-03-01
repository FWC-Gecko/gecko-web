import React from "react";

function Select({ label, items, description, setItem }) {
  return (
    <>
      <p>{label}</p>
      <select
        className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full outline-none py-2 px-2 rounded-md mt-2"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      >
        <option>-</option>
        {items.map((row, key) => {
          return <option value={row.no}>{row.text}</option>;
        })}
      </select>
      <p className="mt-2 text-[0.75rem]">{description}</p>
    </>
  );
}

export default Select;
