import React from "react";

function Feature() {
  return (
    <div className="py-8 lg:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        01 - Features
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <div className="text-center justify-self-center">
        <div className="lg:flex text-center justify-self-center bg-goodblack p-10 rounded-lg shadow-2xl">
          <h1 className="text-goodwhite text-2xl font-light">Performance</h1>
          <p className="text-goodwhite text-2xl font-light ">
            The bike offers a range of upto{" "}
            <span className="text-goodred">25 Km's</span>
            i'ts build with over
            <span className="text-goodred">200 Components</span>
            all bind to hold up to the elements on long road.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
