"use client";
import React, { useState } from "react";
import LineChart from "./LineChart";
import { Badge } from "@/components/ui/badge";
import SliderTabs from "./SliderTabs";

function GrowthCard() {
  const [sliderIDX, setSliderIDX] = useState(0);
  return (
    <div className="w-1/2 flex flex-col">
      <span className=" text-2xl font-large">
        Axis Small Cap Fund Direct Growth
      </span>
      <Badge> abcdefjn</Badge>
      <div className="flex gap-2 ">
        <span>10% </span>
        <span> 1M return</span>
      </div>

      <span>+0.85% 1D</span>
      <LineChart
        label={["January", "February", "March", "April", "May", "June", "July"]}
        value={[65, 59, 80, 81, 56, 55, 40]}
      />
      <div className="flex">
        <SliderTabs
          tabs={["1M", "6M", "1Y", "3Y", "5Y", "All"]}
          sliderIDX={sliderIDX}
          setSliderIDX={setSliderIDX}
        />
      </div>
    </div>
  );
}

export default GrowthCard;
