"use client";
import { useHandleWaitList } from "@/hooks/useHandleWaitList";
import React from "react";
import Button from "../constants/Button";

const Footer = () => {
  const handleJoinWaitList = useHandleWaitList();

  return (
    <div className="flex max-w-[1140px] mx-auto mt-[59px] shadow-lg mr-[96px] ">
      <div className="h-[180px] pl-[70px] pr-[42px]  mx-auto   flex gap-x-[246px] justify-center items-center">
        <div className="text-[32px] font-bold  leading-[42px] w-[585px]">
          Sigup to <span className="bg-[#5F63E1] font-normal text-white rounded-[40px] border-2 border-black px-[12px]">chowafrica</span> and say <br/>
          <span className="bg-[#000000] px-[12px] font-normal text-white border-2 border-primary-green   rounded-[40px]">
            goodbye 👋🏽
          </span>
          to mealtime stress.
        </div>
        <Button onClick={handleJoinWaitList}>Join Waitlist</Button>
      </div>
    </div>
  );
};

export default Footer;
