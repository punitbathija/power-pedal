import React from "react";
import { CgPerformance } from "react-icons/cg";
import { GiStoneCrafting } from "react-icons/gi";
import { TbToolsKitchen } from "react-icons/tb";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { IoIosSpeedometer } from "react-icons/io";
import { AiOutlineDisconnect } from "react-icons/ai";

function Feature() {
  return (
    <div className="py-8 lg:mx-56 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        02 - Features
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <p className="font-semibold lg:text-2xl text-xl p-4 my-4">
        <span className="text-goodred text-2xl">Power Pedal Vulcun 750 </span>
        bike is designed with you in mind, crafted to the highest standard.
        Every custom detail is integrated seamlessly into the frame for a new
        form of performance.
      </p>
      <div className="lg:flex lg:flex-wrap lg:gap-5 justify-center text-center justify-self-center mx-2 lg:mx-0">
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer lg:hover:scale-105 hover:shadow-2xl">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center">
            PERFORMANCE
            <CgPerformance />
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light ">
            The bike offers a range of upto{" "}
            <span className="text-goodred">50 Km's</span> i'ts build with over
            <span className="text-goodred"> 200 Components </span>
            all bind to hold up to the elements on long road.
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer lg:hover:scale-105 hover:shadow-2xl">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center">
            CRAFTMANSHIP
            <GiStoneCrafting />
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light text-center">
            Engineered at the{" "}
            <span className="text-goodred">highest standard</span> the bike is
            made
            <span className="text-goodred"> like a C4 </span>
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer lg:hover:scale-105 hover:shadow-2xl">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center">
            MATERIALS
            <TbToolsKitchen />
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light ">
            Premium materials are used for every{" "}
            <span className="text-goodred">bespoke detail</span> on the surface
            and within
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer lg:hover:scale-105 hover:shadow-2xl">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center">
            BATTERY
            <RiBattery2ChargeLine />
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light ">
            The battery comes with a design standout frame so only frame is
            required to charge <span className="text-goodred">50 Km's</span>{" "}
            range in single charge
            <span className="text-goodred"> charging time 3.5 hours</span>
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer lg:hover:scale-105 hover:shadow-2xl">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center">
            SPEED
            <IoIosSpeedometer />
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light ">
            The bike fuels your every need at any speed simply press ahead and
            it senses need <span className="text-goodred">for power</span> Top
            speed on the bike<span className="text-goodred"> 50km/ph</span>
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer lg:hover:scale-105 hover:shadow-2xl">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center">
            CONNECTIVITY
            <AiOutlineDisconnect />
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light ">
            The bike log's all activites on to the{" "}
            <span className="text-goodred">mobile app</span> location, distance,
            speed, ect
            <span className="text-goodred">
              {" "}
              common health features are included in app
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
