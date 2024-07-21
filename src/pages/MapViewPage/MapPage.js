import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BackHome from '../../components/MapPage/BackHomeNavigationButton/BackHomeNavigationButton'

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
  const [routeData, setRouteData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
        fetchRouteData(latitude, longitude);
      },
      error => {
        console.error('Error fetching location:', error);
      }
    );
  }, []);

  const fetchRouteData = async (lat, lon) => {
    try {
      const apiKey =process.env.REACT_APP_API_URL ; // Use environment variable
      const startCoords = `${lon},${lat}`;
      const endCoords = '2.3522,48.8566'; // Example endpoint in Paris
      const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.REACT_APP_API_URL }&start=${startCoords}&end=${endCoords}`;

      const response = await axios.get(url);
      setRouteData(response.data);
    } catch (error) {
      console.error('Error fetching route data:', error);
    }
  };

  return (
    <div>
      <MapContainer center={currentLocation || [48.8566, 2.3522]} zoom={13} style={{ height: "95vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {currentLocation && <Marker position={currentLocation} icon={customIcon} />}
        {routeData && (
          <Polyline
            positions={routeData.features[0].geometry.coordinates.map(([lng, lat]) => [lat, lng])}
            color="blue"
          />
        )}
      </MapContainer>
      <BackHome />
    </div>
  );
}

export default MapPage;
