"use client";
import React, { useEffect, useState, useRef } from "react";
import { BsBicycle } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

function Header() {
  const navbarRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);

  const handleOutsideClick = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setHideMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window;
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    });
  }, []);

  return (
    <div className="flex lg:px-10 bg-offwhite text-goodblack lg:h-17 lg:py-12 items-center h-12 justify-between overflow-hidden px-2">
      <nav className="flex justify-between align-middle lg:justify-around lg:items-center w-full">
        <div className="flex justify-between align-middle items-center">
          <div className="lg:my-4 cursor-pointer lg:border-2 mx-5 h-14 lg:p-2 lg:bg-goodwhite flex gap-1 justify-start text-lg lg:text-2xl text-justify items-center  lg:hover:text-goodwhite lg:hover:bg-goodblack lg:hover:rounded-lg duration-700">
            <BsBicycle size={40} /> POWER PEDAL
          </div>
        </div>
        <ul
          className={
            showMenu
              ? "lg:flex gap-24 font-normal lg:static absolute lg:p-4  text-xl lg:text-2xl shadow w-fit lg:z-auto lg:opacity-100 transition-all ease-in duration-500 bg-offwhite my-12"
              : "opacity-0 top-[0px] lg:flex gap-24 font-normal lg:static absolute lg:p-4  text-xl lg:text-2xl shadow w-fit lg:z-auto lg:opacity-100 transition-all ease-in duration-500"
          }
        >
          <li className="my-4 mx-6 cursor-pointer lg:p-2 hover:text-goodred duration-500">
            ABOUT
          </li>
          <li className="my-4 mx-6 cursor-pointer lg:p-2 hover:text-goodred duration-500">
            FEATURES
          </li>
          <li className="my-4 mx-6 cursor-pointer lg:p-2 hover:text-goodred duration-500">
            PRODUCTS
          </li>
          <li className="my-4 mx-6 cursor-pointer lg:p-2 hover:text-goodred duration-500">
            ORDER
          </li>
        </ul>
      </nav>
      <HiMenuAlt3
        onClick={() => setShowMenu(!showMenu)}
        size={40}
        name="menu"
        className="my-4 lg:hidden cursor-pointer block mx-0.5 hover:text-goodred"
      />
    </div>
  );
}

export default Header;