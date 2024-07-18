import { Fragment } from 'react/jsx-runtime';
import './App.css';

import CitySection from './components/CitySection';
import InfoBox from './components/InfoBox';
import ForecastBox from './components/ForecastBox';

function App() {
  return (
    <Fragment>
      <main className="main p-0 m-0 flex flex-col items-center justify-start h-screen bg-[#6D8CA0]">
        <CitySection />
        <InfoBox />
        <ForecastBox />
      </main>
    </Fragment>
  );
}

export default App;
