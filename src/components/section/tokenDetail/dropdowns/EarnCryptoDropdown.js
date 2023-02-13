import React from "react";
import Dropdown from "../../../common/dropdown/Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function EarnCryptoDropdown() {
  return (
    <div>
      <Dropdown
        Header={
          <p className="itemBg1 px-4 py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full shadow mt-3 sm:mt-0 cursor-pointer whitespace-nowrap">
            Earn Crypto
            <KeyboardArrowDownIcon style={{ fontSize: "14px" }} />
          </p>
        }
        items={[
          {
            content: (
              <p className="cursor-pointer text-sm text-center">
                https://paasdfkawue.com
              </p>
            ),
          },
        ]}
      />
    </div>
  );
}

export default EarnCryptoDropdown;
