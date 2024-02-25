"use client";
import React, { useEffect, useState, useCallback } from "react";
import LineChart from "./LineChart";
import { Badge } from "@/components/ui/badge";
import SliderTabs from "./SliderTabs";
import { BADGEDATA, LINEGRAPHDATA } from "@/data";

function GrowthCard() {
  const [sliderIDX, setSliderIDX] = useState(3);
  const [lineGraphData, setLineGraphData] = useState({});

  const fetchGraphData = useCallback((value: string) => {
    const data = LINEGRAPHDATA.data.find((item) => item.time === value);
    setLineGraphData({ ...data });
  }, []);

  useEffect(() => {
    fetchGraphData("3Y");
  }, [fetchGraphData]);

  return (
    <div className="w-1/2 flex flex-col px-2">
      <span className="text-2xl font-semibold text-gray-700">
        Axis Small Cap Fund Direct Growth
      </span>
      <div className="my-4">
        {BADGEDATA.map((item) => (
          <Badge
            key={item} // Assuming each item is unique
            className="text-xs font-normal bg-white text-black border-gray-100 hover:bg-gray-200 py-2"
          >
            {item}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2 items-baseline my-2">
        <span className="text-3xl">{lineGraphData?.returnPercentage}</span>
        <span className="text-gray-400"> {lineGraphData?.time} return</span>
      </div>

      <span className="text-xs text-orange-500 font-medium my-1">
        +0.85% 1D
      </span>

      <LineChart label={LINEGRAPHDATA.label} value={lineGraphData?.values} />

      <div className="flex border-t my-3 justify-center py-7 gap-2 ">
        <SliderTabs
          tabs={["1M", "6M", "1Y", "3Y", "5Y", "All"]}
          sliderIDX={sliderIDX}
          setSliderIDX={setSliderIDX}
          identifierStyle="bg-slate-200 rounded-3xl border border-black"
          tabStyle="rounded-3xl px-3 py-1 border"
          onTabChange={fetchGraphData}
        />
      </div>
    </div>
  );
}

export default GrowthCard;
