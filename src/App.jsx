import { CitySection, InfoBox, ForecastBox } from './index';

function App() {
  return (
    <main className="main p-0 m-0 flex flex-col items-center justify-start h-screen bg-[#6D8CA0]">
      <CitySection />
      <InfoBox />
      <ForecastBox />
    </main>
  );
}

export default App;
