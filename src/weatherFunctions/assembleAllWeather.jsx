import getTodayWeather from './getTodayWeather';
import getFutureWeather from './getFutureWeather';

const assembleAllWeather = async location => {
  try {
    const todayWeather = await getTodayWeather(location);
    const forecastWeather = await getFutureWeather(location);

    return [todayWeather, forecastWeather];
  } catch (error) {
    console.error(
      'Cannot fetch weather data. Better go look out of the window.'
    );
    throw error;
  }
};

export default assembleAllWeather;
