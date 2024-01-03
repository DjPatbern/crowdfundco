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
          src="/images/about.PNG"
          alt="Invest"
        />
        <div className="flex flex-col items-start gap-6 ">
          <p className="text-[#191919] md:text-5xl text-2xl font-bold">
           Our Basic Services we offer include
          </p>
          <p className="text-[#242424] text-xl md:text-2xl tracking-[0.03rem]">
          ✔ We offer photocopying services.<br />
            ✔ We do NIMC registration.<br />
            ✔ We do graphic designs and instant passport.<br />
            ✔ We do import and export services.<br />
            ✔ We do online registrations of all kinds.<br />
            ✔ We print plastic ID Cards.<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestSection;
