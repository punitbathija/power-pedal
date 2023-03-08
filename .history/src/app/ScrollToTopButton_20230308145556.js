"use client";

import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className="fixed bottom-4 right-4  text-3xl bg-transparent text-goodred"
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
