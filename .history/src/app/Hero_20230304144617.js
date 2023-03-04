import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero.png";
import TyreImg from "../../public/assets/tyre.svg";

function Hero() {
  return (
    <>
      <div className="bg-goodwhite flex-col items-center justify-center align-middle">
        <div className=" lg:flex lg:flex-row flex-col items-center justify-center align-middle lg:mx-56">
          <h1 className="lg:text-9xl text-6xl font-light lg:font-semibold mx-auto my-16 lg:my-60 w-fit">
            POWER PEDAL
          </h1>
          <Image
            src={HeroImg}
            className="flex h-1/3 lg:w-1/2 w-2/3 items-center justify-center m-auto p-5"
          />
          <div className="flex-col bg-goodblack text-goodwhite w-52 p-4 rounded-xl mb-96">
            <p>New launch of limited edition olive variant</p>
          </div>
        </div>
        <p className="lg:text-6xl text-2xl my-8 lg:mx-56 text-center">
          ride the power feel the pedal
          <Image
            src={TyreImg}
            className="flex h-1/6 lg:w-1/2 items-center justify-center m-auto hover:animate-spin p-36"
          />
        </p>
      </div>
    </>
  );
}

export default Hero;
