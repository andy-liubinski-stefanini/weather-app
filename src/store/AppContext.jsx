/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { useWeatherData } from '../index';
import { useDates } from '../index';
import { useGeolocation } from '../index';

const AppContext = createContext();

function GlobalProvider({ children }) {
  const [isCelsius, setIsCelsius] = useState(true);
  const [searchFieldVisible, setSearchFieldVisible] = useState(false);
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
}

export { AppContext, GlobalProvider };
