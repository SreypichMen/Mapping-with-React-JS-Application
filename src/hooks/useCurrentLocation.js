import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log("Location fetched:", position.coords);
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            error => {
                console.error('Error fetching location:', error);
                setLocation({ latitude: null, longitude: null });
            }
        );
    }, []);

    return location;
};

export default useCurrentLocation;
