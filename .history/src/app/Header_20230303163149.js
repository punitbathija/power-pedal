"use client";

import Image from "next/image";
import React from "react";
import { BsBicycle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

function Header() {
  function openMenu(e) {
    e.name === "menu"
      ? ((e.name = "close"),
        list.classList.add("top-[80px]"),
        list.classList.add("opacity-100"))
      : ((e.name = "menu"),
        list.classList.remove("top-[80px]"),
        list.classList.remove("opacity-100"));
  }

  return (
    <div className="flex md:px-10 bg-offwhite text-goodblack md:h-17 md:py-12 items-center h-12 justify-between overflow-hidden">
      <nav className="flex md:justify-around md:items-center w-full">
        <div className="flex justify-between items-center">
          <div className="md:my-4 cursor-pointer md:border-2 mx-5 h-14 md:p-2 md:bg-goodwhite flex gap-1 justify-start text-lg md:text-2xl text-justify items-center  hover:text-goodwhite hover:bg-goodblack hover:rounded-md duration-700">
            <BsBicycle size={40} /> POWER PEDAL
          </div>
        </div>
        <ul className="md:flex gap-24 font-normal z-[-1] md:static absolutemd:p-4  text-xl md:text-2xl shadow w-fit md:z-auto md:opacity-100 opacity-0 top-[-400] transition-all ease-in duration-500">
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            ABOUT
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            FEATURES
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            PRODUCTS
          </li>
          <li className="my-4 mx-6 cursor-pointer md:p-2 hover:text-goodred duration-500">
            ORDER
          </li>
        </ul>
      </nav>
      <GiHamburgerMenu
        onClick={openMenu}
        size={40}
        name="menu"
        className="my-4 md:hidden cursor-pointer block mx-0.5"
      />
    </div>
  );
}

export default Header;
