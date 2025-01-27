import React, { PropsWithChildren } from "react";

type Props = {
  hori: boolean;
};
export const PopUpLayout = (props: PropsWithChildren<Props>) => {
  return (
    <div className="flex h-[39px] font-sans justify-center items-center">
      {props.hori ? (
        <div className="flex border-2 w-[175px]  gap-x-[8px] px-[9px]    font-bold py-[10px] bg-primary-green rounded-[7px] border-white justify-center items-center ">
          {props.children}
        </div>
      ) : (
        <div className="border-2 rounded-[7px] gap-y-[8px] font-bold border-white text-white p-[9px] bg-primary-orange flex justify-center  flex-col">
          {props.children}
        </div>
      )}
    </div>
  );
};
