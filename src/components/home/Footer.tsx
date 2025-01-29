"use client";
import { useHandleWaitList } from "@/hooks/useHandleWaitList";
import React from "react";
// import Button from "../constants/Button";
import ButtonSecondary from "../constants/ButtonSecondary";

const Footer = () => {
  const handleJoinWaitList = useHandleWaitList();

  return (
    <div className="flex font-pangram md:max-w-[1140px] w-full mx-auto mt-[59px] shadow-lg md:mr-[96px] ">
      <div className="md:h-[180px] md:pl-[70px] sm:pt-[56px] sm:pb-[32px] sm:pl-[32px] sm:pr-[37px] md:pr-[42px]  md:mx-auto  flex sm:flex-col md:gap-x-[246px] sm:gap-y-[64px]  md:justify-center items-center ">
        <div className="text-[32px] sm:w-[237px] font-bold w-full   leading-[42px] md:w-[585px]">
          Sigup to{" "}
          <span className="bg-[#5F63E1] text-[30px]  sm:text-[30px] leading-[32px]  font-normal text-white rounded-[40px] border-2 border-black px-[12px] ">
            chowafrica
          </span>{" "}
          <span className="md:hidden">today</span> and say{" "}
          <br className="sm:hidden" />{" "}
          <span className="bg-[#000000]  px-[12px] font-normal text-white border-2 border-primary-green  rounded-[40px]">
            goodbye 👋🏽
          </span>{" "}
          to mealtime stress.
        </div>
        <ButtonSecondary onClick={handleJoinWaitList}>
          Join Waitlist
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default Footer;
