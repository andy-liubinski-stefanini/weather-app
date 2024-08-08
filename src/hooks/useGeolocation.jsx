import { useState, useContext } from 'react';
import { ErrorContext } from '../store';
import { geolocate, handleGeolocationError } from '../utils';
export const useGeolocation = () => {
  const { setError } = useContext(ErrorContext);

  const [selectedLocation, setSelectedLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const handleGeolocate = async () => {
    try {
      const location = await geolocate();
      setSelectedLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      setError(null)
      console.log('ERROR NULL');
    } catch (error) {
      const errorMessage = handleGeolocationError(error);
      setError(errorMessage);
    }
  };

  return { selectedLocation, handleGeolocate, setSelectedLocation };
};
