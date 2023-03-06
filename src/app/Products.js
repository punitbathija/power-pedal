import React from "react";

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
    </div>
  );
}

export default Products;
