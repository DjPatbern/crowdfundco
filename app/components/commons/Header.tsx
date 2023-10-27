"use client";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center  w-full py-5 4xl:py-[2.5rem] 2xl:py-[1.5rem] lg:px-[7.5rem] lg:py-8 px-4 4xl:px-[7.5rem] 2xl:px-[6.5rem]">
      <div>
        <Link href="/" className="flex items-start">
          <Image
            width={240}
            height={36}
            className=""
            src="/images/logo.png"
            alt="Crowd Fund"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/" className="flex p-2 justify-center items-center gap-1">
          <p className="text-[#222] tracking-[0.008rem]">About us</p>
        </Link>
        <Link href="/" className="flex p-2 justify-center items-center gap-1">
          <p className="text-[#222] tracking-[0.008rem]">Loans</p>
        </Link>
        <Link href="/" className="flex p-2 justify-center items-center gap-1">
          <p className="text-[#222] tracking-[0.008rem]">Real Estates</p>
        </Link>
        <Link href="/" className="flex p-2 justify-center items-center gap-1">
          <p className="text-[#222] tracking-[0.008rem]">Other Ventures</p>
        </Link>
        <Link href="/" className="flex p-2 justify-center items-center gap-1">
          <p className="text-[#222] tracking-[0.008rem]">Security</p>
        </Link>
        <Link href="/" className="flex p-2 justify-center items-center gap-1">
          <p className="text-[#222] tracking-[0.008rem]">Support</p>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-4">
        <Link href="/">
          <p className="  text-[#222] tracking-[0.008rem]">Login</p>
        </Link>
        <div>
          <button className="gap-1 flex  py-[2px] md:py-5 px-[10px] md:px-10  2xl:px-12 2xl:py-3 md:text-lg md:flex items-center justify-center 2xl:gap-6  2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem]  bg-[#FBC23A] rounded-lg">
            <p className="text-[#191919] font-semibold tracking-[0.008rem]">
              Sign Up
            </p>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
