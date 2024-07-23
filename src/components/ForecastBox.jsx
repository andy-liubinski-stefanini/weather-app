import ForecastDay from './ForecastDay';

const ForecastBox = () => {
  return (
    <section className="main--forecast forecast-box w-2/3 h-1/3 flex flex-row">
      <ForecastDay />
      <ForecastDay />
      <ForecastDay />
      <ForecastDay />
      <ForecastDay />
    </section>
  );
};

export default ForecastBox;
