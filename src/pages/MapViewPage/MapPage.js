import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BackHome from '../../components/MapPage/BackHomeNavigationButton/BackHomeNavigationButton';
import useCurrentLocation from '../../hooks/useCurrentLocation';
import { fetchElevationData } from '../../api/elevationService';
import './MapPage.css';  // Import the CSS file

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: '/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  shadowSize: [41, 41]
});

function MapPage() {
  const [endPoint, setEndPoint] = useState('');
  const currentLocation = useCurrentLocation();
  const apiKey = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Ensure both latitude and longitude are defined
    if (currentLocation?.latitude && currentLocation?.longitude) {
      fetchElevationData(currentLocation.latitude, currentLocation.longitude, apiKey)
        .then(data => console.log('Elevation data:', data))
        .catch(error => console.error('Elevation fetch failed:', error));
    }
  }, [currentLocation, apiKey]);

  // Render a loading state if currentLocation is not yet available
  if (!currentLocation || currentLocation.latitude == null || currentLocation.longitude == null) {
    return <div>Loading location data...</div>;
  }

  const handleSearch = () => {
    console.log("End Point:", endPoint);
    // Add logic here to handle map actions based on the end point
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter end point"
          value={endPoint}
          onChange={e => setEndPoint(e.target.value)}
          className="end-input"
        />
        <button onClick={handleSearch} className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <MapContainer center={[currentLocation.latitude, currentLocation.longitude]} zoom={13} style={{ height: "95vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[currentLocation.latitude, currentLocation.longitude]} icon={customIcon} />
      </MapContainer>
      <BackHome />
    </div>
  );
}

export default MapPage;
