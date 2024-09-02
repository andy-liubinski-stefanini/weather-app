export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface LocationName {
  locationName: string;
}

export interface TodayWeather {
  cityName: string;
  countryCode: string;
  temperatureC: number;
  temperatureF: number;
  uvIndex: number;
  airQuality: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

export interface FutureWeather {
  dateOfWeather: string;
  maxTempC: number;
  minTempC: number;
  description: string;
  icon: string;
}

export type WeatherData = [TodayWeather, FutureWeather[]];
