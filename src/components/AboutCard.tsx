import Image from 'next/image';
import React from 'react';

interface AboutCardProps {
    imageSrc: string;
    subtitle: string;
    title: string;
    paragraphs: string[];
}

const AboutCard: React.FC<AboutCardProps> = ({ imageSrc, subtitle, title, paragraphs }) => {
    return (
        <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px]">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 ">
                    <Image src={imageSrc} alt={title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' , objectFit: 'cover', borderRadius:'20px'}} />
                </div>
                <div className="w-full md:w-1/2 px-6 max-h-[max-content]">
                    <h3 className="text-[#111] text-md font-light">{subtitle}</h3>
                    <h2 className="text-[#111] text-3xl font-[500] mb-4">{title}</h2>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-[#2E2E2E] mb-3 leading-6 text-[16px]">{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutCard;

