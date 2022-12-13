import React, { useEffect } from "react";

import Title from "./../components/common/title/Title";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="">
        <Title
          title={t(
            "Today's Cryptocurrency Prices by Football World Communityt"
          )}
          subTitle={
            <p className="text-white text-md text-center">
              The total crypto market volume over the last 24 hours is{" "}
              <span className="text-[#FF808A]"> $31.40B</span>, which makes a
              <span className="text-[#FF808A]">29.97%</span> increase. The total
              volume in DeFi is currently{" "}
              <span className="text-[#FF808A]">$2.13B</span> ,{" "}
              <span className="text-[#FF808A]">6.78%</span> of the total crypto
              market <span className="text-[#FF808A]">24-hour</span> volume.
            </p>
          }
        />
      </div>
    </>
  );
};

export default Home;
