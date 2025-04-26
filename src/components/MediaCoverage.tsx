import React from "react";
import Image from "next/image";
import { NewsInterface } from "@/interfaces";

interface MediaCoverageProps {
    item: NewsInterface;
}

const MediaCoverage: React.FC<MediaCoverageProps> = ({ item }) => {
    const formatDate = (dateString: string | undefined): string => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(date);
    };

    return (
        <div className="w-full overflow-hidden">
            {/* Content Section (Title & Date) */}
            <div className="pb-4 border-none border-b border-gray-300">
                <h2 className="text-lg font-semibold text-[#fff] leading-6">
                    {item?.title || "Independence Day 2024"}
                </h2>
                <p className="text-[#fff] text-sm mt-1">
                    {formatDate(item?.date)}
                </p>
            </div>

            {/* News Image */}
            <div className="relative w-full h-[350px]">
                <Image
                    src={item?.image || "/images/news.png"}
                    alt="news"
                    layout="fill"
                    objectPosition="top"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default MediaCoverage;
