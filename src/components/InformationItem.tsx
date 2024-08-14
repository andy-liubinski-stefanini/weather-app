interface InformationItemProps {
  legend: string;
  info?: string | number | null;
}

import './styles.scss';

export const InformationItem: React.FC<InformationItemProps> = ({ legend, info }) => {
  return (
    <div className="informations-box--item info-item">
      <h3 className="info-item--title">{legend}</h3>
      <p className="info-item--score">{info ?? `N/A`}</p>
    </div>
  );
};
