import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import supabase from "../helper/supabaseClient";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [locations, setLocations] = useState([]);

  // get the locations from supabase
  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from("locations")
        .select("id, name, address, longitude, latitude");
      
      if (error) {
        console.error("Error fetching locations:", error);
        return;
      }
      
      console.log("Fetched locations:", data);
      setLocations(data);
    };

    fetchLocations();
  }, []);

  // initializing mapbox map
  useEffect(() => {
    if (mapRef.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-123.1207, 49.2827],
      zoom: 12,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl());
  }, []);

  // add red markers
  useEffect(() => {
    if (!mapRef.current || locations.length === 0) return;

    locations.forEach((loc) => {
      const lon = parseFloat(loc.longitude);
      const lat = parseFloat(loc.latitude);

      if (isNaN(lon) || isNaN(lat)) {
        console.warn(`Invalid coordinates for ${loc.name}`);
        return;
      }

      new mapboxgl.Marker({ color: "red" })
        .setLngLat([lon, lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <div>
              <h3>${loc.name}</h3>
              <p>${loc.address}</p>
            </div>
          `)
        )
        .addTo(mapRef.current);
    });
  }, [locations]);

  return <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />;
};

export default Map;