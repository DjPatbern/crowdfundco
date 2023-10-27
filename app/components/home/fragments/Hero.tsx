

export const Hero = () => {
  return (
    <div className="w-full flex justify-start items-center py-5 4xl:py-[2.5rem] 2xl:py-[1.5rem] lg:p-[7.5rem] px-4 4xl:px-[7.5rem] 2xl:px-[6.5rem] hero-div">
      <div className="flex flex-col gap-8 items-start justify-center">
        <div className="flex flex-col gap-4 self-stretch">
          <p className="text-[#191919]  text-4xl md:text-6xl font-bold tracking-[0.032rem]">
            Loans and Financial <br /> Investments made easy
          </p>
          <p className="text-[#191919] text-lg font-medium tracking-[0.009rem]">
            Get access to loans or grow your money through unique mix of
            opportunities <br /> and assets.
          </p>
        </div>
        <button className="bg-[#FBC23A] flex py-5 px-10 justify-center items-center rounded-lg">
          <p className="text-[#191919] text-xl font-semibold tracking-[0.01rem]">
            Get Started
          </p>
        </button>
      </div>
    </div>
  );
};
