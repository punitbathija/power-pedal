import React from "react";
import { AiFillHome } from "react-icons/ai";
import Header from "../Header";
import Reviews from "../Reviews";

function reviewPage() {
  return (
    <div>
      <Header />
      <Reviews />

      <Link href="/">
        <p className="flex  gap-2 justify-center align-middle m-auto justify-items-center `text-center font-semibold text-2xl p4 my-4">
          <AiFillHome /> Go Back Home
        </p>
      </Link>
    </div>
  );
}

export default reviewPage;
