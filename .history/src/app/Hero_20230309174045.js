import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero.png";
import TyreImg from "../../public/assets/tyre.svg";

function Hero() {
  return (
    <>
      <div className="bg-offwhite flex-col items-center justify-center align-middle">
        <div className=" md:flex md:flex-row flex-col items-center justify-center align-middle md:mx-56 py-52 md:py-0">
          <h1 className="md:text-9xl text-6xl font-light md:font-semibold mx-auto my-16 md:my-60 w-fit px-2 drop-shadow-2xl">
            POWER PEDAL
          </h1>
          <Image
            alt="cycle"
            src={HeroImg}
            className="flex h-1/3 md:w-1/2 w-5/6 items-center justify-center m-auto p-5 drop-shadow-2xl"
          />
          <div className="flex-col bg-goodblack text-goodwhite text-center md:w-52 p-4 rounded-full md:mb-96 font-semibold shadow-2xl my-4 animate-bounce mx-2">
            <p>
              <b className="text-goodred">New launch</b> Limited edition olive
              variant
            </p>
          </div>
        </div>
        <p className="md:text-6xl text-2xl md:mx-56 text-center">
          Ride the Power Feel the Pedal
          <Image
            alt="wheel"
            src={TyreImg}
            className="flex h-1/2 w-2/4 md:h-1/6 md:w-1/3 items-center justify-center m-auto hover:animate-spin md:my-12 py-16"
          />
        </p>
        <p className="text-center font-lg text-xl md:text-2xl pb-10 drop-shadow-2xl">
          Top Speed <span className="text-goodred">50 Kmph</span>
        </p>
      </div>
    </>
  );
}

export default Hero;
