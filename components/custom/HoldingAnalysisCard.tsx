import DonutChart from "../reusable/DonutChart";

function HoldingAnalysisCard({
  heading,
  subHeading,
  chartData,
}: {
  heading?: string;
  subHeading?: string;
  chartData: {
    labels: string[];
    values: number[];
    colors: string[];
    offsetColors: string[];
    cutOffText: string;
  };
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      {heading && <div className="text-xl font-semibold mb-2">{heading}</div>}
      {subHeading && <div className="text-sm font-light ">{subHeading}</div>}
      <DonutChart
        labels={chartData.labels}
        values={chartData.values}
        colors={chartData.colors}
        offsetColors={chartData.offsetColors}
        cutOffText={chartData.cutOffText}
      />
    </div>
  );
}

export default HoldingAnalysisCard;
