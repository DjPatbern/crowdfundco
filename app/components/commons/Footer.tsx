import Image from 'next/image';
import Link from 'next/link';
import { HiMailOpen } from "react-icons/hi";
import { MdAddIcCall } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E0C2B] text-custom-white  py-5 4xl:py-[2.5rem] 2xl:py-[1.5rem] lg:px-[7.5rem] lg:pt-[4.5rem] px-4 4xl:px-[7.5rem] 2xl:px-[6.5rem]">
        <div className="lg:flex justify-between items-start lg:gap-0 sm:gap-14 gap-[181.5px] border-b border-ts-white pb-8">
          <div className="flex justify-center flex-col items-center md:items-start gap-5 ">
            <Link href="/">
              <Image
                src="/images/logoo.PNG"
                alt="Vines"
                width={183}
                height={48}
                priority
              />
            </Link>
            <div>
            <div className='flex flex-col gap-3 items-center md:items-start'>
          <p className='flex gap-2 items-center'><HiLocationMarker /> <span className='text-center md:text-left'>NO 6, Mustapha Ojora<br /> 
          Mobile Road, Ilepo Stop. Shop NO 3. Lagos</span></p>
            <p className='flex gap-2 items-center'><HiMailOpen /> <span>pcfidomain@gmail.com</span></p> 
         <p className='flex gap-2 items-center'><MdAddIcCall /> <span>+243-708-978-7675, +243-913-000-816</span></p>
            </div>
            </div>
          </div>

          <div className="flex  mt-6 mb-10  items-center m-auto lg:m-0 justify-evenly w-28  gap-6 lg:gap-6 lg:w-52  2xl:gap-8">
            <Image
              className=" object-contain cursor-pointer h-[48px]  2xl:w-14 2xl:h-16 "
              src="/images/Frame29723.svg"
              alt="Vines"
              width={40}
              height={48}
              priority
            />
            <Image
              className=" object-contain cursor-pointer h-[48px]  2xl:w-14 2xl:h-16 "
              src="/images/insta.svg"
              alt="Vines"
              width={40}
              height={48}
              priority
            />
            <Image
              className=" object-contain cursor-pointer h-[48px]  2xl:w-14 2xl:h-16 "
              src="/images/twitter.svg"
              alt="Vines"
              width={40}
              height={48}
              priority
            />
           
          </div>
          <div className="flex justify-center items-start">
            <Link href="https://wa.link/mv0g1e" target='_blank'>
              <Image
                src="/images/Whatsapporder.gif"
                alt="whatsapp"
                width={183}
                height={48}
                priority
              />
            </Link>
          </div>
        </div>
        <div className="  2xl:w-full md:w-full   sm-foot md:m-0 m-auto items-start md:flex justify-between pt-5 lg:text-left ">
          
          <div className="lg:text-lg  text-base m-auto lg:font-medium font-normal 2xl:w-full leading-8 tracking-[-0.252px]  2xl:text-[18px] 2xl:leading-[2rem]  md:text-left text-center">
          © 2024 Vines Computers & Phones
          </div>
         
        </div>
    </footer>
  );
};

export default Footer;