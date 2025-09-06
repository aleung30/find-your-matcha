import Map from "./Map";
import paragon from "../assets/paragon.jpg";
import corner from "../assets/corner.jpg";
import nana from "../assets/nana.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Searchbox from "./Searchbox";
import { useState } from "react";

export const Temporary = () => {
    const [inputValue, setInputValue] = useState(null);

  return (
    <div className="h-screen justify-center flex flex-col">
      {/* Left: Cards section */}
      <h2 className="text-xl font-bold mb-4 text-center">Top Matcha Spots of the Month 🍵</h2>
      <div className="w-full bg-[#ECF0E7] p-4 overflow-x-auto h-1/3 flex gap-6">
        <div className="bg-[#E7D1D1] shadow rounded-[10px] p-4  flex justify-between items-center">
          {/* matcha store title & descriptions */}
          <div className="flex-1">
            <h3 className="text-lg text-[#37532B] font-semibold">
              Paragon Tea Room Cambie
            </h3>
            <p className="text-[#834F4E] mb-2">3361 Cambie Street</p>
            <div className="flex mb-2">
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
            </div>

            <p className="text-gray-600">"Great matcha and vibes!"</p>
          </div>
          {/* matcha store picture */}
          <div className="flex-1">
            <img className="rounded-[10px] w-full h-64" src={paragon}></img>
          </div>
        </div>

        <div className="bg-[#E7D1D1] shadow rounded-[10px]  p-4  flex justify-between items-center">
          {/* matcha store title & descriptions */}
          <div className="flex-1">
            <h3 className="text-lg text-[#37532B] font-semibold">
              Matcha Corner
            </h3>
            <p className="text-[#834F4E] mb-2">1148 Kingsway</p>
            <div className="flex mb-2">
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiOutlineStar className="text-[#37532B]"></AiOutlineStar>
            </div>

            <p className="text-gray-600">
              "Cozy atmosphere, highly recommend."
            </p>
          </div>
          {/* matcha store picture */}
          <div className="flex-1">
            <img className="rounded-[10px] w-full h-64" src={corner}></img>
          </div>
        </div>

        <div className="bg-[#E7D1D1] shadow rounded-[10px]  p-4 flex items-center justify-between">
          {/* matcha store title & descriptions */}
          <div className="flex-1">
            <h3 className="text-lg text-[#37532B] font-semibold">
              Nana's Green Tea
            </h3>
            <p className="text-[#834F4E] mb-2">159 W 4th Ave</p>
            <div className="flex mb-2">
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiFillStar className="text-[#37532B]"></AiFillStar>
              <AiOutlineStar className="text-[#37532B]"></AiOutlineStar>
            </div>

            <p className="text-gray-600">
              "Refreshing drinks and friendly staff."
            </p>
          </div>
          {/* matcha store picture */}
          <div className="flex-1">
            <img className="rounded-[10px] w-full h-64" src={nana}></img>
          </div>
        </div>
      </div>

      {/* Bottom: Searchbox & Map */}
      <div className="flex flex-1 justify-between gap-6 p-4">
  
              {/* Left: Searchbox */}
              <div className="w-1/3 p-4 bg-[#E7D1D1] rounded-[10px] ">
              <Searchbox
               />

              </div>

      {/* Right: Map */}
      <div className="h-full w-2/3">
    
  
        <Map className="p-4"></Map>
        </div>
        </div>
   

       


    
    </div>
  );
};