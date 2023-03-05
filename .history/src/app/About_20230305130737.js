import React from "react";
import Swiper from "./Swiper";
import slides from "./aboutImages.json";

function About() {
  return (
    <div className="py-8 lg:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        01 - About
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <div className="lg:flex text-center justify-self-center">
        <h1 className="lg:w-1/2 lg:font-mediumlg:text-3xl text-2xl m-auto tracking-wide">
          At PowerPedal, we believe that the future of transportation is
          electric. We are a team of{" "}
          <span className="text-goodred lg:text-5xl">
            passionate cyclists, engineers, and environmentalists
          </span>{" "}
          who are dedicated to creating high-quality electric bikes that are
          both powerful and eco-friendly. Our mission is to empower people to
          take control of their transportation, reduce their carbon footprint,
          and enjoy the ride.
        </h1>
        <br />
        <h1 className="lg:w-1/3 lg:font-mediumlg:text-3xl text-2xl m-auto">
          We believe that eco-friendly products are the answer for the{" "}
          <span className="text-goodred lg:text-5xl">bright future</span>
        </h1>
      </div>
      <div className="flex justify-center justify-items-center">
        <Swiper slides={slides} />
      </div>
    </div>
  );
}

export default About;
