import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/hero_background_image.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/70"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-6">
        {/* Logo */}
        <Image 
          src="/images/school Logo 1.png"
          alt="AISP Logo"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />

        {/* Welcome Heading */}
        <h1 className="text-2xl font-semibold tracking-wide font-[family-name:var(--font-plus-jakarta)]">
          WELCOME TO
        </h1>

        {/* School Name */}
        <p className="text-4xl md:text-5xl font-bold tracking-wide font-[family-name:var(--font-playfair)] mt-2">
          ACHIEVERS INTERNATIONAL SCHOOL
        </p>

        {/* Location */}
        <div className="flex items-center justify-center text-lg font-light mt-4 font-[family-name:var(--font-plus-jakarta)]">
          {/* <FaMapMarkerAlt className="mr-2 text-white" /> */}
          <span>A CBSE AFFILIATED SENIOR SECONDARY SCHOOL, Aff. No. 3330478</span>
        </div>

        {/* Watch Tour Button */}
        <button
          className="mt-14 flex items-center justify-center bg-black bg-opacity-80 hover:bg-opacity-90 text-white text-sm font-medium rounded-full px-6 py-3 shadow-md transition-all duration-300 mx-auto font-[family-name:var(--font-plus-jakarta)]"
        >
          <span className="mr-2">Watch School Tour</span>
          <FaYoutube className="text-red-500 text-xl" />
        </button>
      </div>  
    </section>
  );
};

export default HeroSection;
