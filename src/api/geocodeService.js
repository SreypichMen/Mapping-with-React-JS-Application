import axios from 'axios';

export const fetchGeocode = async (address, apiKey) => {
    if (!address) {
        console.error("No address provided");
        throw new Error("No address provided.");
    }
    const url = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(address)}`;
    try {
        const response = await axios.get(url);
        if (response.data.features && response.data.features.length > 0) {
            const { coordinates } = response.data.features[0].geometry;
            return { latitude: coordinates[1], longitude: coordinates[0] };
        } else {
            throw new Error('No coordinates found for the specified address.');
        }
    } catch (error) {
        console.error('Error fetching geocode data:', error);
        throw error;
    }
};
