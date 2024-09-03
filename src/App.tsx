import { CitySection, InfoBox, ForecastBox } from './features/WeatherDisplay';
import './index.scss';
import { useDates } from './functions';
import { useGeolocation } from './functions';

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
