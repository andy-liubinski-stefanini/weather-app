import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { Location } from '../types';

interface AppState {
  searchFieldVisible: boolean;
  isCelsius: boolean;
}

const initialState: AppState = {
  searchFieldVisible: false,
  isCelsius: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSearchFieldVisible(state) {
      state.searchFieldVisible = !state.searchFieldVisible;
    },
    toggleIsCelsius(state) {
      state.isCelsius = !state.isCelsius;
    },
  },
});

/*
const [isCelsius, setIsCelsius] = useState(true);
const [searchFieldVisible, setSearchFieldVisible] = useState<boolean>(false);
const { formattedDates } = useDates();
const { weatherData, fetchWeather } = useWeatherData();
const { selectedLocation, handleGeolocate, setSelectedLocation } = useGeolocation();

*/

export const { toggleIsCelsius, toggleSearchFieldVisible } = appSlice.actions;

export default appSlice.reducer;
