// "use client"
import React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  height?: string;
  width?: string;
  color?: string;
};

const ButtonSecondary = (props: Props) => {
  const { onClick, height } = props;
  return (
    <button
      onClick={onClick}
      className={`  bg-primary-green  shadow-lg border-2 cursor-pointer  border-white text-white font-sans text-[16px] text-center md:leading-[24px] sm:tracking-[0.6px] uppercase sm:text-[12px]  font-bold   w-[200px] h-[${
        height ?? "56"
      }px]  rounded-[56px] `}
    >
      {props.children}
    </button>
  );
};

export default ButtonSecondary;
