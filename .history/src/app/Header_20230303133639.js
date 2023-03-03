import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo.png";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <img src={Logo} height={60} width={60} />
          </li>
          <li>About</li>
          <li>Feature</li>
          <li>Products</li>
          <li>Order</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
