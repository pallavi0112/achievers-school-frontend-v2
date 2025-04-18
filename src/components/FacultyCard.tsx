import Image from "next/image";
import React from "react";

interface FacultyCardProps {
  name: string;
  designation: string;
  image: string;
  index:number
}

const FacultyCard: React.FC<FacultyCardProps> = ({ index, name , image , designation}) => {
    return (
        <>
        <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden p-4 flex flex-col items-center text-center">
          <div
          className="w-full h-[250px] rounded-sm"
          >
          <Image src={image} alt={name} width={150} height={150} className="w-full h-full object-cover rounded-sm" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{designation}</p>
        </div>
        </>
    )    
};

export default FacultyCard;
