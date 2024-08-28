import React, { createContext, useEffect, ReactNode } from 'react';
import { useGeolocation, useWeatherData, useDates } from '../hooks';

interface AppContextProps {
  handleGeolocate: () => void;
  weatherData: ReturnType<typeof useWeatherData>['weatherData'];
  formattedDates: ReturnType<typeof useDates>['formattedDates'];
  setSelectedLocation: ReturnType<typeof useGeolocation>['setSelectedLocation'];
}

// @ts-expect-error - context is hard  to type
const AppContext = createContext<AppContextProps>();

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const { formattedDates } = useDates();
  const { weatherData, fetchWeather } = useWeatherData();
  const { selectedLocation, handleGeolocate, setSelectedLocation } =
    useGeolocation();

  useEffect(() => {
    if (selectedLocation.longitude || selectedLocation.locationName) {
      fetchWeather(selectedLocation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation]);

  return (
    <AppContext.Provider
      value={{
        handleGeolocate,
        weatherData,
        formattedDates,
        setSelectedLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, GlobalProvider };
