// "use client"
import React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  height?: string;
  width?: string;
};

const Button = (props: Props) => {
  const { onClick, height} = props;
  return (
    <button
      onClick={onClick}
      className={`bg-primary-green shadow-lg border-2 cursor-pointer border-white text-white font-sans sm:tracking-[0.6px] uppercase sm:text-[12px] text-[16px] text-center leading-[24px] py-[5px] px-[16px] font-bold md:w-[200px] md:h-[${
        height ?? "56"
      }px]  rounded-[56px] hover:bg-primary-green transition`}
    >
      {props.children}
    </button>
  );
};

export default Button;
