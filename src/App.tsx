import { CitySection, InfoBox, ForecastBox } from './features/WeatherDisplay';
import './index.scss'; 

const App: React.FC = () => {
  return (
    <main className="main">
      <CitySection />
      <InfoBox />
      <ForecastBox />
    </main>
  );
}

export default App;
