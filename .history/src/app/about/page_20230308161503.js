import React from "react";
import Header from "../Header";
import About from "../About";
import { AiFillHome } from "react-icons/ai";
function AboutPage() {
  return (
    <div>
      <Header />
      <About />
      <Link href="/">
        <p className="flex  gap-2 justify-center align-middle m-auto justify-items-center `text-center font-semibold text-2xl p4 my-4">
          <AiFillHome /> Go Back Home
        </p>
      </Link>
    </div>
  );
}

export default AboutPage;
