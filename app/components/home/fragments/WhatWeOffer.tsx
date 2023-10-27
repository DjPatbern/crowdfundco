import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Offer } from "@/app/stores/Data";

const WhatWeOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  });
  return (
    <div className="flex flex-col  px-[7.5rem] pb-[6.25rem] pt-[7.5rem]">
      <p className="text-[#1E1E1E] text-5xl text-center font-bold tracking-[0.024rem]">
        What we offer
      </p>

      <div className="grid grid-cols-3 grid-flow-row gap-10 pt-[4.5rem] ">
        {Offer?.map((eachOffer) => (
          <div
            key={eachOffer.id}
            className="bg-[#FEF0D0] rounded-lg offer-div flex p-8 flex-col items-start  gap-8"
            data-aos="flip-right"
          >
            <div className="flex flex-col items-start gap-12 self-stretch">
              <div className="flex items-start flex-col gap-5 self-stretch">
                <p className="text-[#1E1E1E] text-2xl font-semibold tracking-[0.012rem]">
                  {eachOffer?.name}
                </p>
                <p className="text-[#2E2E2E] tracking-[0.008rem]">
                  {eachOffer?.des}
                </p>
              </div>
              <div className="py-2 flex justify-center items-center gap-2">
                <p className="text-[#1E1E1E] tracking-[0.008rem]">See More</p>
                <Image
                  className=""
                  src="/images/seemore.png"
                  alt="See More"
                  width={24}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* </div> */}
    </div>
  );
};

export default WhatWeOffer;
