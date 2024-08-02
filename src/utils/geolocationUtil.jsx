function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.error('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      console.error('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      console.error('The request to get user location has timed out.');
      break;
    case error.UNKNOWN_ERROR:
      console.error('An unknown error occurred.');
      break;
  }
}
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      console.error('Navigation is not supported by this browser');
    }
  })
    .then(position => {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    })
    .catch(error => {
      handleError(error);
    });
}

export default getCurrentLocation;
