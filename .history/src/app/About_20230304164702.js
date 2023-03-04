import React from "react";

function About() {
  return (
    <div className="py-8 lg:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        01 - About
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <div className="flex"></div>
      <h1 className="w-1/2">
        We are bringing a <span className="text-goodred">new era</span> of
        driving amazing new bikes as the answer to the modern future
      </h1>
      <h1 className="w-1/2">
        We believe that eco-friendly products are the answer for the{" "}
        <span>bright future</span>
      </h1>
    </div>
  );
}

export default About;