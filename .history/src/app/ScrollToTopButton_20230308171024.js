"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <div
      className={`fixed cursor-pointer drop-shadow-2xl bottom-4 right-4 text-goodred lg:text-6xl text-4xl p-4 border-2 font-extrabold ${
        showButton ? "" : "hidden"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <AiOutlineArrowUp />
    </div>
  );
}

export default ScrollToTopButton;