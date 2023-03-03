import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo.jpg";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Image src={Logo} />
          </li>
          <li>About</li>
          <li>Feature</li>
          <li>Products</li>
          <li>Order Now</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
