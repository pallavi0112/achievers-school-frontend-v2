'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LatestUpdatesModal from './LatestUpdatesModal';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showLatestUpdatesModal } from '@/redux/slices/sidebarSlice';
import { LinkItem } from '@/interfaces';
import { linkItems } from '@/constant/links.constant';
import { usePathname } from 'next/navigation';

const Links = () => {
  const dispatch = useDispatch();
  const { isLatestUpdatesModalOpen } = useSelector((state: RootState) => state.sidebarSlice);
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(true)

  // Handles the click event on a desktop link
  const handleClick = (item: LinkItem) => {
    if (item.link) {
      window.open(item.link, '_blank');
    } else {
      dispatch(showLatestUpdatesModal());
    }
  };
  useEffect(() => {
    if (pathname != '/') {
      setIsHomePage(false)
    } else {
      setIsHomePage(true)
    }
  }, [pathname])
  return (
    <div>
      {/* Mobile Version: shown on small screens */}
      {
        isHomePage ? (
          <div className='block lg:hidden max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] pt-[24px]'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px] text-white text-sm py-2">
              {linkItems.map((item, index) => (
                <div key={index} className="flex justify-start items-center border-2 gap-2 border-[#CAC9FF] bg-[#EEF] text-[#3B39B5] rounded-lg p-2 cursor-pointer"
                  onClick={() => handleClick(item)}
                >
                  <div
                    className='w-8 h-8'
                  >
                    <Image
                      src={item.img}
                      width={30}
                      height={30}
                      alt={item.text}
                      className=''
                    />
                  </div>
                  <p className="text-[12px] font-[700]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )
          :
          <></>
      }


      {/* Desktop Sidebar: shown on large screens */}
      <div className='hidden lg:flex flex-col jutify-end items-end fixed right-0 top-1/2 transform -translate-y-1/2 gap-2 z-50 transition-all duration-300 ease-in-out group '>
        
        {linkItems.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className={`group flex items-center justify-start gap-2 p-2 bg-[#23226B] border border-[#23226B] rounded-l-lg overflow-hidden cursor-pointer transition-all duration-300 ${index === 0 ? 'w-60 animate-color-shift group-hover:w-12' : 'w-12'} hover:w-60`}
            onClick={() => handleClick(item)}
          >
            <div className="w-10 h-10 flex justify-center items-center">
              <Image src={item.img} width={30} height={30} alt={item.text} className="min-w-[30px] min-h-[30px] object-contain" />
            </div>
            {/* <Image 
            src={item.img} 
            width={30} 
            height={30} 
            alt={item.text} 
            className="min-w-[30px] min-h-[30px] object-contain" 
          /> */}
            <span className={`whitespace-nowrap text-[#fff] font-medium text-[12px] ${index === 0 ? '' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
              {item.text}
            </span>

            <div>
              <Image src={"/videos/animated_arrow.gif"} width={25} height={25} alt={item.text} className="min-w-[25px] min-h-[25px] object-contain" />
            </div>
          </div>

        ))}
      </div>

      {/* Modal Component */}
      {isLatestUpdatesModalOpen && (
        <LatestUpdatesModal />
      )}
    </div>
  );
};

export default Links;
