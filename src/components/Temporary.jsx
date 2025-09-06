import Map from "./Map";
import paragon from "../assets/paragon.jpg"
import corner from "../assets/corner.jpg"
import nana from "../assets/nana.jpg"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"


export const Temporary = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      {/* Left: Cards section */}
      <div className="w-1/3 bg-[#ECF0E7] p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Top Matcha Spots</h2>

        <div className="bg-[#E7D1D1] shadow rounded-[10px] p-4 mb-4 flex justify-between items-center">
            {/* matcha store title & descriptions */}
            <div className="flex-1">
          <h3 className="text-lg text-[#37532B] font-semibold">Paragon Tea Room Cambie</h3>
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
            <img className="rounded-[10px]" src={paragon}></img>
          </div>
        </div>

        <div className="bg-[#E7D1D1] shadow rounded-[10px]  p-4 mb-4 flex justify-between items-center">
                 {/* matcha store title & descriptions */}
            <div className="flex-1">
          <h3 className="text-lg text-[#37532B] font-semibold">Matcha Corner</h3>
          <p className="text-[#834F4E] mb-2">1148 Kingsway</p>
          <div className="flex mb-2">
          <AiFillStar className="text-[#37532B]"></AiFillStar>
          <AiFillStar className="text-[#37532B]"></AiFillStar>
          <AiFillStar className="text-[#37532B]"></AiFillStar>
          <AiFillStar className="text-[#37532B]"></AiFillStar>
          <AiOutlineStar className="text-[#37532B]"></AiOutlineStar>


          
          </div>

          <p className="text-gray-600">"Cozy atmosphere, highly recommend."</p>
          </div>
            {/* matcha store picture */}
          <div className="flex-1">
          <img className="rounded-[10px]" src={corner}></img>

          </div>
        </div>

        <div className="bg-[#E7D1D1] shadow rounded-[10px]  p-4 flex items-center justify-between">
                         {/* matcha store title & descriptions */}
            <div className="flex-1">
          <h3 className="text-lg text-[#37532B] font-semibold">Nana's Green Tea</h3>
          <p className="text-[#834F4E] mb-2">159 W 4th Ave</p>
          <div className="flex mb-2">
          <AiFillStar className="text-[#37532B]"></AiFillStar>
          <AiFillStar className="text-[#37532B]"></AiFillStar>
          <AiFillStar className="text-[#37532B]"></AiFillStar>
          <AiFillStar className="text-[#37532B]"></AiFillStar>
          <AiOutlineStar className="text-[#37532B]"></AiOutlineStar>


          
          </div>

          <p className="text-gray-600">"Refreshing drinks and friendly staff."</p>
        </div>
                    {/* matcha store picture */}
                    <div className="flex-1">
                    <img className="rounded-[10px]" src={nana}></img>

                    </div>

        </div>
      </div>

      {/* Right: Map */}
      <div className="flex-1 w-2/3 h-full bg-[#ECF0E7]">
        <Map className="h-full w-full" />
      </div> 
    </div>
  );
};
