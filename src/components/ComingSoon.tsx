import React from "react";
import Image from "next/image";
import Link from "next/link";

const ComingSoon: React.FC = () => {
    return (
        <section className="flex flex-col justify-center items-center min-h-[80vh] bg-[#F6F6FF] text-center p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#3F4092] mb-4">
                Coming Soon
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#525252] mb-4 max-w-[600px]">
                We&apos;re working hard to bring you this page very soon. Stay tuned for updates!
            </p>
            <div className="relative w-full max-w-[400px] h-[300px] mb-8">
                <Image 
                    src="/images/comingsoon.png" 
                    alt="Coming Soon" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
            <Link href="/" >
                <button className=" cursor-pointer px-6 py-3 bg-[#3F4092] text-white rounded-lg text-sm md:text-base hover:bg-[#2e2f7a] transition">
                    Back to Home
                </button>
            </Link>
        </section>
    );
};

export default ComingSoon;
