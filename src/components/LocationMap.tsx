"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const LocationMap: React.FC = () => {
  const pathname = usePathname();
  const [isHomePage ,  setIsHomePage] =  useState(true)
  useEffect(()=>{
    if(pathname != '/'){
        setIsHomePage(false)
    }else{
      setIsHomePage(true)
    }
  },[pathname])

  return (
    <section className={`max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] ${!isHomePage ? "bg-[#F6F6FF]" : ""}`}>
      <div className={`w-full flex justify-center ${!isHomePage ? "bg-[#fff] p-4 rounded-[10px]" : ""}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.1882489413001!2d83.21168548380416!3d23.47469606695328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398913cd3c3175bd%3A0x141689fb48d37dcf!2sAchievers%20International%20School%20Pratappur%20-%20CBSE%20Affiliated%20(Nursery%20to%2012th)!5e0!3m2!1sen!2sin!4v1740906741914!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius:"10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
