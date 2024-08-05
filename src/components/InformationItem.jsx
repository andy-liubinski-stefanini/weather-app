/* eslint-disable react/prop-types */
export const InformationItem = ({ legend, info }) => {
  return (
    <div className=" px-4 flex flex-col justify-center items-center flex-grow ">
      <h3 className="uv-index--title">{legend}</h3>
      <p className="uv-index--score text-3xl opacity-70">{info || `N/A`}</p>
    </div>
  );
};
