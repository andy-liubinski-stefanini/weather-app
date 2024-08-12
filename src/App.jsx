import { CitySection, InfoBox, ForecastBox } from './features/WeatherDisplay';
import './index.scss'; // Import the SCSS file

function App() {
  return (
    <main className="main">
      <CitySection />
      <InfoBox />
      <ForecastBox />
    </main>
  );
}

export default App;
