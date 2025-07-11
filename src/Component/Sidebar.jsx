import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Sidebar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState({
    "Office Supplies": false,
    "Automotive Mainten": false,
    "Power Tools": false,
  });
  const sideinfo = [
    "Office Supplies",
    "Automotive Mainten",
    "Power Tools",
    "Pumps",
    "Welding",
    "Cleaning",
    "Safety",
    "LED & Lights",
    "Hand Tools",
    "Electrical",
    "Tooling And Cutting",
  ];
  const subItems = {
    "Office Supplies": [
      { name: "Paper & Notebooks", path: "/paper-notebooks" },
      { name: "Pens & Markers", path: "/pens-markers" },
      { name: "Folder", path: "/folder" },
      { name: "Desk & Organizers",path:"/desk" },
    ],
    "Automotive Mainten": [
      "Audio & Electronics",
      "Interior",
      "Lighting",
      "Wheels & Tires",
      "Accessories",
    ],
    "Power Tools": ["Performance", "Exterior"],
  };
  const toggleAccordion = (category) => {
    setOpenAccordion((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="w-full h-screen ml-10">
      <div className="w-full">
        <h2 className="uppercase font-semibold text-xl px-8 py-5">
          Categories
        </h2>
        <ul className="space-y-2 px-8">
          {sideinfo.map((item, index) => (
            <li
              key={index}
              className="transition-all duration-100 cursor-pointer"
            >
              {subItems[item] ? (
                <div>
                  <div
                    onClick={() => toggleAccordion(item)}
                    className="flex items-center justify-between hover:font-semibold transition-all duration-100"
                  >
                    <span>{item}</span>
                    {openAccordion[item] ? (
                      <IoIosArrowUp className="" />
                    ) : (
                      <IoIosArrowDown className="" />
                    )}
                  </div>

                  {openAccordion[item] && (
                    <ul className="pl-4 pt-1 space-y-1 text-sm text-gray-700">
                      {subItems[item].map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:text-red-500 hover:font-semibold transition-all duration-100"
                        >
                          {typeof subItem === "object" ? (
                            <Link to={subItem.path}>{subItem.name}</Link>
                          ) : (
                            subItem
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <span className="hover:font-semibold transition-all duration-100">
                  {item}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
