import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image"; // 2. adım: next/image modülünü import et

const BeforeAfter = () => {
  return (
    <div className="bg-customDarkGreen w-full h-[1650px] sm:h-[750px] p-12">
      <Wrapper>
        <div className="flex flex-col mx-0 sm:mx-4 justify-center items-center mb-10">
          <h4 className="text-customGreen font-semibold">
            HANDS OF PERFECTION
          </h4>
          <h2 className="text-2xl text-white font-semibold mb-8">
            BEFORE & AFTER
          </h2>
          <p className="text-white text-sm w-80 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            nam.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
            <div>
              <span className="bg-customGreen px-2 py-1 text-xs font-semibold">
                DENTISTRY
              </span>
              <h4 className="my-2 text-white uppercase text-xl">
                HAIR TRANSPLANT
              </h4>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Optio, neque.
              </p>
              <div className="my-4">
                <h5 className="uppercase text-customGreen text-sm my-2">
                  NAME, SURNAME
                </h5>
                <p className="uppercase text-white text-sm">Uğur A.</p>
              </div>
              <div className="my-4">
                <h5 className="uppercase text-customGreen text-sm my-2">
                  Operations
                </h5>
                <p className="uppercase text-white text-sm">
                  Hair Transplantation
                </p>
              </div>
              <div className="my-4">
                <h5 className="uppercase text-customGreen text-sm my-2">
                  date
                </h5>
                <p className="uppercase text-white text-sm">20.02.2022</p>
              </div>
              <div className="my-4">
                <h5 className="uppercase text-customGreen text-sm my-2">
                  country
                </h5>
                <p className="uppercase text-white text-sm">Germany</p>
              </div>
              <div className="my-4">
                <h5 className="uppercase text-customGreen text-sm my-2">Age</h5>
                <p className="uppercase text-white text-sm">30</p>
              </div>
              <a
                href="/"
                className="border border-1 border-customGreen text-customGreen w-full sm:w-[100px] h-[35px] text-sm flex items-center justify-center uppercase mb-4"
              >
                Next
              </a>
            </div>
            <div>
              <div className="grid grid-col h-full gap-y-2 mb-4">
                {/* 3. adım: NextImage ile resimleri ekleyin */}
                <Image
                  src="/before.png"
                  alt="Before Image"
                  width={350}
                  height={280}
                  className="h-[280px] w-full object-cover"
                />
                <div className="grid grid-cols-2 gap-x-2">
                  <Image
                    src="/before.png"
                    alt="Before Image"
                    width={350}
                    height={200}
                  />
                  <Image
                    src="/before.png"
                    alt="Before Image"
                    width={350}
                    height={200}
                  />
                </div>
              </div>
              <div></div>
            </div>
            <div>
              <div className="grid grid-col h-full gap-y-2 opacity-40">
                {/* 3. adım: NextImage ile resimleri ekleyin */}
                <Image
                  src="/before.png"
                  alt="Before Image"
                  width={350}
                  height={280}
                  className="h-[280px] w-full object-cover"
                />
                <div className="grid grid-cols-2 gap-x-2">
                  <Image
                    src="/before.png"
                    alt="Before Image"
                    width={350}
                    height={200}
                  />
                  <Image
                    src="/before.png"
                    alt="Before Image"
                    width={350}
                    height={200}
                  />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BeforeAfter;
