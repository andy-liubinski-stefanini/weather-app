import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { Location } from '../types';

interface AppState {
  isCelsius: boolean;
}

const initialState: AppState = {
  isCelsius: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
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

export const { toggleIsCelsius } = appSlice.actions;

export default appSlice.reducer;
