import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

interface MandatoryDisclosureCardProps {
  title: string;
  updatedOn: string;
  link: string;
}
const MandatoryDisclosureCard: React.FC<MandatoryDisclosureCardProps> = ({
  title,
  updatedOn,
  link,
}) => {
  return (
    <div className="flex flex-col w-full p-4 bg-white rounded-2xl shadow-md border-2 border-[#EEF]">
      <div className="flex gap-4 items-center">
        <div className="flex w-[48px] h-[48px] justify-center items-center gap-2 aspect-square bg-[#FFE6E6] rounded-[6px]">
          <Image
            src="/images/pdf.png"
            alt="Mandatory Disclosure"
            width={24}
            height={24}
          />
        </div>
        <div>
          <p className="text-[14px] sm:text-[16px] font-inter font-semibold leading-[150%] uppercase text-[#313131]">
            {title}
          </p>
          <p className="text-[12px] sm:text-[14px] font-inter font-normal leading-[150%] text-[#424242]">
            Updated: {updatedOn}
          </p>
        </div>
      </div>
      <div className="my-[24px] w-full h-[1px] bg-[#EEF]"></div>
      <Link
        href={link} // Replace with the actual link to the PDF
        target="_blank"
        rel="noopener noreferrer"
        // download
        className="mt-auto w-[120px] py-[8px] bg-[#EEF] text-[#3F4092] cursor-pointer rounded-[4px] text-sm font-bold flex items-center justify-center hover:bg-[#d4d1ff] transition"
      >
        View PDF
        <GoArrowUpRight className="text-[700] text-lg text-[#3F4092]" />
      </Link>
    </div>
  );
};

export default MandatoryDisclosureCard;
