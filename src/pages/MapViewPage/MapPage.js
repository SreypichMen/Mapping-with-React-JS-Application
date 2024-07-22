import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BackHome from '../../components/MapPage/BackHomeNavigationButton/BackHomeNavigationButton';

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: '/marker-icon.png',
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  shadowSize: [41, 41]
});

function MapPage() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Fetch user's current location
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
        fetchElevationData(latitude, longitude); // Fetch elevation data
      },
      error => {
        console.error('Error fetching location:', error);
      }
    );
  }, []);

  const fetchElevationData = async (lat, lon) => {
    try {
      const apiKey = process.env.REACT_APP_API_URL ; // Use environment variable for API key
      const url = `https://api.openrouteservice.org/elevation/point?api_key=${apiKey}&geometry=${lon},${lat}`;
      const response = await axios.get(url);
      console.log('Elevation data:', response.data); // Log the elevation data response
    } catch (error) {
      console.error('Error fetching elevation data:', error);
    }
  };

  return (
    <div>
      <MapContainer center={currentLocation || [48.8566, 2.3522]} zoom={13} style={{ height: "95vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {currentLocation && <Marker position={currentLocation} icon={customIcon} />}
      </MapContainer>
      <BackHome />
    </div>
  );
}

export default MapPage;
