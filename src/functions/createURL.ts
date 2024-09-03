import { Coordinates, LocationName } from '../types';

export function createURL(
  endpointType: string,
  location: LocationName | Coordinates
): string {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = new URL(`${endpointType}`, baseURL);

  if ((location as Coordinates).latitude) {
    url.searchParams.append('lat', (location as Coordinates).latitude);
  }
  if ((location as Coordinates).longitude) {
    url.searchParams.append('lon', (location as Coordinates).longitude);
  }
  if ((location as LocationName).locationName) {
    url.searchParams.append('city', (location as LocationName).locationName);
    // url.searchParams.append('include', 'minutely');   // CAN ONLY BE USED WITH UNLIMITED API
  }
  url.searchParams.append('key', apiKey);

  return url.toString();
}
