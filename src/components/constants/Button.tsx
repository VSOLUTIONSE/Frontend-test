// "use client"
import React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  height?: string;
  width?: string;
  color?: string
};

const Button = (props: Props) => {
  const { onClick, height,color} = props;
  return (
    <button
      onClick={onClick}
      className={`${color == "orange" && "bg-primary-orange"}  bg-primary-green  shadow-lg border-2 cursor-pointer  border-white text-white font-sans text-[16px] text-center md:leading-[24px] sm:tracking-[0.6px] uppercase sm:text-[12px] sm:py-[7px] sm:px-[16px] font-bold sm:h-auto  md:w-[200px] h-[${
        height ?? "56"
      }px]  rounded-[56px] `}
    >
      {props.children}
    </button>
  );
};

export default Button;
