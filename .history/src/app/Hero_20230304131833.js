import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero.jpg";

function Hero() {
  return (
    <div className="bg-goodwhite flex-col lg:flex flex-wrap justify-start lg:justify-center">
      <h1 className="lg:text-9xl text-6xl font-light lg:font-semibold lg:mx-36 mx-8 my-16 lg:my-60">
        Power Pedal
      </h1>
      <Image src={HeroImg} />
    </div>
  );
}

export default Hero;
