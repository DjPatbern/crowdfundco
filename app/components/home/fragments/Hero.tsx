import Link from "next/link";
import { Header } from "../../commons/Header";


export const Hero = () => {
  return (
    <>
    <div className="w-full  py-5 4xl:py-[2.5rem] 2xl:py-[1.5rem] lg:px-[7.5rem] px-4 4xl:px-[7.5rem] 2xl:px-[6.5rem] hero-div">
      <div className="mt-5 mb-[7.5rem]">
        
    <Header />
      </div>
    <div className="w-full flex justify-start items-center">

      <div className="flex flex-col gap-8 items-start justify-center">
        <div className="flex flex-col gap-4 self-stretch">
          <p className="text-custom-white  text-4xl md:text-6xl font-bold tracking-[0.032rem]">
            Phone and Laptop <br /> purchase made easy
          </p>
          <p className="text-custom-white text-lg font-medium tracking-[0.009rem]">
            Get access to phones and laptops your from the comfort of your home <br /> and office.
          </p>
        </div>
        <Link href="https://wa.link/hxcemc" target="_blank"  className="bg-[#FBC23A] flex py-5 px-10 justify-center items-center rounded-lg">
          <p className="text-custom-black text-xl font-semibold tracking-[0.01rem]">
            Get Started
          </p>
        </Link>
      </div>
    </div>
    </div>
    </>
  );
};
