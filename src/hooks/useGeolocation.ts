import React, { useState, useContext } from 'react';
import { ErrorContext } from '../store';
import { geolocate, handleGeolocationError } from '../utils';
import type { Location } from '../types';

export const useGeolocation = (): {
  selectedLocation: Location;
  handleGeolocate: () => Promise<void>;
  setSelectedLocation: React.Dispatch<React.SetStateAction<Location>>;
} => {
  const { setError } = useContext(ErrorContext);

  const [selectedLocation, setSelectedLocation] = useState<Location>({
    latitude: undefined,
    longitude: undefined,
  });

  const handleGeolocate = async () => {
    try {
      const location = await geolocate();
      setSelectedLocation({
        latitude: location.latitude.toString(),
        longitude: location.longitude.toString(),
      });
      setError(null);
    } catch (error) {
      const errorMessage = handleGeolocationError(error);
      setError(errorMessage);
    }
  };

  return { selectedLocation, handleGeolocate, setSelectedLocation };
};
