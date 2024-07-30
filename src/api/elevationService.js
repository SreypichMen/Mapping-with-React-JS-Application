import axios from 'axios';

export const fetchElevationData = async (encodedPolyline) => {
    const url = 'https://api.openrouteservice.org/elevation/line';
    const apiKey = process.env.REACT_APP_API_URL;  
    const headers = {
        'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
        'Authorization': `${apiKey}`, 
        'Content-Type': 'application/json; charset=utf-8'
    };

    const data = {
        format_in: "encodedpolyline5",
        geometry: "u`rgFswjpAKD"
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log('Status:', response.status);
        console.log('Headers:', response.headers);
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};
