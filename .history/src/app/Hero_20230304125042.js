import React from "react";
import { BsBicycle } from "react-icons/bs";

function Hero() {
  return (
    <div className="bg-goodwhite my-0">
      <h1 className="my-4 mx-15 p-2 flex gap-1 justify-start text-4xl text-justify items-center">
        <BsBicycle size={70} /> POWER PEDAL
      </h1>
    </div>
  );
}

export default Hero;
