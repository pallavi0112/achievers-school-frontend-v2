"use client"; // Ensure it's a client component in Next.js

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacilityCard from "./FacilityCard";
import GalleryCard from "./GalleryCard";
import NewsCard from "./NewsCard";
import { FacilityInterface, GalleryInterface, NewsInterface } from "@/interfaces";
import { BsArrowRight } from "react-icons/bs";
import MediaCoverage from "./MediaCoverage";

interface CustomizeSliderProps {
  data: any[];
  source: string;
  header?: string;
  viewAllPageLink?: string;
  isNavigationShow?: boolean;
  isViewAllBtnShow?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  variableWidth?: boolean;
}

const CustomizeSlider = ({
  data = [],
  source,
  header = "Our Facilities",
  viewAllPageLink,
  isNavigationShow = true,
  isViewAllBtnShow = false,
  slidesToShow = 3,
  slidesToScroll = 1,
  variableWidth = false,
}: CustomizeSliderProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const sliderRef = React.useRef<Slider | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    variableWidth: variableWidth,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    afterChange: (index: number) => setCurrentSlide(index),
    onInit: () => setSlideCount(data.length),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(2, slidesToShow), slidesToScroll: Math.min(2, slidesToScroll), variableWidth: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, variableWidth: false } },
    ],
  };

  if (!isMounted) return null; // Prevent SSR errors in Next.js

  return (
    <div className="relative w-full">
      {/* Header and Navigation */}
      <div className="flex justify-between items-center mb-8 mt-1">
        <h2 className={`${ source === "news" ? "text-[#fff]" : "text-[#041533]"} max-sm:text-[20px] sm:text-[32px]  `}>{header}</h2>
        {/* Navigation Buttons */}
        {isNavigationShow && (
          <div className="flex gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 border-none text-gray-800 bg-[#CAC9FF] rounded-full flex justify-center items-center hover:bg-[#4C49E8] hover:text-white transition disabled:bg-[#ECECF4] disabled:cursor-not-allowed"
              disabled={currentSlide === 0} // Disable if at first slide
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 border-none text-gray-800 bg-[#CAC9FF] rounded-full flex justify-center items-center hover:bg-[#4C49E8] hover:text-white transition disabled:bg-[#ECECF4] disabled:cursor-not-allowed"
              disabled={currentSlide >= slideCount - slidesToShow} // Disable if at last slide
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* View All Button */}
        {isViewAllBtnShow && viewAllPageLink && (
          <div>
            <a href={viewAllPageLink} className="text-[#4C49E8] hover:underline flex items-center">
              View All
              <BsArrowRight className="ml-1" />
            </a>
          </div>
        )}
      </div>

      {/* Slider */}
      <div className="slider-container">
        <Slider ref={(slider) => { sliderRef.current = slider; }} {...settings}>
          {
            source === "facility" ?
              data.map((item: FacilityInterface, index: number) => (
                <div key={index} className={`pr-4 pb-8 ${variableWidth ? "w-auto" : "w-full"}`}>
                  <FacilityCard {...item} index={index} />
                </div>
              ))
              : source === "gallery" ?
                data.map((item: GalleryInterface, index: number) => (
                  <div
                    key={index}
                    className={`px-2 transition-all duration-300 ${index === expandedIndex ? "w-[500px]" : "w-[200px]"
                      }`}
                    onMouseEnter={() => setExpandedIndex(index)}
                  >
                    <GalleryCard {...item} />
                  </div>
                ))
                :
                data.map((item: NewsInterface, index: number) => (
                  <div key={index} className={` ${variableWidth ? "w-auto" : "w-full"}`}>
                    {/* <NewsCard item={item} /> */}
                    <MediaCoverage item={item}/>
                  </div>
                ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default CustomizeSlider;
