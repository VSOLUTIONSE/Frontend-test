"use client";
import React from "react";
import Button from "../constants/Button";
import Icons from "../constants/Icons";
import HeroCards from "../ui/HeroCards";
import { useHandleWaitList } from "@/hooks/useHandleWaitList";
import Image from "next/image";

export const HeroSection = () => {
  const handleJoinWaitList = useHandleWaitList();

  return (
    <section className="w-full touch-auto  md:pr-[48px] sm:px-[23px]">
      <div className="md:h-[935px]  min-h-screen sm:h-[759px]  relative   overflow-x-hidden  bg-[url('/img/home/circles.png')]  sm:mx-auto  bg-cover bg-no-repeat mt-[32px] bg-[#0E0E0E] rounded-[14px] md:ml-[7px] ">
        <div className="flex md:w-full h-auto md:pt-[130px] sm:pt-[130px]  md:mb-[67.48px]  flex-col items-center justify-center text-center mx-auto px-4">
          <div className="flex items-center mb-[20px] text-[15px] font-[400px] leading-[24px] gap-x-[18px] justify-center">
            <Icons
              src="/img/home/svg/star.svg"
              alt=""
              className="w-[24px] sm:w-[10px] h-[24px] sm:h-[10px] "
            />
            <p className="text-center sm:text-[8px] tracking-[0.76px] uppercase text-white">
              {" "}
              Join the chow africa waitlist{" "}
            </p>
            <Icons
              src="/img/home/svg/star.svg"
              alt=""
              className="w-[24px] sm:w-[10px] h-[24px] sm:h-[10px]"
            />
          </div>

          <h1 className="text-white mb-[24px] relative sm:text-[40px]  text-[96px] font-medium  leading-[86.4px] sm:leading-[35.75px] ">
            <span>Find chow,</span>{" "}
            <span className="relative">
              <span className="text-primary-green relative font-courgette font-[400]  ">
                Asap!
              </span>
              <Image
                src="/img/home/svg/asap-line.svg"
                width={270}
                height={6}
                alt="asap"
                className="right-0  sm:w-[109px] absolute"
              />
            </span>
          </h1>
          <p className="text-white sm:text-[14px] sm:max-w-[269px] max-w-[543px] mb-[40px]  leading-[30px] sm:leading-[21px] text-[20px] font-sans font-normal">
            The patient dog eats left overs. Be the first to know when we
            launch. Join our Waitlist <span className="sm:hidden">😎</span>
          </p>
          <form className="w-full mb-[98px] mx-auto flex justify-center gap-x-[12px] sm:px-[16px] sm:gap-y-[12px] sm:flex-col   items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="xl:flex-1[] font-sans placeholder:text-[#1A1A1A] w-full  h-[56px] pl-[17px] max-w-[327px] border border-gray-700 rounded-[12px] focus:outline-none"
            />
            <Button onClick={handleJoinWaitList}>Join Waitlist</Button>
          </form>
        </div>
        <HeroCards />
      </div>
    </section>
  );
};
