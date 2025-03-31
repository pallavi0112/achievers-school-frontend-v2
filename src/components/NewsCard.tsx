import React from "react";
import Image from "next/image";
import { NewsInterface } from "@/interfaces";

interface NewsCardProps {
  item: NewsInterface;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* News Image */}
      <div className="w-full h-48 relative rounded-t-2xl">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-[#424242] leading-5">{item.title}</h2>

        {/* Description */}
        <p className="text-[#7A7A7A] text-sm mt-2 ">
          {item.description.length > 100
            ? `${item.description.substring(0, 100)}...`
            : item.description}
        </p>

        {/* View More Link */}
        <div className="mt-4">
          <a
            href={"/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A7A7A] text-sm hover:underline"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
