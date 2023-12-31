import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Partners = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  });
  return (
    <div className="  w-full flex flex-col gap-10 items-center bg-[#F4F4F4]  py-10 md:py-10 md:px-[7.5rem] px-4  4xl:px-[7.5rem] 2xl:px-[6.5rem] 4xl:py-[6.75rem] 2xl:py-[5.75rem]">
      <p className="text-[#191919] text-center text-2xl font-medium tracking-[0.012rem]">
        Brands we mostly sell
      </p>
      <div className="md:flex items-center justify-center gap-20">
        <Image
          width={117}
          height={117}
          data-aos="fade-up"
          className=" md:mb-0 mb-7 md:m-0 m-auto"
          src="/images/apple.png"
          alt="fcmb logo"
        />
        <Image
          width={396}
          height={58}
          data-aos="zoom-in-down"
          className=" md:mb-0 mb-7 md:m-0 m-auto"
          src="/images/samsung.png"
          alt="path logo"
        />
        <Image
          width={117}
          height={74}
          data-aos="fade-down"
          className=" md:mb-0 mb-7 md:m-0 m-auto"
          src="/images/hp.png"
          alt="fccpc logo"
        />
      </div>
    </div>
  );
};

export default Partners;
