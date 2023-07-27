import React, { useState } from "react";
import Wrapper from "./Wrapper";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSlideChange = (index) => {
    setSliderIndex(index);
  };

  return (
    <div className="grid grid-row sm:grid-cols-2 relative mb-[3rem]  sm:mb-[4.5rem]">
      <div className="flex justify-center items-center p-4">
        <Wrapper>
          <h4 className="text-customGreen font-semibold">SCHEDULE A MEETING</h4>
          <h2 className="text-2xl text-customTitleGreen font-bold mb-8 uppercase">
            COSMETIC <br /> DESTISTRY
          </h2>
          <p className="text-customDarkGreen text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. nam.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. nam.
          </p>
        </Wrapper>
      </div>
      <div>
        <div className=" text-white text-[20px] w-full max-w-[1360px] mx-auto overflow-auto sm:overflow-hidden">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={true}
            selectedItem={sliderIndex}
            onChange={handleSlideChange}
            renderArrowPrev={(clickHandler, hasPrev) => (
              <div
                onClick={hasPrev ? clickHandler : null}
                className={`absolute left-[32px] md:right-[51px] bottom-[-40px] sm:bottom-[-55px] w-[30px] md:w-[45px] h-[30px] md:h-[45px] border border-slate-600 rounded-full z-10 flex items-center justify-center cursor-pointer ${
                  !hasPrev ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
                </svg>
              </div>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
              <div
                onClick={hasNext ? clickHandler : null}
                className={`absolute left-[75px] sm:left-[90px] bottom-[-40px] sm:bottom-[-55px] w-[30px] md:w-[45px] h-[30px] md:h-[45px] border border-slate-600 rounded-full z-10 flex items-center justify-center cursor-pointer ${
                  !hasNext ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </div>
            )}
          >
            <div>
              <img
                src="/dentalDetail.jpg"
                className="aspect-[16/10] md:aspect-auto object-cover"
              />
            </div>
            <div>
              <img
                src="/dentalDetail.jpg"
                className="aspect-[16/10] md:aspect-auto object-cover"
              />
            </div>
            <div>
              <img
                src="/dentalDetail.jpg"
                className="aspect-[16/10] md:aspect-auto object-cover"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
