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

const LineChart = ({ label, value }: { label: string[]; value: number[] }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: "Sales",
        data: value,
        fill: false,
        borderColor: "rgba(211, 84, 0)",
        tension: 0.1,
        pointBackgroundColor: "rgba(211, 84, 0)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false, 
      },
      x: {
        display: false, 
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
      
    },
  };

  return (
    <div >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
