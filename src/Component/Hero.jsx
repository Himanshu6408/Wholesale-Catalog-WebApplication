import React, { useState } from "react";
import car from "../assets/car.webp";
import card2 from "../assets/pop-bg.jpg";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Product from "./Product";
import { Link } from "react-router-dom";

const images = [car, card2];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState({
    "Office Supplies": false,
    "Automotive Mainten": false,
    "Power Tools": false,
  });

  return (
    <div className="w-full p-5 bg-gray-100 relative ">
      <div className=" top-[-645%] left-[25%] ">
        {/* Right: Image Slider */}
        <div className="w-1/1 relative h-[350px] mr-20">
          <img
            src={images[currentIndex]} 
            alt="slider"
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
            >
              <div className="p-4 bg-amber-50 hover:bg-red-500 hover:text-white cursor-pointer">
                <MdArrowBackIos size={"1em"} />
              </div>
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % images.length)
              }
            >
              <div className="p-4 bg-amber-50 hover:bg-red-500 hover:text-white cursor-pointer">
                <MdArrowForwardIos size={"1em"} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
