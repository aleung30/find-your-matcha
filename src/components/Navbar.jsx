import React from "react";
import {Link} from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }



    return <section>

{!isOpen && (
            <div className="cursor-pointer md:hidden"> 
            <HiMenu size={30}/>
            </div>
        )}
        <div className="hidden md:flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="./" className="text-xl text-black">Logo</Link>


        <ul className="flex">
        <li className="px-5">
                <Link to= "./review" className="text-xl">write a review</Link>
            </li>
            <button className="bg-[#F1CCCC] rounded-[3px] mx-5 items-center">

            <li className="px-5">
                <Link to= "./login">login</Link>
            </li>
            </button>

            <button className="bg-[#FADEDA] rounded-[3px] items-center">
            <li className="px-5">
                <Link to= "./login" className="text-xl">sign up</Link>
            </li>
            </button>
         
        </ul>

        </div>
    </section>
}