import { useState } from "react";

export const Locations = () => {
    const [name, setName] = useState('');
    // need to convert address to coordinates using the geocode API to be added to locations.geojson file
    // from geocode documentation : https://geocode.maps.co/search?q=555+5th+Ave+New+York+NY+10017+US&api_key=YOUR_SECRET_API_KEY
    const [address, setAddress] = useState('');

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); 
        setMessage('');

        // call geocode API
        try {
            const res = await fetch(
                    `https://geocode.maps.co/search?q=${encodeURIComponent(
                    address
                    )}&api_key=${import.meta.env.VITE_GEOCODE_KEY}`
            );

            const data = await res.json();

            if (data.length === 0) {
                setMessage("No coordinates found for this address.");
                setLoading(false);
                return;
            }

            const { lat, lon } = data[0];

            // add GeoJSON object
            const newLocation = {
                type: "Feature",
                geometry: {
                type: "Point",
                coordinates: [parseFloat(lon), parseFloat(lat)],
                },
                properties: {
                name
                },
            };

            // i need to add newLocation object to my locations.geojson located in public

            console.log("New Location:", newLocation);
            alert(message);
            setMessage("Location added successfully!");
            setName("");
            setAddress("");

        } catch {
            console.error(error);
            setMessage("Failed to add location");
        }

        setLoading(false);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#ECF0E7] px-6 py-12">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-[#FADEDA] p-8 shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="text-center mb-4 text-2xl font-bold tracking-tight text-[#834F4E]">Add a new location!</h2>
                    </div>

                     <div>
                        <input
                        className="w-full mb-2 rounded-lg border border-[#834F4E] bg-[#E7D1D1] px-4 py-2 text-[#834F4E] placeholder-[#834F4E] focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" placeholder="Location Name" required/>

                        <input
                        className="w-full mb-2 rounded-lg border border-[#834F4E] bg-[#E7D1D1] px-4 py-2 text-[#834F4E] placeholder-[#834F4E] focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text" placeholder="Address" required/>
                    </div>

                    <button
                        className="w-full mb-4 rounded-lg bg-[#834F4E] px-4 py-2 font-semibold text-[#E7D1D1] shadow focus:outline-none focus:ring-2 focus:ring-red-200"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Adding..." : "Add new location!"}
                    </button>
                </form>
            </div>
        </div>
    )
}