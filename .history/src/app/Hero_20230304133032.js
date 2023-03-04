import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero.png";

function Hero() {
  return (
    <div className="bg-goodwhite flex-col justify-center items-center m-auto lg:flex">
      <h1 className="lg:text-9xl text-6xl font-light lg:font-semibold lg:mx-36 mx-8 my-16 lg:my-60 w-fit">
        Power Pedal
        <Image src={HeroImg} width={400} />
      </h1>
    </div>
  );
}

export default Hero;
