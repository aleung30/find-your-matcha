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
          <li className="px-5">
            <Link to="./review" className="text-xl">
              write a review
            </Link>
          </li>
          <button className="bg-[#F1CCCC] rounded-[3px] mx-5 items-center">
            <li className="px-5">
              <Link to="./login" className="text-xl">
                login
              </Link>
            </li>
          </button>

          <button className="bg-[#FADEDA] rounded-[3px] items-center">
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
            {menuOpen ? <IoClose /> : <HiMenu className="text-3l" />}</button>
        </div>
      </div>

      {/* dropdown menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center gap-4 md:hidden">
             <li className="px-5">
            <Link to="./review" onClick={() => setMenuOpen(false)}>
              write a review
            </Link>
          </li>
          <button className="bg-[#F1CCCC] rounded-[3px] mx-5 items-center">
            <li className="px-5">
            <Link to="./login" onClick={() => setMenuOpen(false)}>
                login
              </Link>
            </li>
          </button>

          <button className="bg-[#FADEDA] rounded-[3px] items-center">
            <li className="px-5">
            <Link to="./register" onClick={() => setMenuOpen(false)}>
                sign up
              </Link>
            </li>
            </button>

        </ul>
      )}


    </section>
  );
};
