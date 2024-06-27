import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div>
      <div className="container mx-auto flex justify-around items-center p-4">
        <img src={logo} alt="Logo" className="h-[4rem] w-auto" />
      </div>
        <nav className="p-2">
          <div className="container mx-auto flex justify-around items-center">
            <div className="w-full md:flex md:items-center md:w-auto">
              <div className="flex justify-between ">
                <a
                  href="#"
                  className="block mt-4 text-xl bold md:inline-block md:mt-0 text-white hover:text-gray-300 font-poppins mr-24"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block mt-4 text-xl bold md:inline-block md:mt-0 text-white hover:text-gray-300 font-poppins mr-24"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block mt-4 text-xl bold md:inline-block md:mt-0 text-white hover:text-gray-300 font-poppins mr-24"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block mt-4 text-xl bold md:inline-block md:mt-0  text-white hover:text-gray-300 font-poppins mr-24"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="block mt-4 text-xl bold md:inline-block md:mt-0 text-white hover:text-gray-300 font-poppins mr-24"
                >
                  Help
                </a>
                <button
      className="border hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-5">
      Login
    </button>
    <button
      className="border hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
      Sign In 
    </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
