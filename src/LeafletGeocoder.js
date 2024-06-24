import React, { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

const LeafletGeocoder = () => {
  const map = useMap(); // Access the Leaflet map instance

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    });

    geocoder.on("markgeocode", function (e) {
      var latlng = e.geocode.center;
      L.marker(latlng)
        .addTo(map)
        .bindPopup(e.geocode.name)
        .openPopup();
      map.fitBounds(e.geocode.bbox);
    });

    geocoder.addTo(map);

    return () => {
      // Clean up if needed
      geocoder.removeFrom(map);
    };
  }, [map]); // Ensure useEffect runs when `map` changes

  return null;
};

export default LeafletGeocoder;
