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


export const options = {
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



const Chart_bar = ({ data, chartStyles }) => {



  return (
    <div style={chartStyles} >
      <Bar options={options} data={data} />
    </div>
  );
}
export { Chart_bar };

