import { BarChartComponent } from './barchart';
import './_style.scss';

const index = () => {
  return (
    <div className="chart-container">
      <div className="chart-txt">
        <h1>Bar Chart Example</h1>
        <h4>
          Bar Chart is not works on mobile applications, please open with your
          laptop!
        </h4>
      </div>
      <div className="chart-wrapper">
        <BarChartComponent />
      </div>
    </div>
  );
};

export default index;
