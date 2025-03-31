'use client';

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

interface CounterProps {
  icon: string;
  number: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ icon, number, label }) => {
  return (
    <div className="flex items-center p-[20px] bg-[#fff] rounded-[8px]">
      <div className="mr-2 flex w-[48px] h-[48px] justify-center items-center bg-[#EEF] rounded-md">
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
        />
      </div>
      <div className="ml-2">
        <div className="text-2xl font-bold">
          <CountUp end={number} duration={2} separator="," />
        </div>
        <p className="text-[#6B7280] text-[16px]">{label}</p>
      </div>
    </div>
  );
};

export default Counter;
