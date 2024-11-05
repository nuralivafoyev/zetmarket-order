import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { dataChart } from '@constants';

export const BarChartComponent = () => {
  return (
    <BarChart
      className="barchart"
      width={1000}
      height={300}
      data={dataChart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        style={{
          fontSize: '12px',
        }}
        dataKey="name"
      />
      <YAxis
        style={{
          fontSize: '12px',
        }}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="iPhone" fill="#8884d8" />
      <Bar dataKey="android" fill="#82ca9d" />
    </BarChart>
  );
};
