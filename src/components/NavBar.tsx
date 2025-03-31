import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/interfaces";
import { FaChevronDown as ChevronDown, FaChevronRight as ChevronRight, FaBars} from "react-icons/fa";
import navLinks from "@/data/navLinks";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

interface NavbarProps {
  showHeader: boolean;
}

const NavBar: React.FC<NavbarProps> = ({ showHeader }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`bg-[#3F4092] shadow-md w-full transition-transform duration-300 px-[40px] xl:px-[100px]  ${showHeader ? "translate-y-0 fixed top-0 left-0 z-50" : ""
          }`}
      >
        <div className="hidden lg:block w-full mx-auto  flex justify-between items-center">
          <ul className="flex space-x-6 text-gray-800 w-full flex justify-between">
            {navLinks.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className={`flex flex-col ${showHeader ? '' : 'justify-center items-center'}  row-gap-[10px] text-sm lg:hidden text-[#fff] py-4 w-full`}>
          <div className="flex items-center  justify-between gap-1">
            <div className="flex">
              <HiOutlinePhone className="text-xl text-[#fff]" />
              <span className="text-[14px] font-[500]">7999671694 | 9098418685</span>
            </div>
            <div className={`${showHeader ? 'block text-[25px] cursor-pointer' : 'hidden'}`}>
              <FaBars />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineEmail className="text-xl text-[#fff]" />
            <a
              href="mailto:achieversinternationalppur@gmail.com"
              className="text-[14px] font-[500]"
            >
              achieversinternationalppur@gmail.com
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <li className="relative group xl:text-[14px] lg:text-[10px] py-4">
      {item.link ? (
        <Link href={item.link} className="flex items-center gap-1 text-[#FFFFFF]">
          {item.label}
        </Link>
      ) : (
        <span className="cursor-pointer flex items-center gap-1 text-[#FFFFFF]">
          {item.label}
          {item.submenu && <ChevronDown className="xl:w-4 xl:h-4 lg:w-2 lg:h-2" />}
        </span>
      )}

      {item.submenu && (
        <ul
          className="absolute left-0 z-50 bg-white shadow-lg rounded-md w-[300px] p-2
                     overflow-hidden max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100
                     transition-all ease-in-out duration-300 origin-top
                     before:content-[''] before:absolute before:top-[-6px] before:left-5 
                     before:border-[6px] before:border-transparent before:border-b-white"
        >
          {item.submenu.map((subItem, index) => (
            <li
              key={index}
              className="px-4 py-2 text-[#2D2D68] hover:bg-[#ECECF4] rounded-sm hover:font-[600] hover:text-[13px] relative group"
            >
              {subItem.submenu ? (
                <div className="flex justify-between items-center cursor-pointer">
                  {subItem.label}
                  <ChevronRight className="xl:w-4 xl:h-4 lg:w-2 lg:h-2" />
                </div>
              ) : (
                <Link href={subItem.link || "#"} className="block hover:pl-4 transition-all ease-in-out duration-300">
                  {subItem.label}
                </Link>
              )}
              {subItem.submenu && (
                <ul
                  className="absolute left-full top-0 mt-0 bg-white shadow-lg rounded-md py-2 w-48 
                             overflow-hidden max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100
                             transition-all ease-in-out duration-300 origin-top
                             before:content-[''] before:absolute before:top-2 before:left-[-12px]
                             before:border-[6px] before:border-transparent before:border-r-white"
                >
                  {subItem.submenu.map((subSubItem, idx) => (
                    <li key={idx} className="px-4 py-2 hover:bg-gray-100">
                      <Link href={subSubItem.link || "#"}>{subSubItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavBar;

