import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <section>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="./" className="text-xl text-black">
          Logo
        </Link>

        {/* desktop menu */}

        <ul className="hidden md:flex items-center">
            <button className="bg-[#D9D9D9] rounded-[10px] items-center">
          <li className="px-5">
            <Link to="./review" className="text-xl">
              write a review
            </Link>
          </li>
          </button>
          <button className="bg-[#F1CCCC] rounded-[10px] mx-5 items-center">
            <li className="px-5">
              <Link to="./login" className="text-xl">
                login
              </Link>
            </li>
          </button>

          <button className="bg-[#FADEDA] rounded-[10px] items-center">
            <li className="px-5">
              <Link to="./register" className="text-xl">
                sign up
              </Link>
            </li>
          </button>
        </ul>
        {/* mobile menu button */}
        <div className="md:hidden">

        <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose /> : <HiMenu/>}</button>
        </div>
      </div>

      {/* dropdown menu */}
      {menuOpen && (
        <ul className="bg-white absolute flex w-full flex-col items-center gap-6 md:hidden rounded-2xl">
                        <button className="bg-[#D9D9D9] rounded-[10px] items-center p-[3px] mt-10">

                        <li className="px-5">
            <Link to="./review" className="text-xl text-center" onClick={() => setMenuOpen(false)}>
              write a review
            </Link>
          </li>
          </button>
          <button className="bg-[#F1CCCC] rounded-[10px] p-[3px] items-center">
            <li className="px-5">
            <Link to="./login" className="text-xl" onClick={() => setMenuOpen(false)}>
                login
              </Link>
            </li>
          </button>

          <button className="bg-[#FADEDA] rounded-[10px] p-[3px] items-center mb-2">
            <li className="px-5">
            <Link to="./register" className="text-xl" onClick={() => setMenuOpen(false)}>
                sign up
              </Link>
            </li>
            </button>

        </ul>
      )}


    </section>
  );
};
