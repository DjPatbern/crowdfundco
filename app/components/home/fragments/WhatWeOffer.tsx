import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Offer } from "@/app/stores/Data";
import Link from "next/link";

const WhatWeOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  });
  return (
    <div className="flex flex-col  md:px-[7.5rem] px-4 pb-[6.25rem] pt-[7.5rem]">
      <p className="text-[#1E1E1E] md:text-5xl text-2xl text-center font-bold tracking-[0.024rem]">
        What we offer
      </p>

      <div className="md:grid grid-cols-3 grid-flow-row gap-10 pt-[4.5rem] ">
        {Offer?.map((eachOffer) => (
          <div
            key={eachOffer.id}
            className="bg-[#FEF0D0] rounded-lg offer-div flex p-8 flex-col items-start  gap-8 md:my-0 my-10"
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
              <Link href="https://wa.link/hxcemc" target="_blank" className="py-2 flex justify-center items-center gap-2">
                <p className="text-[#1E1E1E] tracking-[0.008rem]">Reach Us</p>
                <Image
                  className=""
                  src="/images/seemore.png"
                  alt="See More"
                  width={24}
                  height={24}
                  priority
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* </div> */}
    </div>
  );
};

export default WhatWeOffer;
