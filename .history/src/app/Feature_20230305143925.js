import React from "react";
import { CgPerformance } from "react-icons/cg";

function Feature() {
  return (
    <div className="py-8 lg:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        01 - Features
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <div className="lg:flex lg:flex-wrap lg:gap-5 justify-center text-center justify-self-center">
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center hover:text-goodred">
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
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center hover:text-goodred">
            CRAFTMANSHIP
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light text-center">
            Engineered at the{" "}
            <span className="text-goodred">highest standard</span> the bike is
            made
            <span className="text-goodred"> like a C4 </span>
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center hover:text-goodred">
            MATERIALS
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light ">
            Premium materials are used for every{" "}
            <span className="text-goodred">bespoke detail</span> on the surface
            and within
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center hover:text-goodred">
            BATTERY
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light ">
            The battery comes with a design standout frame so only frame is
            required to charge <span className="text-goodred">50 Km's</span>{" "}
            range in single charge
            <span className="text-goodred"> charging time 3.5 hours</span>
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center hover:text-goodred">
            SPEED
          </h1>
          <hr className="text-goodwhite py-2" />
          <p className="text-goodwhite text-2xl font-light ">
            The bike fuels your every need at any speed simply press ahead and
            it senses need <span className="text-goodred">for power</span> Top
            speed on the bike<span className="text-goodred"> 50km/ph</span>
          </p>
        </div>
        <div className="text-center my-2 justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl lg:w-1/4 cursor-pointer">
          <h1 className="text-goodwhite text-2xl font-semibold flex gap-2 align-middle justify-center text-center hover:text-goodred">
            CONNECTIVITY
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
