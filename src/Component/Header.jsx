import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (currency) => {
    setSelectedCurrency(currency); // set selected currency
    setIsOpen(false); // close dropdown
  };

  return (
    <div className="h-24 w-full bg-black">
      <div className=" h-12 flex justify-between">
        <p className="text-white px-14 py-4">Your first order ships FREE</p>
        <div className="flex py-4 px-8">
          <h3 className="text-white">Select Currency:</h3>
          <button
            onClick={toggleDropdown}
            className="text-white underline underline-offset-[3px] px-4 cursor-pointer"
          >
            {selectedCurrency}
          </button>

          {isOpen && (
            <div className="absolute mt-1 w-11 bg-white border border-gray-200 z-10 ml-32">
              <ul className="py-1 text-black text-sm">
                {["USD", "INR", "GBP", "EUR", "JPY"].map((currency) => (
                  <li
                    key={currency}
                    onClick={() => handleSelect(currency)}
                    className="px-3 py-1 hover:bg-blue-500 hover:text-white"
                  >
                    {currency}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="h-12 flex">
        {/* <img className="px-14 mt-[9px] h-6" src={logo} alt="Logo"  /> */}
        <Link to="/">
          <img className="px-14 mt-[9px] h-6" src={logo} alt="Logo" />
        </Link>
        <input
          className="h-9 mt-[-8px] w-1/4 bg-white pl-9 text-gray-400 italic text-sm outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="bg-gray-500 h-[2.43vw] w-10 mt-[-9px] flex items-center justify-center text-white">
          <IoSearchSharp
            className="hover:text-red-500 cursor-pointer"
            size={"1.5em"}
          />
          <p className="text-white text-sm px-3 py-1 whitespace-nowrap absolute left-[52%]">
            HOTLINE:
            <span className="underline underline-offset-[5.5px]">
              1-900-9999
            </span>
          </p>
        </div>

        <h2 className="text-white whitespace-pre-wrap absolute left-[84%] uppercase  hover:text-red-500">
          <Link to="/sign">Sign In</Link>
          <span className="ml-3">|</span>
        </h2>

        <h2 className="text-white whitespace-pre-wrap absolute left-[89.6%] uppercase hover:text-red-500 cursor-pointer">
          Register
        </h2>
      </div>
    </div>
  );
}

export default Header;
