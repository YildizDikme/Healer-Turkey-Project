
import React from "react";
import Form from "./Form";


const HeroBanner = () => {
  return (
    <>
      <img src="/heroBanner.jpeg" className="heroBanner-img" />
      <div className="heroBanner">
        <div className="heroBanner-text mx-5 mt-20 sm:ml-20 z-20 relative grid gap-y-4">
          <h1 className="text-customGreen font-bold text-2xl sm:text-5xl shadow-black">
            Hair Transplantation <br /> with Healer Turkey
          </h1>
          <div className="w-full sm:w-2/5 text-white text-xs sm:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Error nesciunt sint eaque non perspiciatis quo sed esse autem rem
              libero!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              nisi sit iusto quasi, at expedita!
            </p>
          </div>
          <div className="flex gap-x-2">
            <a
              href="/"
              className="bg-customGreen w-full sm:w-[120px] h-[40px] text-sm flex items-center justify-center uppercase text-black"
            >
              Whatsaap
            </a>
            <a
              href="/"
              className="border border-1 border-customGreen text-customGreen w-full sm:w-[100px] h-[40px] text-sm flex items-center justify-center uppercase"
            >
              Form
            </a>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export default HeroBanner;
