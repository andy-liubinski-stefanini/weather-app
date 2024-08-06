import { useState, createContext } from 'react';

export const ErrorContext = createContext();

// eslint-disable-next-line react/prop-types
export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
