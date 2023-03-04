import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero.png";

function Hero() {
  return (
    <div className="bg-goodwhite lg:flex flex-col items-center justify-center">
      <h1 className="lg:text-9xl text-6xl font-light lg:font-semibold lg:mx-36 mx-8 my-16 lg:my-60 w-fit">
        Power Pedal
      </h1>
      <Image src={HeroImg} width={650} height={250} />
    </div>
  );
}

export default Hero;
