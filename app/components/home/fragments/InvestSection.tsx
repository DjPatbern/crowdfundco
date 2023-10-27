import Image from "next/image";
import React from "react";

const InvestSection = () => {
  return (
    <div className="  w-full flex flex-col gap-10 items-center bg-[#F4F4F4]  py-10 md:pt-[6.25rem] md:pb-20 md:px-[7.5rem] px-4  4xl:px-[7.5rem] 2xl:px-[6.5rem] 4xl:py-[6.75rem] 2xl:py-[5.75rem]">
      <div className="md:flex justify-between items-center gap-14">
        <Image
          width={510}
          height={496}
          data-aos="zoom-in"
          className=" md:mb-0 mb-7 md:m-0 m-auto rounded-lg"
          src="/images/padlock.png"
          alt="Invest"
        />
        <div className="flex flex-col items-start gap-6 ">
          <p className="text-[#191919] md:text-5xl text-2xl font-bold">
            Invest the easy way with confidence
          </p>
          <p className="text-[#242424] text-xl md:text-2xl tracking-[0.03rem]">
            With CrowdfundCo, Investment procedures are easy - whether you just
            started or you are an experienced investor. We also offer a
            regulated environment where investments are transparent and
            protected
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestSection;
