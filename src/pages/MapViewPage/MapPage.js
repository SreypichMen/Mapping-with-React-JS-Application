import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BackHome from '../../components/MapPage/BackHomeNavigationButton/BackHomeNavigationButton';
import useCurrentLocation from '../../hooks/useCurrentLocation';
import { fetchElevationData } from '../../api/elevationService';
import { fetchGeocode } from '../../api/geocodeService'; // Assuming you have a function that fetches geocodes
import './MapPage.css'; // Import the CSS file

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
    const [endPointCoords, setEndPointCoords] = useState(null);
    const currentLocation = useCurrentLocation();
    const apiKey = process.env.REACT_APP_API_URL; 
    useEffect(() => {
        // Fetch elevation data for current location
        if (currentLocation?.latitude && currentLocation?.longitude) {
            fetchElevationData(currentLocation.latitude, currentLocation.longitude, apiKey)
                .then(data => console.log('Elevation data:', data))
                .catch(error => console.error('Elevation fetch failed:', error));
        }
    }, [currentLocation, apiKey]);

    const handleSearch = () => {
        if (endPoint.trim() !== '') {
            fetchGeocode(endPoint, apiKey)
                .then(coords => {
                    if (coords.error) {
                        console.error('Geocode error:', coords.error);
                        alert('Failed to fetch geocode: ' + coords.error);
                        return;
                    }
                    setEndPointCoords(coords);
                })
                .catch(error => {
                    console.error('Error fetching geocode:', error);
                    alert('Geocoding failed, check the console for details.');
                });
        } else {
            alert('Please enter a valid endpoint.');
        }
    };

    if (!currentLocation || currentLocation.latitude == null || currentLocation.longitude == null) {
        return <div>Loading location data...</div>;
    }

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
                {endPointCoords && <Marker position={[endPointCoords.latitude, endPointCoords.longitude]} icon={customIcon} />}
                {currentLocation && endPointCoords && (
                    <Polyline
                        positions={[
                            [currentLocation.latitude, currentLocation.longitude],
                            [endPointCoords.latitude, endPointCoords.longitude]
                        ]}
                        color="red"
                    />
                )}
            </MapContainer>
            <BackHome />
        </div>
    );
}

export default MapPage;
