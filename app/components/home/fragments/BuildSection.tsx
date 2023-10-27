import Image from "next/image";
import React from "react";

const BuildSection = () => {
  return (
    <div className="  w-full flex flex-col gap-10 items-center bg-[#5B2581]  py-10 md:pt-[6.25rem] md:pb-20 md:px-[7.5rem] px-4  4xl:px-[7.5rem] 2xl:px-[6.5rem] 4xl:py-[6.75rem] 2xl:py-[5.75rem]">
      <div className="md:flex justify-between items-center gap-14">
        <div className="flex flex-col items-start gap-6 text-custom-white">
          <p className=" md:text-5xl text-2xl font-bold">Build long term wealth.</p>
          <p className=" md:text-2xl text-xl tracking-[0.03rem]">
            Explore our range of investment options, educational resources, and
            expert guidance to set yourself on the path to long-term financial
            success. Your financial future begins today.
          </p>
        </div>
        <Image
          width={510}
          height={496}
          data-aos="zoom-in"
          className=" md:mt-0 mt-7 md:m-0 m-auto rounded-lg"
          src="/images/timecage.png"
          alt="Invest"
        />
      </div>
    </div>
  );
};

export default BuildSection;
