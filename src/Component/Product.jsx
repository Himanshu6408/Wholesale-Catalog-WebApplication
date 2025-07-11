import React, { useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import card4 from "../assets/card4.webp";
import card5 from "../assets/card5.webp";

// Make sure each product has a unique ID
const products = [
  {
    id: 1,
    image: card1,
    title: "AF Silver Car Cover",
    price: "$88.00",
    tag: "New",
  },
  { id: 2, image: card2, title: "AF Brake Disc", price: "$88.00", tag: "Sale" },
  { id: 3, image: card3, title: "AF Exhaust Pipe", price: "$88.00" },
  {
    id: 4,
    image: card4,
    title: "AF Wooden Steering",
    price: "$88.00",
    tag: "Hot",
  },
  {
    id: 5,
    image: card5,
    title: "Bosch Hammer Drill",
    price: "$88.00",
    tag: "New",
  },
  { id: 6, image: card1, title: "Car Mat", price: "$88.00" },
  {
    id: 1,
    image: card1,
    title: "AF Silver Car Cover",
    price: "$88.00",
    tag: "New",
  },
  { id: 2, image: card2, title: "AF Brake Disc", price: "$88.00", tag: "Sale" },
  { id: 3, image: card3, title: "AF Exhaust Pipe", price: "$88.00" },
  {
    id: 4,
    image: card4,
    title: "AF Wooden Steering",
    price: "$88.00",
    tag: "Hot",
  },
  {
    id: 5,
    image: card5,
    title: "Bosch Hammer Drill",
    price: "$88.00",
    tag: "New",
  },
  { id: 6, image: card1, title: "Car Mat", price: "$88.00" },
  {
    id: 1,
    image: card1,
    title: "AF Silver Car Cover",
    price: "$88.00",
    tag: "New",
  },
  { id: 2, image: card2, title: "AF Brake Disc", price: "$88.00", tag: "Sale" },
  { id: 3, image: card3, title: "AF Exhaust Pipe", price: "$88.00" },
  {
    id: 4,
    image: card4,
    title: "AF Wooden Steering",
    price: "$88.00",
    tag: "Hot",
  },
  {
    id: 5,
    image: card5,
    title: "Bosch Hammer Drill",
    price: "$88.00",
    tag: "New",
  },
  { id: 6, image: card1, title: "Car Mat", price: "$88.00" },
];

function Product() {
  const scrollRef = useRef();
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="w-full mt-10 relative px-4">
      <h2 className="text-2xl font-bold text-black mb-4">
        Bestselling Products
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-red-500 text-white p-2 rounded-r"
      >
        <MdArrowBackIos />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-red-500 text-white p-2 rounded-l"
      >
        <MdArrowForwardIos />
      </button>
 
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth hide-scrollbar pb-4"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[220px] max-w-[220px] bg-white rounded shadow p-3"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="h-[150px] w-full object-contain mb-2"
              />
              {product.tag && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                  {product.tag}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-800 font-medium mb-1">
              {product.title}
            </p>
            <p className="font-bold text-black">{product.price}</p>
            <div className="flex">
              <button className="mt-2 cursor-pointer w-full text-sm border border-red-500 text-red-500 py-1 rounded hover:bg-red-500 hover:text-white transition">
                Add to Cart
              </button>
              <FaHeart
                className={`cursor-pointer mt-3 ml-1 text-xl transition-colors duration-200 ${
                  likedItems[product.id] ? "text-red-500" : "text-gray-600"
                }`}
                onClick={() => toggleLike(product.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
