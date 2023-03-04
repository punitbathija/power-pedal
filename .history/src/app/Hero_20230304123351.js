import React from "react";
import { BsBicycle } from "react-icons/bs";

function Hero() {
  return (
    <div>
      <div className="lg:my-4 cursor-pointer lg:border-2 mx-5 h-14 lg:p-2 lg:bg-goodwhite flex gap-1 justify-start text-lg lg:text-2xl text-justify items-center  lg:hover:text-goodwhite lg:hover:bg-goodblack lg:hover:rounded-lg duration-700">
        <BsBicycle size={40} /> POWER PEDAL
      </div>
    </div>
  );
}

export default Hero;
