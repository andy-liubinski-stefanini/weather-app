/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { useCurrentLocation } from '../utils/geolocationUtil';
import assembleAllWeather from '../weatherFunctions/assembleAllWeather';
import useDate from '../utils/dateUtil';

const AppContext = createContext();

function GlobalProvider({ children }) {
  const [celsius, setCelsius] = useState(true);
  const [datesArray, setDatesArray] = useState([]);
  const [weatherData, setWeatherData] = useState();
  const [searchFieldVisible, setSearchFieldVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const dates = useDate();
    setDatesArray(dates);
  }, []);

  const toggleSearchField = () => {
    setSearchFieldVisible(prevSearchFieldVisible => !prevSearchFieldVisible);
  };

  const handleGeolocate = async () => {
    try {
      const location = await useCurrentLocation();
      setSelectedLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };

  const toggleCelsius = () => {
    setCelsius(prevState => !prevState);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (selectedLocation.longitude || selectedLocation.locationName) {
        const weather = await assembleAllWeather(selectedLocation);
        setWeatherData(weather);
      }
    };

    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation]);
  /* ------------------------------------------------------------------ */
  return (
    <AppContext.Provider
      value={{
        handleSearchButton: toggleSearchField,
        searchFieldVisible,
        setSearchFieldVisible,
        handleGeolocate,
        weatherData,
        datesArray,
        handleUnitToggle: toggleCelsius,
        celsius,
        setSelectedLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, GlobalProvider };
