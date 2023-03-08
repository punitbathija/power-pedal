import React from "react";
import Feature from "../Feature";
import Header from "../Header";

function featuresPage() {
  return (
    <div>
      <Header />
      <Feature />

      <Link href="/">
        <p className="flex  gap-2 justify-center align-middle m-auto justify-items-center `text-center font-semibold text-2xl p4 my-4">
          <AiFillHome /> Go Back Home
        </p>
      </Link>
    </div>
  );
}

export default featuresPage;
