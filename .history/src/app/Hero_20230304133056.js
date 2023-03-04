import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero.png";

function Hero() {
  return (
    <div className="bg-goodwhite flex-col justify-center items-center m-auto lg:flex">
      <h1 className="">Power Pedal</h1>
      <Image src={HeroImg} width={400} />
    </div>
  );
}

export default Hero;
