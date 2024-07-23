/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [searchField, setSearchField] = useState(false);

  const toggleSearchField = () => {
    setSearchField(prevSearchField => !prevSearchField);
  };

  const handleGeolocate = () => {
    console.log('LOCATE');
  };

  return (
    <GlobalContext.Provider
      value={{
        handleSearchButton: toggleSearchField,
        searchField,
        handleGeolocate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
