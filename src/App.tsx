import { CitySection, InfoBox, ForecastBox } from './features/WeatherDisplay';
import './index.scss';
import { useDates } from './hooks';
import { useGeolocation } from './hooks';

const App: React.FC = () => {
  useDates();
  useGeolocation();

  return (
    <main className="main">
      <CitySection />
      <InfoBox />
      <ForecastBox />
    </main>
  );
};

export default App;
