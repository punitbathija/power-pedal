import React from "react";

function About() {
  return (
    <div className="py-8 lg:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        01 - About
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <div className="lg:flex flex-col gap-8 text-center justify-self-center">
        <h1 className="w-1/2 font-medium lg:text-5xl text-2xl m-auto">
          We are bringing a <span className="text-goodred">new era</span> of
          driving amazing new bikes as the answer to the modern future
        </h1>
        <h1 className="w-1/2 font-medium lg:text-5xl text-2xl m-auto">
          We believe that eco-friendly products are the answer for the{" "}
          <span className="text-goodred">bright future</span>
        </h1>
      </div>
    </div>
  );
}

export default About;
