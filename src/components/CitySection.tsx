import Navigation from './navigationParts/Navigation';
import Search from './navigationParts/Search';

const CitySection = () => {
  return (
    <section className=" main--city city w-2/3  h-1/3 relative">
      <Navigation />
      <div className="city--display_box city_box w-full h-full  flex flex-col justify-evenly items-center">
        <h1 className="city_box--city_name text-5xl font-bold">
          South Gulf of Mexico
        </h1>
        <Search />
        <h2 className="city_box--date text-3xl font-thin opacity-70">
          66 mln years ago
        </h2>
      </div>
    </section>
  );
};

export default CitySection;
