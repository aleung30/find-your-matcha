import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/standard",
      center: [-123.1207, 49.2827],
      zoom: 12,
    });

    mapRef.current.on("load", async () => {
      // fetch GeoJSON file
      const response = await fetch("/locations.geojson");
      const geojson = await response.json();

      // geoJSON as a new source
      mapRef.current.addSource("matcha-places", {
        type: "geojson",
        data: geojson,
      });

      // will map locations in geoJSON as red dots
      mapRef.current.addLayer({
        id: "matcha-places-layer",
        type: "circle",
        source: "matcha-places",
        paint: {
          "circle-radius": 6,
          "circle-color": "#FF0000",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#fff",
        },
      });

      // popup on click - info
      mapRef.current.on("click", "matcha-places-layer", (e) => {
        const coords = e.features[0].geometry.coordinates.slice();
        const props = e.features[0].properties;

        new mapboxgl.Popup()
          .setLngLat(coords)
          .setHTML(`<strong>${props.name}</strong><br/>${props.amenity}`)
          .addTo(mapRef.current);
      });

      // cursor changes on hover
      mapRef.current.on("mouseenter", "matcha-places-layer", () => {
        mapRef.current.getCanvas().style.cursor = "pointer";
      });
      mapRef.current.on("mouseleave", "matcha-places-layer", () => {
        mapRef.current.getCanvas().style.cursor = "";
      });
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl());
  }, []);

  return <div id="map" ref={mapContainerRef} style={{ height: "50vh", width: "100vh"}} />;
};

export default Map;