export const geolocate = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Navigation is not supported by this browser'));
    }
  })
    .then(position => {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

export const handleGeolocationError = error => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'User denied the request for Geolocation.';
    case error.POSITION_UNAVAILABLE:
      return 'Location information is unavailable.';
    case error.TIMEOUT:
      return 'The request to get user location has timed out.';
    case error.UNKNOWN_ERROR:
    default:
      return 'An unknown error occurred.';
  }
};
