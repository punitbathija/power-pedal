import Link from "next/link";
import React from "react";

function paymentsuccess() {
  return (
    <div className="py-8 lg:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold lg:text-xl p-4 bg-offwhite w-fit rounded-full">
        Success
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <p className="font-semibold lg:text-2xl text-xl p-4 my-4">
        <span className="text-goodred text-2xl">
          Your payment was successfull
        </span>{" "}
        Now sit back and relax we will build your order and ship it to you very
        soon
      </p>
      <Link href="/">
        <p className="font-semibold text-2xl p4 my-4">Go Back Home</p>
      </Link>
    </div>
  );
}

export default paymentsuccess;
