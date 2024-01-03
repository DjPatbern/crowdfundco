'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaqsData } from '@/app/stores/Data';

interface FaqsGuide {
  id: number;
  question: string;
  answer: string;
  show: boolean;
}

const Faqs = () => {
  const [faqs, setFaqs] = useState<FaqsGuide[]>(FaqsData);

  const toggleFaq = (id: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((eachFaqs) =>
        eachFaqs.id === id ? { ...eachFaqs, show: !eachFaqs.show } : eachFaqs
      )
    );
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-7xl  m-auto py-12 md:py-16 lg:px-20 2xl:px-0 4xl:py-24 2xl:py-20 px-4">
        <h1 className="text-center md:font-bold font-semibold text-[23px] md:text-[30px] mb-10  2xl:text-[30px] 4xl:mb-[4.5rem] 2xl:mb-[3.8rem]">
          Frequently Asked Questions
        </h1>
        <div className="font-medium md:font-semibold gap-6 text-sm md:text-base flex flex-wrap w-full">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`${
                !faq.show && 'h-full'
              } bg-custom-ash rounded-xl py-4 md:py-5 px-5 md:px-6 4xl:py-[1.9rem] 2xl:py-7 4xl:px-9 2xl:px-8 w-full md:max-w-[47%]`}
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <p className="md:text-lg text-base font-medium leading-[27px] md:leading-8 tracking-[-0.176px] md:tracking-[-0.252]  2xl:text-[18px] 2xl:leading-[2rem] ">
                  {faq.question}
                </p>
                <Image
                  className='object-contain'
                  src={`/images/${!faq.show ? "arrow-left.png" : "down1.png"}`}
                  alt="arrow"
                  priority
                  width={20}
                  height={20}
                />
              </div>
              {faq.show && (
                <p className=" py-2 leading-[29px] 4xl:text-[1.5rem] 2xl:text-xl  2xl:leading-10">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;