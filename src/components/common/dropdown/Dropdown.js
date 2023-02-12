import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Dropdown({ Header, items }) {
  return (
    <Menu>
      <MenuHandler>{Header}</MenuHandler>
      <MenuList className=" grayGradientBg1 border-white/5 border p-2">
        {items.map((row, key) => {
          return (
            <MenuItem
              key={key}
              className="hover:bg-white/10 flex justify-center items-center p-2"
            >
              <Link to="/user/profile" className="">
                <p className="cursor-pointer text-sm text-center">{row.item}</p>
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default Dropdown;
