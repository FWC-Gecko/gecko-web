import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function PriceSelect() {
  const { i18n } = useTranslation();

  const types = [
    { text: "USD", slug: "usd" },
    { text: "EUR", slug: "usd" },
    { text: "INR", slug: "usd" },
    { text: "GBP", slug: "usd" },
  ];

  const [type, setType] = useState(types[0]);
  const [showFlag, setShowFlag] = useState("none");

  const toggleFlagDropDown = () => {
    if (showFlag === "none") {
      setShowFlag("block");
    } else {
      setShowFlag("none");
    }
  };

  return (
    <div>
      <div className="w-max relative">
        <div
          onClick={toggleFlagDropDown}
          className=" flex items-center gap-2 cursor-pointer"
        >
          <p className="text-fourth">{type.text}</p>
          <img src="/img/down_arrow.png" alt="" className="w-3 mt-1" />
        </div>

        <div
          id="myDropdown"
          className="absolute top-8 left-0 rounded-lg text-black  shadow-md text-left bg-white py-3 px-2 w-max cursor-pointer"
          style={{ display: showFlag }}
        >
          {types.map((row, key) => {
            return (
              <div className="" key={key} onClick={() => setType(row)}>
                <p>{row.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PriceSelect;
