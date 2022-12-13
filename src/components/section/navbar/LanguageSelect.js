import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelect() {
  const [language, setSelLang] = useState("US");
  const [showFlag, setShowFlag] = useState("none");

  const { i18n } = useTranslation();

  const setSelLanguage = (lg) => {
    setSelLang(`${lg}`);
    i18n.changeLanguage(`${lg}`);
    setShowFlag("none");
  };

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
          <p className="text-fourth">
            {language === "US" && "English"}
            {language === "JP" && "Japanese"}
          </p>
          <img src="/img/down_arrow.png" alt="" className="w-3 mt-1" />
        </div>

        <div
          id="myDropdown"
          className="absolute top-8 left-0 rounded-lg text-black  shadow-md text-left bg-white py-3 px-2 w-max cursor-pointer"
          style={{ display: showFlag }}
        >
          <div
            onClick={() => setSelLanguage("US")}
            className="flex items-center gap-1"
          >
            <img
              src={
                "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
              }
              alt=""
              width={"20"}
            />
            <p>US</p>
          </div>
          <div
            onClick={() => setSelLanguage("JP")}
            className="flex items-center gap-1 mt-2"
          >
            <img
              src={
                "http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"
              }
              alt=""
              width={"20"}
            />
            <p>JP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelect;
