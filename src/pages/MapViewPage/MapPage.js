import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BackHome from '../../components/MapPage/BackHomeNavigationButton/BackHomeNavigationButton';
import useCurrentLocation from '../../hooks/useCurrentLocation';
import { fetchElevationData } from '../../api/elevationService';

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

  return (
    <div>
      <MapContainer center={[currentLocation.latitude, currentLocation.longitude]} zoom={13} style={{ height: "95vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[currentLocation.latitude, currentLocation.longitude]} icon={customIcon} />
      </MapContainer>
      <BackHome />
    </div>
  );
}

export default MapPage;
