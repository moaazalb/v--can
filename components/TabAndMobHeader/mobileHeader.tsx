"use client";

import { PlatformSelection } from "../custom/CustomPlatform";
import { CustomSelect } from "../custom/CustomSelect";
import menu from "@/public/assets/images/menuIcon.svg";
import search from "@/public/assets/images/searchIcon2.svg";
import logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function MobileHeader() {
  return (
    <div
    
      className="flex w-[393px] md:w-[768px] items-center h-[173px] md:h-[202px] lg:h-[96px] px-4 py-3 flex-wrap cursor-pointer overflow-hidden overflow-y-clip"
            style={{
        background: 'linear-gradient(180deg, #0A0C0E 0%, rgba(10, 12, 14, 0.95) 30%, rgba(10, 12, 14, 0.8) 60%, rgba(10, 12, 14, 0) 100%)'
      }}
    >
     
       {/* Logo Centered 2 */}
      <div className="flex-grow flex pt-6 justify-start  md:hidden">
        <Image src={logo} width={88} height={15} alt='logo'/>
      </div>

      {/* Right Icons */}
  
      <div className="flex items-center pt-6 gap-3 pr-[2.5rem] ">
        <Image src={search} width={18} height={13} alt='search'/>
        <div className="pt-2">
          <Image src={menu} width={31} height={23} alt="menu"/>
        </div>
      </div>
      <div className="w-[392px] md:w-[146px]  flex self-center justify-center items-center gap-3 h-[30px] md:h-[42px] cursor-pointer md:pt-[1rem] md:pl-[3rem]">
        <PlatformSelection/>
        <CustomSelect/>
      </div>
    </div>
  );
}