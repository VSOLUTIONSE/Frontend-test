import React from "react";
import Icons from "../constants/Icons";

const MealCaption = () => {
  return (
    <div className="mx-auto flex  items-center  justify-center w-full sm:max-w-[305px]   md:max-w-[915px] md:mt-[198px] sm:mt-[64px] ">
      <div className="flex  mx-auto flex-col w-full items-center justify-center">
        <div className="flex items-center mb-[24px] text-[15px] font-[400px] leading-[24px] gap-x-[18px] justify-center">
          <Icons
            src="/img/home/svg/star-white.svg"
            alt=""
            className="w-[24px] h-[24px] "
          />
          <p className="text-center sm:text-[8px] tracking-[0.76px] uppercase">
            
            Join the chow africa waitlist{" "}
          </p>
          <Icons
            src="/img/home/svg/star-white.svg"
            alt=""
            className="w-[24px] h-[24px]"
          />
        </div>
        <div className="sm:hidden">
          <h1 className="text-[64px] leading-[72px] font-medium">
            tired of eating the
          </h1>
          <div className="rounded-[40px] flex font-sans text-white text-[40px] leading-[64px] items-center justify-center text-center h-[74px] bg-primary-orange max-w-[614px] border-4 border-black">
            <span>🍛 same dishes everyday? 🍝</span>
          </div>
        </div>
        <div className="w-full md:hidden z-10 ">
          <p className="text-[32px] sm:max-w-[297px]  text-center leading-[46px] font-medium">
            Are you tired of <br />
            eating the same dishes {" "}
             <span className="bg-primary-orange pt-[2px] pb-[4px] text-white text-[22px] px-[16px] rounded-[20px] border-2 border-black">
              everyday?
            </span>
          </p>
        </div>
        <p className="font-sans  font-medium mt-[18px] sm:text-[14px] md:w-[547px] text-[18px] text-center leading-[24px]">
          Do you crave new and exciting dishes? Look no further! Chow is the
          perfect solution for discovering your next dish.
        </p>
      </div>
    </div>
  );
};

export default MealCaption;
