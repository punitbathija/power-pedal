"use client";

import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-full bg-gray-500 text-white ${
        showButton ? "" : "hidden"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <AiOutlineArrowUp />
    </div>
  );
}

export default ScrollToTopButton;
