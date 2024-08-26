import type { Location } from '../types';

export function createURL(endpointType: string, location: Location): string {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = new URL(`${endpointType}`, baseURL);

  if (location.latitude) {
    url.searchParams.append('lat', location.latitude);
  }
  if (location.longitude) {
    url.searchParams.append('lon', location.longitude);
  }
  if (location.locationName) {
    url.searchParams.append('city', location.locationName);
    // url.searchParams.append('include', 'minutely');
  }
  url.searchParams.append('key', apiKey);

  return url.toString();
}
