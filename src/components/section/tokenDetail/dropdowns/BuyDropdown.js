import React from "react";
import Dropdown from "../../../common/dropdown/Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function BuyDropdown() {
  return (
    <div>
      <Dropdown
        Header={
          <p className="itemBg1 px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium flex justify-center items-center gap-2 w-full shadow cursor-pointer">
            Buy
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

export default BuyDropdown;
