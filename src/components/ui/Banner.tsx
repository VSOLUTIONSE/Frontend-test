import Image from "next/image";
import React from "react";
import { PopUpLayout } from "./PopUpLayout";

const Banner = () => {
  return (
    <div className="z-30   ">
      <div className="relative h-[506px] sm:h-[320px] sm:w-[253px]  w-[397px]">
        <Image
          src={"/img/home/meal-banner.png"}
          alt="meal-banner"
          fill
          className="relative w-full h-auto "
        />
      </div>
      <div className="absolute sm:top-[65%] md:top-[25%]  right-6">
        <PopUpLayout hori={false}>
          <div className="w-5 flex items-center h-5 text-[9px] text-center mt-[4.37px]  rounded-full bg-[#77441E]">
            <span className="ml-1">💵</span>
          </div>

          <p className="text-[9.28px] sm:text-[5.98px] tracking-[0.19px]">
            You can buy all for <span className="text-[#01FFC2]">N2,500</span>
            at Yaba
          </p>
        </PopUpLayout>
      </div>
      <div className="absolute top-[53%] sm:top-[73%] text-white md:left-[46%] sm:left-2   flex flex-col gap-y-[15px] sm:gap-y-[5.75px] items-center justify-center">
        <div className="mr-[100px]">
          <PopUpLayout hori>
            <div className="w-5 flex items-center justify-center h-5 text-[9px] text-center mt-[3px] rounded-full bg-[#1E735E]">
              <span>👍🏽</span>
            </div>

            <p className="text-[9.28px] sm:text-[5.98px] tracking-[0.19px]">
              Picked by 314 people today
            </p>
          </PopUpLayout>
        </div>
        <div className="md:ml-[30px] sm:mr-[30px]">
          <PopUpLayout hori>
            <div className="w-5 flex items-center justify-center h-5 text-[9px] text-center mt-[3px] rounded-full bg-[#1E735E]">
              <span>🧅</span>
            </div>

            <p className="text-[9.28px] tracking-[0.19px]">Exclude onions.</p>
          </PopUpLayout>
        </div>

        <div className="md:ml-[110px] sm:ml-[50px] ">
          <PopUpLayout hori>
            <div className="w-5 flex items-center justify-center h-5 text-[9px] text-center mt-[3px] rounded-full bg-[#1E735E]">
              <span>🥩</span>
            </div>

            <p className="text-[9.28px]  tracking-[0.19px]">
              Must include turkey
            </p>
          </PopUpLayout>
        </div>
      </div>
    </div>
  );
};

export default Banner;
