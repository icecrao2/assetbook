
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);






const Chart_doughnut = ({ plugins, data, chartStyles }) => {



  const options = {
    responsive: true,
    legend: {
      display: true
    },
    plugins: {
      mode: "dataset",
    },
    scales: {

    },
  };

  return (
    <div style={chartStyles}>
      <Doughnut options={options} data={data} plugins={plugins} />
    </div>
  );
}
export { Chart_doughnut };

