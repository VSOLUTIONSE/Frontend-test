import { navLinksProps, socialsProps } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "../constants/Icons";

type sideBarProps = {
  socials: socialsProps[];
  navLinks: navLinksProps[];
};
const SideBar = (props: sideBarProps) => {
  return (
    <div className="sm:hidden w-full max-w-[238px]">
      <div className="  bg-white text-black flex flex-col  ">
        {/* Logo */}
        <div className="pl-[51px] mt-[52px] mb-[54.9px]">
          <Icons
            src="/img/home/svg/logo.svg"
            alt="logo"
            className="w-[68px] h-[56.03px]"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col pl-[51px] font-sans font-medium space-y-4 text-gray-800">
          {props.navLinks.map((nav, idx) => (
            <Link
              key={idx}
              href={nav.link}
              className="flex leading-[17px] xl:text-[18px] items-center"
            >
              <div
                className={`w-[3px] ${
                  idx === 1 && "hidden"
                }   bg-primary-orange  h-[32px]`}
              />

              <span className="pl-[20px] py-[11.5px]">{nav.text}</span>
            </Link>
          ))}
          {/* Social Media Icons */}
        </nav>
        <div className="mt-[12px] pl-[71px] gap-x-[12px]  text-primary-orange flex">
          {props.socials.map((social, idx) => (
            <div key={idx} className="p-[8px] w-[32px] h-auto bg-[#F7ECE4]">
              <a href={social.link} aria-label="Facebook">
                <Image
                  src={social.icon}
                  width={18}
                  height={18}
                  alt={`${social.icon}-icon`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
