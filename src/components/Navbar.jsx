import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import supabase from "../helper/supabaseClient";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  const isOnReviewPage = location.pathname === "/review";

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
  
        <Link to="/" className="text-xl text-black flex gap-5">
        <img className="h-15 w-15" src={logo}/>
        <div className="flex-1">
        <p className="font-semibold text-[#37532B]">
            Find Your
        </p>
        <p className="font-bold text-black">Matcha</p>
        </div>

        </Link>


        {/* desktop menu */}

        <ul className="hidden md:flex items-center gap-4">
          {!isOnReviewPage && (
            <li>
              <Link to="/review" className=" px-5 py-2 text-xl font-semibold">
                write a review
              </Link>
            </li>
          )}

          {!authenticated ? (
            <>
                        <li>
            <Link to="/login" className="bg-[#F1CCCC] rounded-[10px] px-5 py-2 text-xl font-semibold">
              login
            </Link>
          </li>

          <li>
            <Link to="/register" className="bg-[#FADEDA] rounded-[10px] px-5 py-2 text-xl font-semibold">
              sign up
            </Link>
          </li>
            </>
          ) : (
            <li>
              <button onClick={handleSignOut}
              className="bg-red-400 rounded-[10px] px-5 py-2 text-xl text-white">
                sign out
              </button>
            </li>
          )}

        </ul>
        {/* mobile menu button */}
        <div className="md:hidden">

        <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={28} /> : <HiMenu size={28}/>}</button>
        </div>
      </div>

      {/* dropdown menu */}
      {menuOpen && (
        <ul className="bg-white absolute top-16 left-0 w-full flex flex-col items-center gap-4 md:hidden rounded-2xl p-6 z-50">

          <li className="w-full">
            <Link to="/review" className="block w-full text-center bg-[#D9D9D9] rounded-[10px] px-5 py-2 text-xl"
            onClick={() => setMenuOpen(false)}>
              write a review
            </Link>
          </li>
          {!authenticated ? (
            <>
              
              <li className="w-full">
              <Link to="/login" className="block w-full text-center bg-[#F1CCCC] rounded-[10px] px-5 py-2 text-xl"
              onClick={() => setMenuOpen(false)}>
                login
                </Link>
              </li>

            
              <li className="w-full">
              <Link to="/register" className="block w-full text-center bg-[#FADEDA] rounded-[10px] px-5 py-2 text-xl"
              onClick={() => setMenuOpen(false)}>
                  sign up
                </Link>
              </li>
            </>
          ) : (
            <li className="w-full">
              <button onClick={() => {
                handleSignOut();
                setMenuOpen(false);
                }} 
                className="w-full bg-red-400 rounded-[10px] px-5 py-2 text-xl text-white">
                  sign out
              </button>
            </li>
          )}
        </ul>
      )}


    </section>
  );
};
