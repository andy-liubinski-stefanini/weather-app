import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { Location } from '../types';
import { FormattedDate } from '../utils/createFormattedDates';
import type { WeatherData } from '../hooks/types';
import { RootState } from './store';

interface AppState {
  searchFieldVisible: boolean;
  isCelsius: boolean;
  formattedDates: FormattedDate[];
  locationName: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  weatherData: WeatherData | undefined;
}

const initialState: AppState = {
  searchFieldVisible: false,
  isCelsius: true,
  formattedDates: [],
  locationName: '',
  coordinates: {
    latitude: '',
    longitude: '',
  },
  weatherData: undefined,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSearchFieldVisible(state) {
      state.searchFieldVisible = !state.searchFieldVisible;
    },
    setFormattedDates(state, action: PayloadAction<FormattedDate[]>) {
      state.formattedDates = action.payload;
    },
    setCoordinates(state, action: PayloadAction<AppState['coordinates']>) {
      state.coordinates = action.payload;
    },
    setLocationName(state, action: PayloadAction<AppState['locationName']>) {
      state.locationName = action.payload;
    },
    setWeatherData(state, action: PayloadAction<AppState['weatherData']>) {
      state.weatherData = action.payload;
    },
    toggleIsCelsius(state) {
      state.isCelsius = !state.isCelsius;
    },
  },
  selectors: {
    selectIsCelsius: (state: RootState) => state.isCelsius,
    selectSearchFieldVisible: (state: RootState) => state.searchFieldVisible,
    selectFormattedDates: (state: RootState) => state.formattedDates,
    selectCoordinates: (state: RootState) => state.coordinates,
    selectLocationName: (state: RootState) => state.locationName,
    selectWeatherData: (state: RootState) => state.weatherData,
  },
});

export const {
  toggleIsCelsius,
  toggleSearchFieldVisible,
  setFormattedDates,
  setCoordinates,
  setLocationName,
  setWeatherData,
} = appSlice.actions;

export const {
  selectIsCelsius,
  selectSearchFieldVisible,
  selectFormattedDates,
  selectCoordinates,
  selectLocationName,
  selectWeatherData,
} = appSlice.selectors;

export default appSlice.reducer;
