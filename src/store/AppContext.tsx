import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useGeolocation, useWeatherData, useDates } from '../hooks';



// TODO after functions
interface AppContextProps {
  handleSearchButton: () => void;
  searchFieldVisible: boolean;
  setSearchFieldVisible: (visible: boolean) => void;
  handleGeolocate: () => void;
  weatherData: any; // ???
  formattedDates: any; // ??? 
  handleUnitToggle: () => void;
  isCelsius: boolean;
  setSelectedLocation: (any) => void;  // ???
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [searchFieldVisible, setSearchFieldVisible] = useState(false);
  const { formattedDates } = useDates();
  const { weatherData, fetchWeather } = useWeatherData();
  const { selectedLocation, handleGeolocate, setSelectedLocation } = useGeolocation();

  useEffect(() => {
    if (selectedLocation.longitude || selectedLocation.locationName) {
      fetchWeather(selectedLocation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation]);

  const toggleSearchField = () => {
    setSearchFieldVisible(prevSearchFieldVisible => !prevSearchFieldVisible);
  };

  const toggleIsCelsius = () => {
    setIsCelsius(prevState => !prevState);
  };

  return (
    <AppContext.Provider
      value={{
        handleSearchButton: toggleSearchField,
        searchFieldVisible,
        setSearchFieldVisible,
        handleGeolocate,
        weatherData,
        formattedDates,
        handleUnitToggle: toggleIsCelsius,
        isCelsius,
        setSelectedLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, GlobalProvider };
