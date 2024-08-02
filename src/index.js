// src/index.js

// Components
export { default as CitySection } from './components/CitySection';
export { default as ForecastBox } from './components/ForecastBox';
export { default as ForecastDay } from './components/ForecastDay';
export { default as InfoBox } from './components/InfoBox';
export { default as Navigation } from './components/Navigation';
export { default as Search } from './components/Search';
export { default as TextWeatherExplanation } from './components/TextWeatherExplanation';

// Functions
export { default as getFutureWeather } from './functions/getFutureWeather';
export { default as getTodayWeather } from './functions/getTodayWeather';
export { default as weatherService } from './functions/weatherService';

// Hooks
export { default as useDates } from './hooks/useDates';
export { default as useGeolocation } from './hooks/useGeolocation';
export { default as useWeatherData } from './hooks/useWeatherData';

// Services
export { default as fetcher } from './services/fetcher';

// Store
export { AppContext, GlobalProvider } from './store/AppContext';

// Utils
export { default as dateUtil } from './utils/dateUtil';
export { default as geolocationUtil } from './utils/geolocationUtil';
