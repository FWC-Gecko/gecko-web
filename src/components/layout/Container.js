import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Container = ({
  isHeader = true,
  isNavbar = true,
  isFooter = true,
  Component,
  children,
}) => {
  return (
    <>
      <div className="flex flex-col-reverse sm:block">
        {isHeader && <Header />}
        {isNavbar && <Navbar />}
      </div>
      {Component && <Component />}
      {children}
      {isFooter && <Footer />}
    </>
  );
};

export default Container;
