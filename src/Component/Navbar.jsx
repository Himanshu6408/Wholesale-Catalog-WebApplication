// import React from "react";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  const menu = [
    { name: "Home", path: "/" },
    { name: "Best Sellers" },
    { name: "All New Sale", path: "/sales" },
    { name: "Buying Guide" },
    { name: "About Us" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="w-full h-10 bg-gray-100 flex gap-3 px-4 items-center">
      {menu.map((item, index) => (
        <Link to={item.path} key={index}>
          <h3 className="text-black ml-9 hover:text-red-400 cursor-pointer">
            {item.name}
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
