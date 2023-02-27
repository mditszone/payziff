import React from 'react';
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
  Legend
);

export const options ={

  maintainAspectRatio: false,
    title: {
      display: false,
      text: 'Title',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'bottom'
    },
    scales: {
   xAxes: [{
    scaleLabel: {
        display: true,
        labelString: 'Date',
        fontSize: 10
    },
    //type: 'linear',
    position: 'bottom',
    gridLines: {
        display: false
    }
 }],
   yAxes: [{
    scaleLabel: {
        display: true,
        labelString: 'Total',
        fontSize: 10
     }
   }]
  }
};


export default function BarChart({data}) {
  return <Bar options={options} data={data} />;
}
