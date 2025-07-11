import React from "react";
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div className="w-[100vh] h-[81vh] relative">
      <div className="absolute top-[15%] left-[45vh]">
        <h1 className="uppercase font-semibold ">sign in</h1>
        <p className="w-full ml-[-210px] mt-3 whitespace-nowrap text-gray-900">
          Sign in below using your Wholesale Large Catalog Layout information.
        </p>
        <div className="w-[25vw] ml-[-63%]">
          <input
            className="border-b-2 w-3/2 mt-8 outline-none py-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="border-b-2 w-3/2 mt-4 outline-none py-2"
            type="password"
            placeholder="Password"
          />
          <p className="ml-[108%] w-full mt-6 text-red-500 cursor-pointer">
            Forgot your password?
          </p>
          <button className="uppercase bg-red-600 text-white font-bold w-[38vw] h-10 mt-10 cursor-pointer">
            Sign in
          </button>
          <h4 className="uppercase text-center ml-26 mt-10 w-full">
            NOT MEMBER? BECOME ON TODAY
          </h4>
          <Link to="/account">
            <p className="text-center ml-25 mt-1 w-full text-red-500">
              Create account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sign;
