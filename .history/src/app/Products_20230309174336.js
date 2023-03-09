"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BiPurchaseTag } from "react-icons/bi";
import GreenImg from "../../public/assets/hero.png";
import SkinImg from "../../public/assets/skin.png";
import BlackImg from "../../public/assets/black.png";
import BelarImg from "../../public/assets/belar.png";
import { checkout } from "../../checkout";

function Products() {
  const [selectedColor, setSelectedColor] = useState("green");

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="py-8 md:mx-56 bg-goodblack text-goodwhite">
      <p className="font-semibold md:text-xl p-4 text-goodblack bg-offwhite w-fit rounded-full">
        03 - Products
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <div className="md:flex text-center justify-self-center">
        <p className="font-semibold md:text-2xl text-xl p-4 my-4">
          At
          <span className="text-goodred text-2xl"> Power Pedal </span>
          we make sure that all the bike&apos;s are made for order and delivered
          to your doorstep within{" "}
          <span className="text-goodred">30 day&apos;s. </span>
          as each bike is made like a <span className="text-goodred">C4💣</span>
        </p>
      </div>
      <div className="md:flex gap-4 shadow-2xl p-6 rounded-md">
        <div className="text-center my-2 justify-self-center bg-offwhite p-10 rounded-lg shadow-2xl md:w-1/2 cursor-pointer hover:shadow-2xl">
          <h1 className="text-goodblack text-3xl font-semibold flex gap-2 align-middle justify-center text-center">
            Power Pedal Vulcun 750
          </h1>
          <hr className="text-goodblack py-2" />
          {selectedColor === "green" && (
            <Image
              alt="cycle"
              src={GreenImg}
              className="flex items-center justify-center m-auto p-5 drop-shadow-2xl md:my-20"
            />
          )}
          {selectedColor === "skin" && (
            <Image
              alt="cycle"
              src={SkinImg}
              className="flex items-center justify-center m-auto p-5 drop-shadow-2xl md:my-20"
            />
          )}
          {selectedColor === "black" && (
            <Image
              alt="cycle"
              src={BlackImg}
              className="flex items-center justify-center m-auto p-5 drop-shadow-2xl md:my-20"
            />
          )}

          <h1 className="text-goodblack text-xl font-semibold text-center">
            <span className="text-goodred">Power Pedal Vulcun 750</span> is a
            beast of a cycle it has a range of 50 km&apos;s and battery life of
            3.5 hours/charge
          </h1>
          <div className="my-4 flex gap-3 justify-center justify-items-center align-middle w-fit mx-auto text-center">
            <p
              className="text-center bg-olivegreen w-6 rounded-full text-transparent"
              onClick={() => handleColor("green")}
            >
              .
            </p>
            <p
              className="text-center bg-skin w-6 rounded-full text-transparent"
              onClick={() => handleColor("skin")}
            >
              .
            </p>
            <p
              className="text-center bg-black w-6 rounded-full text-transparent"
              onClick={() => handleColor("black")}
            >
              .
            </p>
          </div>
          <div className="my-4 flex flex-col gap-3 justify-center justify-items-center align-middle w-fit mx-auto text-center text-xl">
            <span className=" text-goodblack font-semibold text-2xl align-middle text-center line-through">
              Orignal Price: ₹15,999
            </span>
            <span className=" text-goodred font-semibold text-2xl align-middle text-center">
              Offer Price: ₹13,999
            </span>
            <button
              className="flex justify-center text-center gap-1 align-middle justify-items-center m-auto p-2 border-none rounded-2xl text-xl font-semibold bg-goodblack text-goodwhite hover:scale-105 hover:shadow-2xl"
              onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1MittfSInsGWGoGdG2km7kCo",
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
              Buy Now <BiPurchaseTag />
            </button>
          </div>
        </div>
        <div className="text-center my-2 justify-self-center bg-offwhite p-10 rounded-lg shadow-2xl md:w-1/2 cursor-pointer hover:shadow-2xl">
          <h1 className="text-goodblack text-3xl font-semibold flex gap-2 align-middle justify-center text-center">
            Power Pedal Belar 350
          </h1>
          <hr className="text-goodblack py-2" />
          <Image
            alt="cycle"
            src={BelarImg}
            className="flex items-center justify-center m-auto p-5 drop-shadow-2xl md:my-2"
          />
          <h1 className="text-goodblack text-xl font-semibold text-center">
            <span className="text-goodred">Power Pedal Belar 350</span> is a a
            cycle for the thinkers its comfort makes you ride the bike for long
            hours it has a range of 20 km&apos;s and battery life of 2
            hours/charge
          </h1>
          <div className="my-4 flex gap-3 justify-center justify-items-center align-middle w-fit mx-auto text-center">
            <p className="text-center bg-black w-6 rounded-full text-transparent">
              .
            </p>
          </div>
          <div className="my-4 flex flex-col gap-3 justify-center justify-items-center align-middle w-fit mx-auto text-center text-xl">
            <span className=" text-goodblack font-semibold text-2xl align-middle text-center line-through">
              Orignal Price: ₹11,999
            </span>
            <span className=" text-goodred font-semibold text-2xl align-middle text-center">
              Offer Price: ₹9,999
            </span>
            <button
              className="flex justify-center text-center gap-1 align-middle justify-items-center m-auto p-2 border-none rounded-2xl text-xl font-semibold bg-goodblack text-goodwhite hover:scale-105 hover:shadow-2xl"
              onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1MitvsSInsGWGoGdXYq7A7eh",
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
              Buy Now <BiPurchaseTag />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
