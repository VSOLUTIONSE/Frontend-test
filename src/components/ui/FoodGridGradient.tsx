import { foodGridData } from "@/statics/mealGrid";
import Image from "next/image";
import React from "react";
const FoodGridGradient = () => {
  return (
    <div className="relativez z-20 sm:px-[33px] md:ml-[45px]">
      <div className="grid  border  grid-cols-3 gap-x-[12px]  gap-y-[5px] ">
        {foodGridData.map((meal, idx) => (
          <div
            key={meal.id}
            className={` ${
              (idx === 0 || idx == 4 || idx == 8) && "z-20 !opacity-100"
            } shadow-lg opacity-60  bg-white rounded-[7.65px] `}
          >
            {/* Image Section */}
            <div className="bg-[#F4F3E8] max-w-[127.79px]  mx-[4.13px] mt-[4.13px] px-[20.5px] py-[14.37px] flex items-center justify-center rounded-lg ">
              <Image
                src={meal.image}
                alt={meal.title}
                className="object-contain sm:w-[170px]"
                width={idx == 4 || idx == 8 ? 61.24 : 117.31}
                height={idx == 4 || idx == 8 ? 61.24 : 117.31}
              />
            </div>
            {/* Content Section */}
            <div className="w-full max-w-[108.56px] sm:max-w-[69.55px]  mt-[14.37px] mb-[10.11px] ml-[11.32px]">
              <h3 className="text-[7.65px] sm:text-[4.88px]  font-bold">{meal.title}</h3>
              <p className="bg-[#D6D5CA] mb-[6.92px] mt-[4.62px] w-fit text-[3.93px] p-[3.46px] rounded-[13.85px]  tracking-[1.74px]">
                {meal.category}
              </p>
              <p className="flex gap-x-[6.93px] text-primary-ash items-center font-sans text-[4.08px]">
                {meal.picks} picks
                <span className="bg-primary-ash rounded-full tracking-[0.1616px] w-[2.31px] font-normal leading-[10.39px] h-[2.31px]" />
                Approx. {meal.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0  w-full    bg-gradient-to-t from-[#FFF8F2] via-[#FFF8F2D6]  to-[#FFF8F28A] z-10 pointer-events-none"></div>
    </div>
  );
};

export default FoodGridGradient;
