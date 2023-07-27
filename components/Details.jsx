import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";

const Details = () => {
  return (
    <Wrapper className="py-6 my-8 sm:my-4">
      <div className="grid grid-rows-1 sm:grid-cols-2 sm:p-8">
        <div className="flex flex-col mx-0 sm:mx-4">
          <h4 className="text-customGreen font-semibold">
            HANDS OF PERFECTION
          </h4>
          <h2 className="text-2xl text-customTitleGreen font-semibold mb-8">
            Dedicated Healthcare <br /> You Deserve
          </h2>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            dolores.
          </p>
        </div>
        <div className="flex flex-col px-0 sm:px-4">
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            voluptate autem. Temporibus id, recusandae tempora quisquam ipsa
            praesentium amet quod.
          </p>
          <div className="flex flex-col sm:flex-row my-8 gap-x-4">
            <div className="flex flex-col gap-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-customGreen"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
              <h4 className="text-customGreen font-semibold">
                HAIR TRANSPLANT
              </h4>
              <p className="text-black text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
                exercitationem illum! Incidunt repellat voluptatum amet soluta
                obcaecati harum mollitia fugiat dignissimos id placeat quos est
                aperiam porro
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-customGreen"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
              <h4 className="text-customGreen font-semibold">
                HAIR TRANSPLANT
              </h4>
              <p className="text-xs text-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
                exercitationem illum! Incidunt repellat voluptatum amet soluta
                obcaecati harum mollitia fugiat dignissimos id placeat quos est
                aperiam porro, excepturi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <Image
          src="/dentalDetail.jpg"
          alt="Örnek Resim" 
          layout="fill"
          objectFit="cover" 
          objectPosition="center" 
        />
      </div>
    </Wrapper>
  );
};

export default Details;
