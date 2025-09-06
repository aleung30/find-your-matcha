import leaves from "../assets/leaves.png"
import matchabowl from "../assets/matchabowl.png"

export const Home = () => {
    return (
        <div className="bg-green-50 h-screen flex items-center justify-center">
            <div className='text-center z-index-100'>
                <h2 className='font-extrabold text-7xl text-lime-900'>Find Your Matcha</h2>
                <br/>
                <p className='font-medium text-lime-900 text-3xl'>sign up to begin</p>
            </div>
            <div className='z-index-99'>
                <img src={leaves}/>
            </div>
        </div>
    )
}