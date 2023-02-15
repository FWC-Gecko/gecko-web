import React from "react";
import { Link } from "react-router-dom";

export default function Menus() {
  const menus = [
    { title: "Cryptocurrencies", link: "/" },
    { title: "Exchanges", link: "/exchanges" },
    { title: "Community", link: "" },
  ];

  return (
    <div className=" lg:flex text-color2 dark:text-white text-lg text-center items-center gap-6">
      {menus.map((row, key) => {
        return (
          <Link to={row.link} key={key}>
            <p>{row.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
