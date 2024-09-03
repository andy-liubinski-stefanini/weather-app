import { geolocate, handleGeolocationError } from '../utils';
import { setCoordinates } from '../store/appSlice';
import { setError, clearError } from '../store/errorSlice';
import { useAppDispatch } from '../store/store';

export const useGeolocation = () => {
  const dispatch = useAppDispatch();

  const handleGeolocate = async () => {
    try {
      const location = await geolocate();
      dispatch(
        setCoordinates({
          latitude: location.latitude.toString(),
          longitude: location.longitude.toString(),
        })
      );
      dispatch(clearError());
    } catch (error: unknown) {
      const errorMessage = handleGeolocationError(error as GeolocationPositionError);
      dispatch(setError(errorMessage));
    }
  };

  handleGeolocate();
};
