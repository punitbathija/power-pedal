import React from "react";
import SwiperReviews from "./SwiperReviews";
import slides from "./reviewImages.json";

function Reviews() {
  return (
    <div className="py-8 lg:mx-56 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        04 - Reviews
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <p className="font-semibold lg:text-2xl text-xl p-4 my-4">
        <span className="text-goodred text-2xl">Our Customers Love Us❤️ </span>
        Here are some of genuine comments from our customers.
      </p>
      <SwiperReviews slides={slides} />
    </div>
  );
}

export default Reviews;
