import Image, { type StaticImageData } from "next/image";
import React from "react";

export type IconsProps = {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
};

const Icons = (props: IconsProps) => {
  const { src, alt, className } = props;

  return (
    <div className={`relative h-[100px] w-[100px] ${className}`}>
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        className={`h-full w-full  object-cover`}
      />
    </div>
  );
};

export default Icons;
