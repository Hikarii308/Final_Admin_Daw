import React from 'react';
import "./chart.scss";
import ReactApexChart from 'react-apexcharts';

const Chart = ({ aspect, title }) => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Project Progress (Bar)',
        data: [50, 70, 30, 90],
        type: 'bar', // Set this series as a bar chart
      },
      {
        name: 'Project Progress (Line)',
        data: [30, 50, 40, 80],
        type: 'line', // Set this series as a line chart
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line', // Default type to 'line'
        toolbar: {
          show: false, // Disable toolbar (including zoom and home buttons)
        },
      },
      stroke: {
        width: [0, 4], // Set stroke width for each series, 0 for bar and 4 for line
        curve: 'smooth',
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2'],
        },
      },
      xaxis: {
        categories: ['September', 'October', 'November', 'December'],
      },
      yaxis: [
        {
          title: {
            text: 'Projects',
          },
        },
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [0, 100],
          inverseColors: false,
          colorStops: [
            {
              offset: 0,
              color: '#703261',
            },
            {
              offset: 100,
              color: '#cfbcc7',
            },
          ],
        },
      },
    },
  });

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line" // Default type is 'line'
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
