import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero.png";

function Hero() {
  return (
    <div className="bg-goodwhite lg:flex lg:flex-row flex-col items-center justify-center align-middle m-auto">
      <h1 className="lg:text-9xl text-6xl font-light lg:font-semibold mx-auto my-16 lg:my-60 w-fit">
        Power Pedal
      </h1>
      <Image
        src={HeroImg}
        className="flex h-1/3 lg:w-1/2 w-2/3 items-center justify-center m-auto p-5 mt-10"
      />
    </div>
  );
}

export default Hero;