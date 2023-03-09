import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

function paymentsuccess() {
  return (
    <div className="text-center py-8 md:mx-56 mx-2 bg-goodwhite text-goodblack">
      <p className="font-semibold md:text-xl p-4 bg-offwhite w-fit rounded-full">
        Success
      </p>
      <hr className="flex my-12 w-[90%] text-center justify-center m-auto" />
      <p className="font-semibold md:text-2xl text-xl p-4 my-4">
        <span className="text-goodred text-2xl">
          Your payment was successfull
        </span>{" "}
        Now sit back and relax we will build your order and ship it to you very
        soon for additional details please check your email
      </p>
      <Link href="/">
        <p className="flex  gap-2 justify-center align-middle m-auto justify-items-center `text-center font-semibold text-2xl p4 my-4">
          <AiFillHome /> Go Back Home
        </p>
      </Link>
    </div>
  );
}

export default paymentsuccess;
