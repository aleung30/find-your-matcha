import leaves from "../assets/leaves.png"
import matchabowl from "../assets/matchabowl.png"
import { Register } from './Register'
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="relative bg-[#ECF0E7] min-h-screen flex items-center justify-center overflow-hidden">
            {/*text*/}
            <div className='text-center z-50 flex flex-col'>
                <h2 className='font-extrabold text-7xl text-[#37532B]'>Find Your Matcha</h2>
                <br/>
                <Link to="Register/"><p className='font-medium text-[#37532B] text-3xl'>sign up to begin</p></Link>
            </div>

            {/* images */}
            <div className='z-0'>
                {/* left side */}
                <img className="absolute left-1/6 top-1/3 -translate-y-1/2 w-32 md:w-50 lg:w-80" src={matchabowl}/>
                {/* right side */}
                <img className="absolute right-1/6 top-1/2 -translate-y-1/2 w-32 md:w-52 lg:w-70" src={leaves}/>
            </div>
        </div>
    )
}