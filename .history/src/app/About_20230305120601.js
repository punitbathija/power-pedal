import React from "react";

function About() {
  return (
    <div className="py-8 lg:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        01 - About
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <div className="flex gap-4 text-center justify-self-center">
        <h1 className="w-1/2 font-medium lg:text-4xl text-2xl m-auto leading-4">
          At PowerPedal, we believe that the future of transportation is
          electric. We are a team of{" "}
          <span className="text-goodred text-5xl">
            passionate cyclists, engineers, and environmentalists
          </span>{" "}
          who are dedicated to creating high-quality electric bikes that are
          both powerful and eco-friendly. Our mission is to empower people to
          take control of their transportation, reduce their carbon footprint,
          and enjoy the ride.
        </h1>
        <h1 className="w-1/3 font-medium lg:text-4xl text-2xl m-auto">
          We believe that eco-friendly products are the answer for the{" "}
          <span className="text-goodred text-5xl">bright future</span>
        </h1>
      </div>
    </div>
  );
}

export default About;
