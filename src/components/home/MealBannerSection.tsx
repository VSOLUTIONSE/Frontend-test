import React from "react";
import FoodGridGradient from "../ui/FoodGridGradient";
import Banner from "../ui/Banner";
import Image from "next/image";

const MealBannerSection = () => {
  return (
    <div className="bg-[#FFF8F2] rounded-[14px] mt-[100px]  m:mr-[103px] overflow-hidden     mx-auto">
      <div className="flex sm:flex-col items-center relative justify-center gap-x-[45px] md:pr-[132px]  pt-[32px] pb-[23px]">
        <Image
          src="/img/home/svg/and.svg"
          className="absolute z-10 -left-7 top-[54.4px]"
          alt="meal-banner"
          width={200}
          height={65}
        />
        <FoodGridGradient />
        <Banner />
        <Image
          src="/img/home/svg/and.svg"
          className="absolute z-10 right-0 bottom-[54.4px]"
          alt="meal-banner"
          width={150}
          height={65}
        />
      </div>
    </div>
  );
};

export default MealBannerSection;
