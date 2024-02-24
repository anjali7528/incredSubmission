import React from "react";
import DonutChart from "./DonutChart";

function HoldingAnalysisCard() {
  return (
    <div className="flex  flex-wrap flex-col items-start gap-3">
      <span className=" text-xl font-semibold text-gray-700 px-4">
        Holding analysis
      </span>
      <span className="text-sm font-light px-4">Equity / Debt / Cash Split</span>
      <DonutChart
        labels={["Equity", "Debt", "Cash Split"]}
        values={[95.1, 3.9, 1.0]}
        colors={["#fff3c8", "#84a4ff", "#5367ff"]}
        offsetColors={["#fff3c8", "#84a4ff", "#5367ff"]}
        cutOffText="₹15,664Cr"
      />
      <span className="text-sm font-light px-4">Equity sector allocation</span>
      <DonutChart
        labels={[
          "Energy",
          "Financial",
          "Construction",
          "Services",
          "Metals and Mining",
          "Healthcare",
          "Consumer Staples",
          "others",
        ]}
        values={[17.1, 13.8, 13.0, 10.7, 9.8, 9.4, 6.9, 19.3]}
        colors={[
          "#ffb61b",
          "#66e3c4",
          "#5367ff",
          "#5367ff",
          "#eb5b3c",
          "#893168",
          "#e94967",
          "#9191e9",
        ]}
        offsetColors={[
          "#ffb61b",
          "#66e3c4",
          "#5367ff",
          "#5367ff",
          "#eb5b3c",
          "#893168",
          "#e94967",
          "#9191e9",
        ]}
        cutOffText="₹14,896Cr"
      />
    </div>
  );
}

export default HoldingAnalysisCard;
