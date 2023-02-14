import React from "react";
import MagicSliderDots from "react-magic-slider-dots";
import Slider from "react-slick";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";

function RightTokenPart(props) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={40} />;
    },
    prevNextDotClassName: "hiddenArrow",
  };

  return (
    <div className="NewTokenBG text-white p-8 pb-12">
      <div className="rounded-[18px] dark:bg-gradient-to-r from-[#BA4DF9]/0 to-[#BA4DF9] p-[1px]">
        <div className="bg-[#F6F6F6] dark:bg-[#21232C] rounded-[18px] p-5 pb-8 pt-8">
          <Slider {...settings} prevNextDotClassName="hidden">
            <TopGainers />
            <TopLosers />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RightTokenPart;
