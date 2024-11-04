// App.jsimport { FC } from 'react';
import { BarChartComponent } from './barchart';
import './_style.scss';

const index = () => {
  return (
    <div className="chart-wrapper">
      <h1>Bar Chart Example</h1>
      <BarChartComponent />
    </div>
  );
};

export default index;
