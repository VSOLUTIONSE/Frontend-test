"use client";
import React from "react";
import Icons from "../constants/Icons";
import Button from "../constants/Button";
import { useHandleWaitList } from "@/hooks/useHandleWaitList";

export const MobileNav = () => {
  const handleJoinWaitList = useHandleWaitList();

  return (
    <div className="md:hidden m-auto w-full pt-[19px] pb-[21px] px-[24px]">
      <div className="flex w-full justify-between   items-center">
        <div>
          <Icons
            src="/img/home/svg/logo.svg"
            alt="logo"
            className="w-[68px] h-[56.03px]"
          />
        </div>

        <div className="flex items-center justify-center gap-x-[24px]">
          <Button color="orange" onClick={handleJoinWaitList}>Join Waitlist</Button>

          <Icons
            src="/img/home/svg/menu-bar.svg"
            alt="logo"
            className="w-[18px] cursor-pointer h-[12px]"
          />
        </div>
      </div>
    </div>
  );
};
