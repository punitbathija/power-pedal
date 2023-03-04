import React from "react";
import { BsBicycle } from "react-icons/bs";

function Hero() {
  return (
    <div>
      <div className="my-4 cursor-pointer mx-5 p-2 lg:bg-goodwhite flex gap-1 justify-start text-4xl text-justify items-center  lg:hover:text-goodwhite lg:hover:bg-goodblack ">
        <BsBicycle size={70} /> POWER PEDAL
      </div>
    </div>
  );
}

export default Hero;
