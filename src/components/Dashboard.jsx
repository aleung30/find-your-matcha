import supabase from "../helper/supabaseClient";
import { useEffect, useState } from "react";

export const Dashboard = () => {
    
    const [reviews, setReviews] = useState([]);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    // get reviews left by current user
    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);

            // get user info
            const { data: { user }, error: userError, } = await supabase.auth.getUser();

            if (userError || !user) {
                console.log("Error fetching user:",  userError);
                setLoading(false);
                return;
            }

            // get profile
            const { data: { profileData }, error: profileError } = await supabase
            .from("profiles")
            .select("display_name")
            .eq("id", user.id)
            .single();

            if (profileError) {
                console.error("Error fetching profile:", profileError);
            } else {
                setProfile(profileData);
            }

            // get reviews + locations
            const { data, error } = await supabase
                .from("matcha_reviews")
                .select(`
                    id,
                    rating,
                    comment,
                    created_at,
                    locations (name)
                    `)
                    .eq("created_by", user.id)
                    .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching reviews:", error);
            } else {
                setReviews(data);
            }

            setLoading(false);
        };

        fetchUserData();
    }, []);

    if (loading) return <p>Loading reviews...</p>;
    
    // profile details
    
    const cafesVisited = reviews.length;
    const favSpot = reviews.length > 0 ? [...reviews].sort((a, b) => b.rating - a.rating)[0]?.locations?.name : "N/A";

    return (
        <div className="p-6 flex gap-10">

            {/* user profile details on the left with reviews on the right */}
            <div className="w-1/3 bg-[#E7D1D1] p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold text-[#834F4E] mb-4">My Profile</h2>
                {/* <p><strong>{profile?.display_name}</strong></p> */}
                <p><strong>Cafes Visited:</strong>{cafesVisited}</p>
                <p><strong>Favourite Matcha Spot:</strong>{favSpot}</p>
            </div>
            
            {/* user reviews on the right */}

            <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
                {reviews.length === 0 ? (
                    <p>You haven't written any reviews yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {reviews.map((rev) => (
                            <li key={rev.id} className="p-4 border rounded-lg shadow bg-[#FADEDA]">
                                <p className="font-semibold">{rev.locations?.name || "Unknown Location"}</p>
                                <p><strong>Rating:</strong> {rev.rating} / 5 </p>
                                <p><strong>Comment:</strong> {rev.comment} </p>
                                <p className="text-sm text-gray-500">
                                    {new Date(rev.created_at).toLocaleDateString()}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}