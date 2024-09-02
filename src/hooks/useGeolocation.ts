import { geolocate, handleGeolocationError } from '../utils';
import { useDispatch } from 'react-redux';
import { setCoordinates } from '../store/appSlice';
import { setError } from '../store/errorSlice';

export const useGeolocation = () => {
  const dispatch = useDispatch();

  const handleGeolocate = async () => {
    try {
      const location = await geolocate();
      dispatch(
        setCoordinates({
          latitude: location.latitude.toString(),
          longitude: location.longitude.toString(),
        })
      );
      dispatch(setError(undefined));
    } catch (error: unknown) {
      const errorMessage = handleGeolocationError(
        error as GeolocationPositionError
      );
      dispatch(setError(errorMessage));
    }
  };

  handleGeolocate();
};
