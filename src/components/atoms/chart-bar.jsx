import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);





const Chart_bar = ({ data, chartStyles }) => {

  const options = {
    responsive: true,
    legend: {
      display: true
    },
    plugins: {
      mode: "dataset"
    },
    maintainAspectRatio: false,
    scales: {

    },
  };



  return (
    <div style={chartStyles} >
      <Bar options={options} data={data} />
    </div>
  );
}
export { Chart_bar };

