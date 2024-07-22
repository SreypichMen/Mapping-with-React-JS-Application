import axios from 'axios';

export const fetchElevationData = async (lat, lon, apiKey) => {
    if (!lat || !lon) {
        console.error("Invalid latitude or longitude:", lat, lon);
        throw new Error("Invalid latitude or longitude values provided.");
    }
    const url = `https://api.openrouteservice.org/elevation/point?api_key=${apiKey}&geometry=${lon},${lat}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching elevation data:', error);
        throw error;
    }
};
