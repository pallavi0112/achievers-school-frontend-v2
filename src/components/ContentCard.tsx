import Image from "next/image";
import React from "react";

interface ContentCardProps {
  alt: string;
  description: React.ReactElement;
  image: string;
  imageLeft?: boolean; // Toggle image position
}

const ContentCard: React.FC<ContentCardProps> = ({ description, image, alt, imageLeft = false }) => {
  return (
    <div
      className={`flex flex-col md:flex-row  my-6 md:my-10 rounded-lg ${
        imageLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className={`w-full md:w-[1/2] flex  ${imageLeft ? "md:justify-end" : "" }  `}>
        <div className="w-[100%] sm:w-[80%] h-full rounded-lg p-4 bg-white shadow-md">
          <Image
            src={image}
            alt={alt}
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-[1/2] px-4 md:px-0 ">{description}</div>
    </div>
  );
};

export default ContentCard;
