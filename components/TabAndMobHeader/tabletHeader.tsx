"use client";

import { PlatformSelection } from "../custom/CustomPlatform";
import { CustomSelect } from "../custom/CustomSelect";
import menu from "@/public/assets/images/menuIcon.svg";
import search from "@/public/assets/images/searchIcon2.svg";
import logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function TabletHeader() {
  return (
    <div
    
      className="flex w-[768px] items-center  h-[202px] lg:h-[96px] px-4 py-3 flex-wrap cursor-pointer overflow-hidden overflow-y-clip"
            style={{
        background: 'linear-gradient(180deg, #0A0C0E 0%, rgba(10, 12, 14, 0.95) 30%, rgba(10, 12, 14, 0.8) 60%, rgba(10, 12, 14, 0) 100%)'
      }}
    >
     
       {/* Logo on the left */}
      <div className="flex pl-[10rem] pt-6">
        <Image src={logo} width={120} height={20} alt='logo'/>
      </div>

      {/* Spacer to push right elements to the right */}
      <div className="flex-grow"></div>

      {/* Right Icons */}
      <div className="flex pr-[9rem] place-content-center pt-6 gap-3 ">
        <Image src={search} width={39} height={40} alt='search'/>
        <div className="pt-3">
          <Image src={menu} width={60} height={40} alt="menu"/>
        </div>
      </div>

      {/* Bottom row with ALL dropdown and plus button */}
      <div className="w-full flex place-content-center gap-3 mb-4 ">
        <PlatformSelection/>
        <CustomSelect/>
      </div>
    </div>
  );
}