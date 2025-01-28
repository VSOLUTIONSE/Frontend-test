import Image from "next/image";
import React from "react";

const HeroCards = () => {
  return (
    <div className="absolute bottom-0 touch-auto sm:-left-[9rem] md:-left-14 w-full  md:w-full">
      <div className="flex w-full gap-x-[13.93px] sm:gap-x-[5.73px]">
        <div className="md:min-w-[260.65px] sm:min-w-[110.61px] sm:max-h-[150px]  max-h-[289px]  mt-[107px] sm:mt-[34.5rem]  bg-white rounded-[13.85px] sm:rounded-[4.85px] shadow-lg ">
          <div className="bg-[#F4F3E8] py-[10.5px] mx-[7.5px] mt-[7.5px] flex items-center justify-center rounded-xl sm:rounded-[6px] md:h-[173.16px]">
            <div className="sm:w-[50px]">
              <Image
                src={`/img/home/kpomo.png`}
                alt=""
                className="w-full object-contain "
                width={100}
                height={110}
              />
            </div>
          </div>
          <div className="md:mt-[14.37px] md:mb-[37.56px] sm:pb-[15.56px]  ml-[11.32px]">
            <h3 className="text-[13.85px] sm:text-[5.93px] sm:mt-[9px] md:leading-[18.47px] font-bold">
              Pasta, Green Sauce & Kpomo
            </h3>
            <p className=" bg-[#D6D5CA] sm:mb-[6.92px] mt-[4.62px] w-fit text-[6.93px] sm:text-[2.89px] p-[3.46px] rounded-[13.85px] uppercase tracking-[1.74px]">
              🍲 Continental
            </p>
            <p className="flex md:mt-[7px] gap-x-[6.93px] text-primary-ash items-center font-sans sm:text-[3.36px] text-[8.08px]">
              120picks{" "}
              <span className="bg-primary-ash rounded-full tracking-[0.1616px] w-[2.31px] font-normal leading-[10.39px] h-[2.31px]" />{" "}
              Approx. ₦3,000
            </p>
          </div>
        </div>
        <div className="md:min-w-[244.65px] sm:min-w-[110.61px] sm:max-h-[150px]  max-h-[289px]  mt-[107px] sm:mt-[34.5rem]  bg-white rounded-[13.85px] sm:rounded-[4.85px] shadow-lg ">
          <div className="bg-[#F4F3E8] py-[10.5px] mx-[7.5px] mt-[7.5px] flex items-center justify-center rounded-xl sm:rounded-[6px] md:h-[173.16px]">
            <div className="sm:w-[50px]">
              <Image
                src={`/img/home/egg-cooked.png`}
                alt=""
                className="w-full object-contain "
                width={100}
                height={110}
              />
            </div>
          </div>
          <div className="md:mt-[14.37px] md:mb-[37.56px] sm:pb-[15.56px]  ml-[11.32px]">
            <h3 className="text-[13.85px] sm:text-[5.93px] sm:mt-[9px] md:leading-[18.47px] font-bold">
              Pasta, Green Sauce & Kpomo
            </h3>
            <p className=" bg-[#D6D5CA] sm:mb-[6.92px] mt-[4.62px] w-fit text-[6.93px] sm:text-[2.89px] p-[3.46px] rounded-[13.85px] uppercase tracking-[1.74px]">
              🍲 Continental
            </p>
            <p className="flex gap-x-[6.93px] md:mt-[7px] text-primary-ash items-center font-sans sm:text-[3.36px] text-[8.08px]">
              120picks{" "}
              <span className="bg-primary-ash rounded-full tracking-[0.1616px] w-[2.31px] font-normal leading-[10.39px] h-[2.31px]" />{" "}
              Approx. ₦3,000
            </p>
          </div>
        </div>
        <div className="md:min-w-[244.65px] sm:min-w-[110.61px] sm:max-h-[150px]  max-h-[289px]  mt-[107px] sm:mt-[34.5rem]  bg-white rounded-[13.85px] sm:rounded-[4.85px] shadow-lg ">
          <div className="bg-[#F4F3E8] py-[10.5px] mx-[7.5px] mt-[7.5px] flex items-center justify-center rounded-xl sm:rounded-[6px] md:h-[173.16px]">
            <div className="sm:w-[50px]">
              <Image
                src={`/img/home/chicken.png`}
                alt=""
                className="w-full object-contain "
                width={100}
                height={110}
              />
            </div>
          </div>
          <div className="md:mt-[14.37px] md:mb-[37.56px] sm:pb-[15.56px]  ml-[11.32px]">
            <h3 className="text-[13.85px] sm:text-[5.93px] sm:mt-[9px] md:leading-[18.47px] font-bold">
              Pasta, Green Sauce & Kpomo
            </h3>
            <p className=" bg-[#D6D5CA] sm:mb-[6.92px] mt-[4.62px] w-fit text-[6.93px] sm:text-[2.89px] p-[3.46px] rounded-[13.85px] uppercase tracking-[1.74px]">
              🍲 Continental
            </p>
            <p className="flex gap-x-[6.93px] md:mt-[7px] text-primary-ash  items-center font-sans sm:text-[3.36px] text-[8.08px]">
              120picks{" "}
              <span className="bg-primary-ash rounded-full tracking-[0.1616px] w-[2.31px] font-normal leading-[10.39px] h-[2.31px]" />{" "}
              Approx. ₦3,000
            </p>
          </div>
        </div>
        <Image
          src="/img/home/mobile.png"
          alt=""
          width={255}
          height={300}
          // sizes="(max-width: 768px) 200px"
          className="object-contain sm:w-[120px] sm:mt-[32rem] relative "
        />
        <div className="md:min-w-[244.65px] sm:min-w-[110.61px] sm:max-h-[150px]  max-h-[289px]  mt-[107px] sm:mt-[34.5rem]  bg-white rounded-[13.85px] sm:rounded-[4.85px] shadow-lg ">
          <div className="bg-[#F4F3E8] py-[10.5px] mx-[7.5px] mt-[7.5px] flex items-center justify-center rounded-xl sm:rounded-[6px] md:h-[173.16px]">
            <div className="sm:w-[50px]">
              <Image
                src={`/img/home/egg-cooked.png`}
                alt=""
                className="w-full object-contain "
                width={100}
                height={110}
              />
            </div>
          </div>
          <div className="md:mt-[14.37px] md:mb-[37.56px] sm:pb-[15.56px]  ml-[11.32px]">
            <h3 className="text-[13.85px] sm:text-[5.93px] sm:mt-[9px] md:leading-[18.47px] font-bold">
              Pasta, Green Sauce & Kpomo
            </h3>
            <p className=" bg-[#D6D5CA] sm:mb-[6.92px] mt-[4.62px] w-fit text-[6.93px] sm:text-[2.89px] p-[3.46px] rounded-[13.85px] uppercase tracking-[1.74px]">
              🍲 Continental
            </p>
            <p className="flex gap-x-[6.93px] md:mt-[7px] text-primary-ash items-center font-sans sm:text-[3.36px] text-[8.08px]">
              120picks{" "}
              <span className="bg-primary-ash rounded-full tracking-[0.1616px] w-[2.31px] font-normal leading-[10.39px] h-[2.31px]" />{" "}
              Approx. ₦3,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
