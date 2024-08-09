/* eslint-disable react/prop-types */
import './styles.scss';

export const InformationItem = ({ legend, info }) => {
  return (
    <div className="informations-box--item info-item">
      <h3 className="info-item--title">{legend}</h3>
      <p className="info-item--score">{info ?? `N/A`}</p>
    </div>
  );
};
