"use client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="flex justify-between items-center  w-full py-5 4xl:py-[2.5rem] 2xl:py-[1.5rem] lg:px-[7.5rem] lg:py-8 px-4 4xl:px-[7.5rem] 2xl:px-[6.5rem]">
            <div>
                <Link href="/" className="flex items-start md:w-[240px] md:h-[36] w-[150px]">
                    <Image
                        width={240}
                        height={36}
                        className=""
                        src="/images/logo.png"
                        alt="Crowd Fund"
                    />
                </Link>

                <p>CrowdfundCo is a dynamic online pltform that brings together a community of investors and project owners for the purpose of crowdfundung.</p>
         <div><Image/> <div><p>Email</p><p>contact@crowdfundco.com</p></div></div>
         <div><Image/> <div><p>Call Us</p><p>+234 (70) 404 064 46</p></div></div>
            </div>
            <div className=" flex flex-col gap-2">
                <p>Pages</p>
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
            <div className=" flex flex-col gap-6">
                <p>Utility</p>
                <div className=" flex flex-col gap-6">
                <Link href="/" className="flex p-2 justify-center items-center gap-1">
                    <p className="text-[#222] tracking-[0.008rem]">Privacy Policy</p>
                </Link>
                <Link href="/" className="flex p-2 justify-center items-center gap-1">
                    <p className="text-[#222] tracking-[0.008rem]">Terms of Use</p>
                </Link>
                <Link href="/" className="flex p-2 justify-center items-center gap-1">
                    <p className="text-[#222] tracking-[0.008rem]">Legal</p>
                </Link>
                <Link href="/" className="flex p-2 justify-center items-center gap-1">
                    <p className="text-[#222] tracking-[0.008rem]">Media Center</p>
                </Link>
                <Link href="/" className="flex p-2 justify-center items-center gap-1">
                    <p className="text-[#222] tracking-[0.008rem]">Careers</p>
                </Link>
                <Link href="/" className="flex p-2 justify-center items-center gap-1">
                    <p className="text-[#222] tracking-[0.008rem]">Affiliate Programs</p>
                </Link>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-4">
                <Link href="/">
                    <p className="  text-[#222] tracking-[0.008rem]">Subscribe</p>
                </Link>
                <div>
                    <p>Social links</p>
                </div>
            </div>
        </div>
    );
};
