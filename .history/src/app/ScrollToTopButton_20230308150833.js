"use client";

import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1000000) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
  return (
    <div
      className={`fixed bottom-4 right-4 text-goodred lg:text-6xl text-4xl p-4 border-2 font-extrabold ${
        showButton ? "" : "hidden"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <AiOutlineArrowUp />
    </div>
  );
}

export default ScrollToTopButton;
