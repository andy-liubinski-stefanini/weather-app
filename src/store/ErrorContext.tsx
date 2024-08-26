import { useState, createContext, ReactNode } from 'react';

interface ErrorContextProps {
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
}

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorContext = createContext<ErrorContextProps>({
  error: null,
  setError: ()=>{},
  clearError: ()=>{},
});

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
