import { BarChartComponent } from './barchart';
import './_style.scss';

const index = () => {
  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <h1>Bar Chart Example</h1>
        <BarChartComponent />
      </div>
    </div>
  );
};

export default index;
