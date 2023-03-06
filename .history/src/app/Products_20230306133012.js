import React from "react";
import HeroImg from "../../public/assets/hero.png";
import Image from "next/image";

function Products() {
  return (
    <div className="py-8 lg:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        03 - Products
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <div className="lg:flex text-center justify-self-center">
        <p className="font-semibold lg:text-2xl text-xl p-4 my-4">
          At
          <span className="text-goodred text-2xl"> Power Pedal </span>
          we make sure that all the bike's are made for order and delivered to
          your doorstep within <span className="text-goodred">30 day's. </span>
          as each bike is made like a <span className="text-goodred">C4💣</span>
        </p>
      </div>
      <div className="text-center my-2 justify-self-center bg-offwhite p-10 rounded-lg shadow-2xl lg:w-1/2 cursor-pointer lg:hover:scale-105 hover:shadow-2xl">
        <h1 className="text-goodred text-2xl font-semibold flex gap-2 align-middle justify-center text-center">
          Power Pedal Vulcun 750
        </h1>
        <hr className="text-goodblack py-2" />
        <Image
          alt="cycle"
          src={HeroImg}
          className="flex items-center justify-center m-auto p-5 drop-shadow-2xl"
        />
        <p className="font-semibold lg:text-xl p-4 bg-goodblack text-goodwhite w-fit rounded-full">
          Hello World!
        </p>
      </div>
    </div>
  );
}

export default Products;
