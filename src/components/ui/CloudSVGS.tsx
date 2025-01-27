import Image from "next/image";
import React from "react";

const CloudSVGS = () => {
  return (
    <>
      <Image
        src="/img/home/svg/group2.svg"
        width={428}
        height={119}
        alt=""
        className=" mt-[1328px] sm:mt-[950px]  md:block sm:w-[137px] absolute left-[53px] sm:left-0  "
      />{" "}
      <Image
        src="/img/home/svg/group1.svg"
        width={265}
        height={211}
        alt=""
        className="mt-[1230px] sm:mt-[920px] sm:w-[70px] absolute right-0 "
      />
    </>
  );
};

export default CloudSVGS;
