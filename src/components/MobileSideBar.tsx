import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaTimes, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import navLinks from "@/data/navLinks";
import { useDispatch, useSelector } from "react-redux";
import { hideSideBar } from "@/redux/slices/sidebarSlice";
import { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
const MobileSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { isShow } = useSelector((state: RootState) => state.sidebarSlice);
  const pathname = usePathname();
  const [isHomePage ,  setIsHomePage] =  useState(true)
  useEffect(()=>{
    if(pathname != '/'){
        setIsHomePage(false)
    }else{
      setIsHomePage(true)
    }
  },[pathname])

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full bg-[#3F4092] w-[90%] transform ${isShow ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50 shadow-lg rounded-tl-lg`}>
        <div className="flex flex-col h-full">
          {/* Header Icons */}
          <div className="bg-[#fff] p-5 flex flex-col justify-between">
            <div className={`flex justify-between items-center ${isHomePage ? "" : "border-b-2 border-b-[#CAC9FF] py-4"}`}>
              <div className="flex space-x-3">
                {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, index) => (
                  <a key={index} href="#" className="text-[#2D2D68] bg-[#ECECF4] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                    <Icon />
                  </a>
                ))}
              </div>
              <FaTimes className="text-[#2D2D68] text-2xl cursor-pointer" onClick={() => dispatch(hideSideBar())} /> 
            </div>
            {/* Extra Information */}
            {
              !isHomePage && (
            <div className="flex gap-2 text-white text-sm py-2">
              {[
                { img: "/images/Google forms.png", text: "ADMISSION FORM (2025-26)" },
                { img: "/images/Family.png", text: "PARENT/STUDENT LOGIN" },
              ].map((item, index) => (
                <div key={index} className="flex justify-center items-center border-2 gap-2 border-[#CAC9FF] bg-[#EEF] text-[#3B39B5] rounded-lg p-2 w-50">
                  <Image src={item.img} width={30} height={30} alt={item.text} />
                  <p className="text-center mt-2">{item.text}</p>
                </div>
              ))}
            </div>
              )
            }
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-col text-white p-5">
            {navLinks.map((item, index) => (
              <li key={index} className="border-b border-white/30">
                {item.submenu ? (
                  <button
                    className="w-full flex justify-between items-center py-3 px-2 text-left focus:outline-none text-xs"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <BiChevronRight className={`transform transition-transform duration-300 ${openDropdown === item.label ? "rotate-90" : ""}`} />
                  </button>
                ) : (
                  <Link href={item.link || "#"} className="block py-3 px-2 text-xs" onClick={() => dispatch(hideSideBar())}>
                    {item.label}
                  </Link>
                )}

                {/* Submenu with smooth animation */}
                <ul
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === item.label ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } bg-[#EEF]  text-[#3F4092]`}
                >
                  {item.submenu?.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-2 px-4 hover:bg-gray-100 text-xs">
                      <Link href={subItem.link || "#"} onClick={() => dispatch(hideSideBar())}>
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
