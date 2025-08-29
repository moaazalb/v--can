'use client'
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import React from 'react';
import CategorySlider from '@/components/slider/Slider';
import LoveButton from "@/components/custom/LoveButton"
import GradientButton from '@/components/custom/HeroButton';
import { Box } from '@mui/material';
import MobileHeader from '@/components/TabAndMobHeader/mobileHeader';
import TabletHeader from '@/components/TabAndMobHeader/tabletHeader';
import show from "@/public/assets/images/showDetails.svg";
import history from "@/public/assets/images/1917.svg"
import Image from 'next/image';

export default function HomePage() {
  


  return (
      <div className="min-h-screen bg-[#0A0C0F] overflow-x-hidden">
 
     <section className="fixed top-0 left-0 w-full z-50 overflow-x-hidden">
        {/* Mobile Header - Show on xs and sm (up to md breakpoint) */}
        <div className="block md:hidden">
          <MobileHeader />
        </div>
        {/* Tablet Header - Show on md only */}
        <div className="hidden md:block lg:hidden">
          <TabletHeader />
        </div>
        {/* Desktop Header - Show on lg and up */}
        <div className="hidden lg:block">
          <Header />
        </div>
      </section>
<section
  className="relative h-[1024px] w-[393px] md:w-[768px] lg:w-full bg-cover bg-center overflow-x-hidden"
  style={{
    backgroundImage: "url('/assets/images/HeroImageContainer.svg')",
  }}
>
  {/* Bottom fade overlay */}
  <div
    className="absolute bottom-0 left-0 right-0"
    style={{
      height: "240px", // match the fade's actual height
      backgroundImage: "url('/assets/images/HeroDivider.svg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "bottom center",
      pointerEvents: "none",
    }}
  />
       
       <div className="relative pt-[13rem] z-10 flex flex-col h-full text-center text-white px-4 md:items-center lg:items-start">
            <Image src={history} width={300} height={124} alt='1917'/>
       
        {/* First Div (maybe a headline) */}
        <div className="text-4xl font-bold mb-4 pt-4 lg:ml-2 md:ml-0 ">
         <Image src={show} width={339} height={22} alt='show'/>
        </div>
           {/* Second Div (maybe a subtitle) */}
        <div className="lg:pl-2 md:pl-0 text-start text-base mb-6 font-cairo  text-[hsla(0, 0%, 100%, 1)] ">
          <p>April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory,</p> 
          <p> two soldiers are assigned to race against time and deliver a message</p>
          <p>that will stop 1,6 men from walking straight into a deadly  trap. </p>
        </div>
       <div className="flex items-start pt-4">
       <GradientButton />
       <LoveButton />
          </div>
        
        </div>
         <div
    className="absolute bottom-6 left-6 font-cairo font-bold text-[24px] text-[#FFFFFF] pl-4 md:pl-16"
    style={{
      zIndex: 10, // ensures it's above the fade
    }}
  >
    Category (Trend - New - Continue watching)
  </div>
     </section> 
    <section>
           <CategorySlider/>
    <section>
      <div className=" font-cairo font-bold text-[24px] text-[#FFFFFF] bg-[#0A0C0F] pl-6 md:pl-[5rem]">
        Category (Trend - New - Continue watching)
      </div>
      <CategorySlider/>
    </section>  
    <section>
      <div className=" font-cairo font-bold text-[24px] text-[#FFFFFF] bg-[#0A0C0F] pl-6 md:pl-[5rem]">
        Category (Trend - New - Continue watching)
      </div>
      <CategorySlider/>
    </section>
    </section>
     <section
      className="relative w-full h-[290vh] bg-no-repeat"
     style={{
    backgroundImage: "url('/assets/images/Homepage.svg')",
    backgroundPosition: "left bottom", // align bottom-left
    backgroundSize: "cover", 
     backgroundRepeat: "no-repeat",
    backgroundColor: "#0A0C0F",          // <- important
    outline: "none",
    border: "none",
    }}
     >
     </section>
     <Footer/>
  </div>
  );
}





/**
 * <div className="absolute bottom-6 left-6 font-cairo font-bold text-[24px] text-[#FFFFFF] pl-12"
       
        >
        Category (Trend - New - Continue watching)
        </div>
 */