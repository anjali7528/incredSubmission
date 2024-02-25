"use client";
import React, { useEffect, useState, useCallback } from "react";
import LineChart from "./LineChart";
import { Badge } from "@/components/ui/badge";
import SliderTabs from "./SliderTabs";
import { BADGEDATA, GROWTHCARDSECTIONDATA, LINEGRAPHDATA } from "@/data";
import SectionCard from "./SectionCard";

function GrowthCard() {
  const [sliderIDX, setSliderIDX] = useState(3);
  const [lineGraphData, setLineGraphData] = useState({returnPercentage:"",time:"",values:[]});

  const fetchGraphData = useCallback((value: string) => {
    const data = LINEGRAPHDATA.data.find((item) => item.time === value);
    setLineGraphData({ returnPercentage: data?.returnPercentage, time:data?.time, values:data?.values });
  }, []);

  useEffect(() => {
    fetchGraphData("3Y");
  }, [fetchGraphData]);
  //w-1 h-68 md:w-2/3 md:h-2/3
  return (
    <div className="flex flex-col px-2 md:w-1/2">
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
      <SectionCard
        data={GROWTHCARDSECTIONDATA}
      />
    </div>
  );
}

export default GrowthCard;
