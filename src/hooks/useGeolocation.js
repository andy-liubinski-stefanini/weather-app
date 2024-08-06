import { useState, useContext } from 'react';
import {
  ErrorContext,
  geolocationUtil,
  handleGeolocationError,
} from '../index';

export const useGeolocation = () => {
  const { setError } = useContext(ErrorContext);

  const [selectedLocation, setSelectedLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const handleGeolocate = async () => {
    try {
      const location = await geolocationUtil();
      setSelectedLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    } catch (error) {
      const errorMessage = handleGeolocationError(error);
      setError(errorMessage);
    }
  };

  return { selectedLocation, handleGeolocate, setSelectedLocation };
};
