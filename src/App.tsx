import { Fragment } from 'react/jsx-runtime';
import './App.css';
import { CiLocationOn } from 'react-icons/ci';
import { CiMap } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';

import { WiMeteor } from 'react-icons/wi';
import { WiDaySunny } from 'react-icons/wi';

function App() {
  return (
    <Fragment>
      <main className="main p-0 m-0 flex flex-col items-center justify-start h-screen bg-[#6D8CA0]">
        <section className=" main--city city w-2/3  h-1/3 relative">
          <nav className="city--navigation_box navigation absolute h-full w-16 flex flex-col justify-evenly items-center">
            <button className="navigation--geolocate border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl">
              <CiLocationOn />
            </button>
            <button className="navigation--search  border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl">
              <CiMap />
            </button>
            <button className="navigation--toggle_unit border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl">
              C°
            </button>
          </nav>
          <div className="city--display_box city_box w-full h-full  flex flex-col justify-evenly items-center">
            <h1 className="city_box--city_name text-5xl font-bold">
              South Gulf of Mexico
            </h1>
            <div className="city_box--search search-box w-1/2 h-12  flex-row justify-evenly items-center hidden">
              <input
                placeholder="Enter a city"
                className="search-box--input rounded active:border active:border-slate-600 active:outline-none h-10 w-2/3 p-1 placeholder:opacity-50 text-black"
              ></input>
              <button className="search-box--button border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl">
                <CiSearch />
              </button>
            </div>
            <h2 className="city_box--date text-3xl font-thin opacity-70">
              66 mln years ago
            </h2>
          </div>
        </section>
        <section className="main--info-box info-box flex flex-col justify-between items-center w-2/3 h-1/3">
          <div className="info-box--informations-box informations-box grid grid-cols-4 grid-rows-1 gap-0 w-full ">
            <div className="informations-box--icon  px-4 flex flex-row justify-end items-center flex-grow text-7xl">
              <WiMeteor />
            </div>
            <div className="informations-box--temps  px-4 flex flex-row justify-start items-center flex-grow text-6xl font-thin opacity-70">
              999°
            </div>
            <div className="informations-box--air-qual air-qual px-4 flex flex-col justify-center items-center flex-grow ">
              <h3 className="air-qual--title">Air quality:</h3>
              <p className="air-qual--score text-3xl opacity-70">1/10</p>
            </div>
            <div className="informations-box--uv-index uv-index px-4 flex flex-col justify-center items-center flex-grow ">
              <h3 className="uv-index--title">UV Index:</h3>
              <p className="uv-index--score text-3xl opacity-70">10/10</p>
            </div>
          </div>
          <div className="info-box--explanation explanation w-full flex flex-row justify-center items-center flex-grow pb-1">
            <p className="explanation-text">
              Way too hot! It's best to stay indoors and keep yourself hydrated.
            </p>
          </div>
        </section>
        <section className="main--forecast forecast-box w-2/3 h-1/3 flex flex-row">
          <div className="forecast-box--day day-forecast w-1/5 h-full flex flex-col justify-between items-center">
            <div className="day-forecast--day font-light text-lg">Today</div>
            <div className="day-forecast--icon font-bold text-6xl">
              <WiDaySunny />
            </div>
            <div className="day-forecast--description">Partly sunny</div>
            <div className="day-forecast--temps pb-4">Max:31° | Min: 22°</div>
          </div>
          <div className="forecast-box--day day-forecast w-1/5 h-full flex flex-col justify-between items-center">
            <div className="day-forecast--day font-light text-lg">Today</div>
            <div className="day-forecast--icon font-bold text-6xl">
              <WiDaySunny />
            </div>
            <div className="day-forecast--description">Partly sunny</div>
            <div className="day-forecast--temps pb-4">Max:31° | Min: 22°</div>
          </div>
          <div className="forecast-box--day day-forecast w-1/5 h-full flex flex-col justify-between items-center">
            <div className="day-forecast--day font-light text-lg">Today</div>
            <div className="day-forecast--icon font-bold text-6xl">
              <WiDaySunny />
            </div>
            <div className="day-forecast--description">Partly sunny</div>
            <div className="day-forecast--temps pb-4">Max:31° | Min: 22°</div>
          </div>
          <div className="forecast-box--day day-forecast w-1/5 h-full flex flex-col justify-between items-center">
            <div className="day-forecast--day font-light text-lg">Today</div>
            <div className="day-forecast--icon font-bold text-6xl">
              <WiDaySunny />
            </div>
            <div className="day-forecast--description">Partly sunny</div>
            <div className="day-forecast--temps pb-4">Max:31° | Min: 22°</div>
          </div>
          <div className="forecast-box--day day-forecast w-1/5 h-full flex flex-col justify-between items-center">
            <div className="day-forecast--day font-light text-lg">Today</div>
            <div className="day-forecast--icon font-bold text-6xl">
              <WiDaySunny />
            </div>
            <div className="day-forecast--description">Partly sunny</div>
            <div className="day-forecast--temps pb-4">Max:31° | Min: 22°</div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
