// Define the types for the geolocation response
export interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export const geolocate = (): Promise<{
  latitude: number;
  longitude: number;
}> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) =>
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        reject
      );
    } else {
      reject(new Error('Navigation is not supported by this browser'));
    }
  });
};

export const handleGeolocationError = (
  error: GeolocationPositionError
): string => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'User denied the request for Geolocation.';
    case error.POSITION_UNAVAILABLE:
      return 'Location information is unavailable.';
    case error.TIMEOUT:
      return 'The request to get user location has timed out.';
    default:
      return 'An unknown error occurred.';
  }
};
