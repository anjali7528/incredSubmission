"use client";
import { useState, useCallback } from "react";
import LineChart from "../reusable/LineChart";
import { Badge } from "@/components/reusable/badge";
import SliderTabs from "../reusable/SliderTabs";
import { BADGEDATA, GROWTHCARDSECTIONDATA, LINEGRAPHDATA, arr } from "@/data";
import SectionCard from "../reusable/SectionCard";

function GrowthCard() {
  const [sliderIDX, setSliderIDX] = useState(3);

  const fetchGraphData = useCallback(() => {
    const data = LINEGRAPHDATA.data.find(
      (item) => item.time === arr[sliderIDX]
    );
    return {
      returnPercentage: data?.returnPercentage,
      time: data?.time,
      values: data?.values,
    };
  }, [sliderIDX]);

  return (
    <div className="flex flex-col px-2 ">
      <span className="text-2xl font-semibold text-gray-700">
        Quant Small Cap Fund Direct Growth
      </span>
      <div className="my-4">
        {BADGEDATA.map((item) => (
          <Badge
            key={item} // Assuming each item is unique
            className="text-xs font-normal bg-white text-black border-gray-100 hover:bg-gray-200 py-2 cursor-pointer"
          >
            {item}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2 items-baseline my-2">
        <span className="text-3xl">{fetchGraphData()?.returnPercentage}</span>
        <span className="text-gray-400"> {fetchGraphData()?.time} return</span>
      </div>

      <span className="text-xs text-orange-500 font-medium my-1">
        +0.85% 1D
      </span>

      <LineChart
        label={LINEGRAPHDATA.label}
        value={fetchGraphData()?.values || []}
      />

      <div className="flex border-t my-3 justify-center py-7 gap-2 ">
        <SliderTabs
          tabs={arr}
          sliderIDX={sliderIDX}
          setSliderIDX={setSliderIDX}
          identifierStyle="bg-slate-200 rounded-3xl border border-black"
          tabStyle="rounded-3xl px-3 py-1 border "
        />
      </div>
      <SectionCard data={GROWTHCARDSECTIONDATA} />
    </div>
  );
}

export default GrowthCard;
