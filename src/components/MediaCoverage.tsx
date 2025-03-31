import React from "react";
import Image from "next/image";
import { NewsInterface } from "@/interfaces";

interface MediaCoverageProps {
    item: NewsInterface;
}

const MediaCoverage: React.FC<MediaCoverageProps> = ({ item }) => {
    return (
        <div className="w-full overflow-hidden">
            {/* Content Section (Title & Date) */}
            <div className="pb-4 border-none border-b border-gray-300">
                <h2 className="text-lg font-semibold text-[#fff] leading-6">
                Independence Day 2024
                </h2>
                <p className="text-[#fff] text-sm mt-1">15 Aug 2024</p>
            </div>

            {/* News Image */}
            <div className="relative w-full h-[350px]">
                <Image
                    src={"/images/news.png"}
                    alt="news"
                    layout="fill"
                    objectFit="cover"
                    // className="rounded-b-2xl"

                />
            </div>
        </div>
    );
};

export default MediaCoverage;
