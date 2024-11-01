import { FC } from 'react';
import type { TCardPropsType } from '@ttypes';
import './_style.scss';

const index: FC<TCardPropsType> = ({ title, icon, value, color }) => {
  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div className="stat_card" style={cardStyle}>
      <h1>{title}</h1>
      <h4>{value}</h4>
      <i className={icon}></i>
    </div>
  );
};

export default index;
