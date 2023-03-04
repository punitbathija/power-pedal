import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero.png";
import TyreImg from "../../public/assets/tyre.svg";

function Hero() {
  return (
    <>
      <div className="bg-offwhite flex-col items-center justify-center align-middle rounded-xl">
        <div className=" lg:flex lg:flex-row flex-col items-center justify-center align-middle lg:mx-56 py-52 lg:py-0">
          <h1 className="lg:text-9xl text-6xl font-light lg:font-semibold mx-auto my-16 lg:my-60 w-fit drop-shadow-2xl">
            POWER PEDAL
          </h1>
          <Image
            src={HeroImg}
            className="flex h-1/3 lg:w-1/2 w-5/6 items-center justify-center m-auto p-5 drop-shadow-2xl"
          />
          <div className="flex-col bg-goodblack text-goodwhite text-center lg:w-52 p-4 rounded-full lg:mb-96 font-semibold shadow-2xl my-4 animate-bounce mx-2">
            <p>
              <b className="text-goodred">New launch</b> Limited edition olive
              variant
            </p>
          </div>
        </div>
        <p className="lg:text-6xl text-2xl lg:mx-56 text-center">
          Ride the Power Feel the Pedal
          <Image
            src={TyreImg}
            className="flex h-1/2 w-2/4 lg:h-1/6 lg:w-1/3 items-center justify-center m-auto hover:animate-spin lg:my-12 py-16"
          />
        </p>
        <p className="text-center font-lg text-xl pb-10">
          Top Speed <span className="text-goodred">50 Kmph</span>
        </p>
      </div>
    </>
  );
}

export default Hero;
