import React from "react";
import { Link, Outlet } from "react-router-dom";

function Createaccount() {
  return (
    <div>
      <div className="w-[100vh] h-[81vh] relative">
        <div className="absolute top-[15%] left-[45vh]">
          <h1 className="uppercase font-semibold text-xl">Register</h1>
          <p className="w-[35vw] text-center ml-[-210px] mt-2 text-gray-900">
            Create a new account. Once you‘ve set it up, you can take advantage
            of many benifits of membership.
          </p>
          <div className="w-[25vw] ml-[-63%]">
            <input
              className="border-b-2 w-3/2 mt-3 outline-none py-2"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border-b-2 w-3/2 mt-4 outline-none py-2"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="border-b-2 w-3/2 mt-4 outline-none py-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="border-b-2 w-3/2 mt-4 outline-none py-2"
              type="password"
              placeholder="Password"
            />

            <button className="uppercase bg-red-600 text-white font-bold w-[38vw] h-10 mt-10 cursor-pointer">
              create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
