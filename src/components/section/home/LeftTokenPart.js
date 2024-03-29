import React from "react";
import Slider from "react-slick";
import NewTokens from "./NewTokens";
import TrendingTokens from "./TrendingTokens";

function LeftTokenPart() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: (dots) => {
    //   return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={40} />;
    // },
    prevNextDotClassName: "hiddenArrow",
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="TredingTokenBG text-white p-2 lg:p-8">
      <div className="rounded-[18px] lg:dark:bg-gradient-to-r to-[#BA4DF9]/0 from-[#BA4DF9] p-[1px]">
        <div className="bg-[#F6F6F6] dark:bg-[#21232C] rounded-[18px] p-2 md:p-5 pb-8 pt-6 md:pt-8">
          <Slider {...settings} prevNextDotClassName="hidden">
            <NewTokens />
            <TrendingTokens />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LeftTokenPart;
