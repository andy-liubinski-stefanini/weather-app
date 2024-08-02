import { useState } from 'react';
import getCurrentLocation from '../utils/geolocationUtil';

export const useGeolocation = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const handleGeolocate = async () => {
    try {
      const location = await getCurrentLocation();
      setSelectedLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };

  return { selectedLocation, handleGeolocate, setSelectedLocation };
};
