"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import SliderTabs from "./SliderTabs";
import { Slider } from "../ui/slider";
import { CALCULATORFACTOR } from "@/data";

function ReturnCalculator() {
  const [tabIDX, setTabIdx] = useState(0);
  const [yearIDX, setYearIdx] = useState(0);
  const [year, setYear] = useState("1");
  const [sliderVal, setSliderVal] = useState(5000);
  const [finalAmount, setFinalAmount] = useState({ Amount: 0, factor: 0 });

  useEffect(() => {
    if (tabIDX === 0) {
      setSliderVal(5000);
    } else setSliderVal(20000);
  }, [tabIDX]);

  useEffect(() => {
    let calfactor;
    if (tabIDX === 0) {
      calfactor = CALCULATORFACTOR.monthly;
    } else if (tabIDX === 1) {
      calfactor = CALCULATORFACTOR.yearly;
    }
    if (calfactor) {
      const selectedYear = year
        .toString()
        ?.match(/\d+/g)
        ?.map(Number)
        ?.slice()[0];
      const calfactorEntry = calfactor.find(
        (item) => item.year === selectedYear
      );
      if (calfactorEntry) {
        const finalAmount =
          sliderVal + (sliderVal * calfactorEntry.factor) / 100;
        setFinalAmount({
          Amount: finalAmount * 12,
          factor: calfactorEntry.factor,
        });
      }
    }
  }, [sliderVal, year]);

  return (
    <Card className="flex w-2/4 px-8 py-8 flex-col flex-wrap">
      <div className="flex gap-2 mb-12 flex-wrap">
        <SliderTabs
          tabs={["Monthly SIP", "One-Time"]}
          sliderIDX={tabIDX}
          setSliderIDX={setTabIdx}
          identifierStyle="bg-orange-50 rounded-full text-orange-700 font-medium"
        />
      </div>
      <span>&#8377;{sliderVal} per month</span>
      <Slider
        defaultValue={[sliderVal]}
        max={50000}
        min={1000}
        step={500}
        value={[sliderVal]}
        className=" [&>*:first-child>*:first-child]:bg-orange-700 my-8"
        onValueChange={(selectedAmount) => setSliderVal(selectedAmount[0])}
      />
      <span>Over the past</span>
      <div className="flex border-b my-4 pb-6 flex-wrap">
        <SliderTabs
          tabs={["1 year", "3 years", "5 years"]}
          sliderIDX={yearIDX}
          setSliderIDX={setYearIdx}
          identifierStyle="bg-orange-50 rounded-full text-orange-700 font-medium"
          onTabChange={(value) => setYear(value)}
        />
      </div>
      <span className="text-sm font-light">Total investment of &#8377;{sliderVal * 12}</span>
      <span className=" font-semibold">
        Would have become &#8377;{finalAmount.Amount}{" "}
        <span className=" text-orange-600">&#40;+{finalAmount.factor}%&#41;</span>
      </span>
    </Card>
  );
}

export default ReturnCalculator;
