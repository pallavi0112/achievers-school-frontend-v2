'use client'
import React, { useEffect, useState } from 'react'
import Header from './Header';
import NavBar from './NavBar';
import MobileSidebar from './MobileSideBar';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const MainHeader = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {isShow} = useSelector((state: RootState) => state.sidebarSlice) // Adjusted to access 'isShow' from 'sidebarSlice'


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Scrolling Down → Hide Header
        setShowHeader(true);
      } else {
        // Scrolling Up → Show Header
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
      <>
        <Header />
        <NavBar
          showHeader={showHeader}
        />
        {
          isShow ?
          <MobileSidebar/>
          : <></>
        }
      </>
  );
}

export default MainHeader