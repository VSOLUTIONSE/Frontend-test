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
      className={`bg-primary-green shadow-lg border-2 cursor-pointer border-white text-white font-sans text-[16px] text-center leading-[24px] font-bold px w-[200px] h-[${
        height ?? "56"
      }px]  rounded-[56px] hover:bg-primary-green transition`}
    >
      {props.children}
    </button>
  );
};

export default Button;
