"use client";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
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

interface IDonutChart {
  labels: string[];
  values: number[];
  colors: string[];
  offsetColors: string[];
  cutOffText?: string;
}

const DonutChart = ({
  labels,
  values,
  colors,
  offsetColors,
  cutOffText = "",
}: IDonutChart) => {
  const [hoverIdx, setHoverIdx] = useState(-1);
  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: values,
        backgroundColor: colors,
        hoverOffset: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: offsetColors,
      },
    ],
  };

  const options = {
    onHover: (event: any, chartElement: any) => {
      if (event && chartElement) {
        const idx =
          chartElement[0]?.index === undefined ? -1 : chartElement[0]?.index;
        if (idx !== hoverIdx) {
          console.log("hello", idx);
          setHoverIdx(idx);
        }
      }
    },
  };

  const textCenter = {
    id: "text Center",
    beforeDatasetsDraw(chart: any, args: any) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 30px";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        cutOffText,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <div className="flex md:items-center gap-10 justify-between flex-wrap w-full">
      <div className="flex flex-col w-full md:w-fit">
        {labels.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`grid grid-cols-12 py-1 justify-center items-center ${
                hoverIdx === -1 || hoverIdx === idx
                  ? "opacity-100"
                  : "opacity-30"
              }`}
            >
              <div
                className={`h-2 w-2 rounded-full justify-self-end mx-2`}
                style={{ backgroundColor: colors[idx] }}
              ></div>
              <div className="col-span-9">{item}</div>
              <span className="col-span-2">{values[idx]}%</span>
            </div>
          );
        })}
      </div>
      <div className=" w-full md:w-60 h-60 flex justify-center">
        <Doughnut data={data2} options={options} plugins={[textCenter]} />
      </div>
    </div>
  );
};

export default DonutChart;
