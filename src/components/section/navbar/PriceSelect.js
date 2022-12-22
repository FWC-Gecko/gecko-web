import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { fiats } from "../../../constants";

function PriceSelect() {
  const { i18n } = useTranslation();

  const [type, setType] = useState(fiats[0]);
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
        <Menu>
          <MenuHandler>
            <div className=" flex items-center gap-2 cursor-pointer">
              <p className="text-fourth">{type.text}</p>
              <img src="/img/down_arrow.png" alt="" className="w-3 mt-1" />
            </div>
          </MenuHandler>
          <MenuList className="w-max bg-[#101115] border-white/5 border p-0">
            {fiats.map((row, key) => {
              return (
                <MenuItem
                  className="hover:bg-white/10 flex justify-start items-center p-2"
                  key={key}
                >
                  <div className="" onClick={() => setType(row)}>
                    <p className="text-white">{row.text}</p>
                  </div>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default PriceSelect;
