/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { useCurrentLocation } from '../hooks/useCurrentLocation';
import useWeather from '../hooks/useWeather';
import useDate from '../hooks/useDate';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [datesArray, setDatesArray] = useState([]);
  const [weatherObj, setWeatherObj] = useState();
  const [searchField, setSearchField] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: null,
    longitude: null,
    locationName: null,
  });

  useEffect(() => {
    const dates = useDate();
    setDatesArray(dates);
  }, []);

  const toggleSearchField = () => {
    setSearchField(prevSearchField => !prevSearchField);
  };

  const handleGeolocate = async () => {
    try {
      const location = await useCurrentLocation();
      setSelectedLocation(prevLocation => ({
        ...prevLocation,
        latitude: location.latitude,
        longitude: location.longitude,
      }));
      console.log('Updated location:', {
        latitude: location.latitude,
        longitude: location.longitude,
      });
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (selectedLocation.longitude) {
        const weather = await useWeather(selectedLocation);
        console.log(weather);
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
        searchField,
        handleGeolocate,
        weatherObj: weatherObj,
        datesArray: datesArray,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
