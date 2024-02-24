"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement
);

const LineChart = ({label, value}:{label:string[], value:number[]}) => {
   
  const data = {
    labels: label,
    datasets: [
      {
        label: "Sales",
        data: value,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
