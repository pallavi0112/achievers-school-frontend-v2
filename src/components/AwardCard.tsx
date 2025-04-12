import Image from "next/image";
import React from "react";

interface AwardCardProps {
  image: string;
  description: string;
  index: number;
}

const AwardCard: React.FC<AwardCardProps> = ({ image, description, index }) => {
  return (
    <>
      <div 
      className={`flex flex-col justify-end items-center transition-all duration-300  my-2
      ${index === 1 ? "max-sm:scale-100 scale-110 translate-y-[-10px]" : "scale-90 translate-y-[10px]"}`}
    >
      <div className={`${index === 1 ? "max-w-[250px]" : "max-w-[200px]"} w-full`}>
        <Image src={image} alt={description} width={200} height={100} className="w-full h-auto" />
      </div>

      <span className="mt-2 text-[#fff] text-center sm:text-md max-sm:text-sm">{description}</span>
    </div>
    </>
  );
};

export default AwardCard;