export interface Location {
    latitude?: number;
    longitude?: number;
    locationName?: string;
  }
  
  export interface TodayWeatherData {
    city_name: string;
    country_code: string;
    temp: number;
    uv: number;
    aqi: number;
    rh: number;
    wind_spd: number;
    weather: {
      description: string;
      icon: string;
    };
  }
  
  export interface FutureWeatherData {
    datetime: string;
    max_temp: number;
    min_temp: number;
    weather: {
      description: string;
      icon: string;
    };
  }
  
  export interface TodayWeatherResponse {
    data: TodayWeatherData[];
  }
  
  export interface FutureWeatherResponse {
    data: FutureWeatherData[];
  }
  