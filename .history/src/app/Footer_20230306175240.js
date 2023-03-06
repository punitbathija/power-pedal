import React from "react";

function Footer() {
  return (
    <div className="bg-goodblack text-center text-goodwhite lg:text-2xl w-full py-5">
      <div className="px-4 lg:flex my-4 text-center justify-around align-middle mx-auto">
        <h1 className="text-xl">POWER PEDAL</h1>
        <ul className="lg:flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Products</li>
          <li>Reviews</li>
          <li>Back to top</li>
        </ul>
      </div>
      <p className="text-sm">
        This website is made for educational purposes and not for commerical use
      </p>

      <p className="text-sm">© 2023, Power Pedal, Inc. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
