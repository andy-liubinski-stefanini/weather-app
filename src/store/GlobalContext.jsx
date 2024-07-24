/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { useCurrentLocation } from '../hooks/useCurrentLocation';
import useWeather from '../hooks/useWeather';
import useDate from '../hooks/useDate';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [celsius, setCelsius] = useState(true);
  const [datesArray, setDatesArray] = useState([]);
  const [weatherObj, setWeatherObj] = useState();
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
      if (selectedLocation.longitude) {
        const weather = await useWeather(selectedLocation);
        setWeatherObj(weather);
      }
    };

    fetchWeather();
  }, [selectedLocation]);
  /* ------------------------------------------------------------------ */
  return (
    <GlobalContext.Provider
      value={{
        handleSearchButton: toggleSearchField,
        searchFieldVisible,
        handleGeolocate,
        weatherObj: weatherObj,
        datesArray: datesArray,
        handleUnitToggle: toggleCelsius,
        celsius,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
