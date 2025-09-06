import { useState, useEffect } from "react"
import supabase from "../helper/supabaseClient";

export const Review = () => {

    const [rating, setRating] = useState(0); 
    const [comment, setComment] = useState('');
    const [locations, setLocations] = useState([]); // list of locations in the database
    const [loading, setLoading] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchPlaces = async () => {
            const { data, error } = await supabase.from("locations").select("id, name");
            if (error) console.error("Error fetching places:", error);
            else setLocations(data);
        };
        fetchPlaces();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');

        if (!selectedPlace) {
            setMessage("Please select a matcha place.");
            setLoading(false);
            return;
        }

        try {
            const { data: { user } } = await supabase.auth.getUser();

            const { data, error } = await supabase.from("matcha_reviews").insert([
                {
                    location_id: selectedPlace, 
                    rating: rating, 
                    comment: comment,
                    created_by: user?.id
                },
            ]);

            if (error) {
                console.error("Error submitting review:", error);
                setMessage("Failed to submit review. Try again")
            } else {
                console.log("Review submitted:", data);
                setMessage("Review submitted successfully!");
                setRating(0);
                setComment(""); 
                setSelectedPlace(''); 
            }

        } catch (error) {
            console.error("Unexpected error:", error);
            setMessage("An unexpected error occurred.");
        }

        setLoading(false);
    };


    return (
        <div className="flex min-h-screen items-center justify-center bg-[#ECF0E7] px-6 py-12">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-[#FADEDA] p-8 shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="text-center mb-4 text-2xl font-bold tracking-tight text-[#834F4E]">Leave a review!</h2>
                    </div>
                    <div>
                        {/* location dropdown */}
                        <label className="text-[#834F4E] font-bold mb-2">Location:</label>
                        <select
                        className="w-full mb-4 rounded-lg border border-[#834F4E] bg-[#E7D1D1] px-4 py-2 text-[#834F4E] focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={selectedPlace}
                        onChange={(e) => setSelectedPlace(e.target.value)}
                        required
                        >
                        <option value="">Select a matcha spot...</option>
                        {locations.map((loc) => (
                            <option key={loc.id} value={loc.id}>
                                {loc.name}
                            </option>
                        ))}
                        </select>

                        <label htmlFor="rating" className="text-[#834F4E] font-bold mb-2">
                            Rating: {rating > 0 && <span className="font-normal">({rating} stars)</span>}
                        </label>
                        <input
                        type="number"
                        id="rating"
                        className="w-full mb-4 rounded-lg border border-[#834F4E] bg-[#E7D1D1] px-4 py-2 text-[#834F4E] placeholder-[#834F4E] focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min="0"
                        max="5"
                        placeholder="0-5 stars"
                        required
                        />

                        <label htmlFor="comment" className="text-[#834F4E] font-bold mb-2">Leave a Comment:</label>
                        <textarea
                        id="comment"
                        className="w-full mb-4 rounded-lg border border-[#834F4E] bg-[#E7D1D1] px-4 py-2 text-[#834F4E] placeholder-[#834F4E] focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write your review here..."
                        rows="5"
                        required
                        />

                        <button
                        type="submit"
                        disabled={loading}
                        className="w-full mb-4 rounded-lg bg-[#834F4E] px-4 py-2 font-bold text-white hover:bg-[#6b3c3c] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Submitting..." : "Submit Review"}
                        </button>
                        
                        {message && (
                            <div className={`text-center text-sm font-medium ${
                                message.includes('successfully') 
                                    ? 'text-green-600' 
                                    : 'text-red-600'
                            }`}>
                                {message}
                            </div>
                        )}
                    </div>
                </form>
            </div>
                
        </div>
    )
}