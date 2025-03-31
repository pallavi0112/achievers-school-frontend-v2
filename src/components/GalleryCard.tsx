import React from "react";
import Image from "next/image";

interface GalleryCardProps {
  image: string;
  title: string;
  date: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, title, date }) => {
  return (
    <div className="relative group w-full h-60 overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out">
      {/* Image */}
      <Image
        src="/images/logo.png"
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg transition-transform group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
        <h3 className="text-lg font-semibold border-b inline-block">Independence Day 2024</h3>
        <p className="text-sm">15.08.2024</p>
      </div>

      {/* View All Button */}
      <a
        href="#"
        className="absolute bottom-4 right-0 bg-white text-gray-800 px-4 py-1 text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
      >
        View All
      </a>
    </div>
  );
};

export default GalleryCard;
