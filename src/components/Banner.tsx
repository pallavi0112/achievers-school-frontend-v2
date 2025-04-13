import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/interfaces";


interface BannerProps {
  backgroundImage: string;
  pageTitle: string;
  breadcrumbs: Breadcrumb[];
}

const Banner: React.FC<BannerProps> = ({ backgroundImage, pageTitle, breadcrumbs }) => {
  return (
    <div
      className="relative w-full h-[40vh] md:h-[70vh] max-h-[600px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content */}
      <div>
        {/* Page Title with Left & Right Lines */}
        <h1 className="relative md:text-[32px] text-[18px] font-bold uppercase inline-block px-4 before:content-[''] before:absolute before:left-[-21%] md:before:left-[-60%] before:top-1/2  before:w-[25%] md:before:w-[50%] before:h-[4px] before:rounded-xs before:bg-white after:content-[''] after:absolute after:right-[-21%] md:after:right-[-60%] after:top-1/2 after:w-[25%] md:after:w-[50%] after:h-[4px] after:rounded-xs after:bg-white">
          {pageTitle}
        </h1>

        {/* Breadcrumbs */}
        <nav className="mt-2 text-sm text-gray-300">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-2">/</span>}

              {crumb.url && index !== breadcrumbs.length - 1 ? (
                <Link href={crumb.url} className="hover:text-white transition duration-200">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-semibold" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Banner;
