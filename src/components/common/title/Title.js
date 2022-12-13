import React from "react";

import "./Title.css";

const Title = ({ title, subTitle, isBlock }) => {
  return (
    <>
      <div className={`bg-primaryGray`}>
        <div className={`title bg-primaryDark dark:bg-gray-100`}>
          <div className="n-container">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-white pt-10 ">
              {title}
            </h1>
            {subTitle && (
              <div className="max-w-[80%] m-auto pt-3 sm:pt-5">{subTitle}</div>
            )}
            <div className="flex justify-center gap-2 pb-14 pt-6">
              <div className="w-24 bg-primaryPink h-2 rounded-full"></div>
              <div className="w-8 bg-primaryPink h-2 rounded-full"></div>
              <div className="w-2 bg-primaryPink h-2 rounded-full"></div>
            </div>
            {isBlock && <div className="h-[100px]"></div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
