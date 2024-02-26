"use client";
import { useEffect, useMemo, useState } from "react";
import { Card } from "../reusable/card";
import SliderTabs from "../reusable/SliderTabs";
import { Slider } from "../reusable/slider";
import { CALCULATORFACTOR, yearsArr } from "@/data";

function ReturnCalculator() {
  const [tabIDX, setTabIdx] = useState(0);
  const [yearIDX, setYearIdx] = useState(0);
  const [sliderVal, setSliderVal] = useState(5000);

  useEffect(() => {
    if (tabIDX === 0) {
      setSliderVal(5000);
    } else setSliderVal(20000);
  }, [tabIDX]);

  const year = useMemo(() => {
    return Number(yearsArr[yearIDX].split(" ")[0]);
  }, [yearIDX]);

  const getFinalAmount = () => {
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
        return {
          Amount: finalAmount * 12,
          factor: calfactorEntry.factor,
        };
      }
    }
  };

  return (
    <div>
      <div className="text-xl font-semibold mb-2">Return Calculator</div>
      <Card className="flex  px-8 py-8 flex-col flex-wrap">
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
            tabs={yearsArr}
            sliderIDX={yearIDX}
            setSliderIDX={setYearIdx}
            identifierStyle="bg-orange-50 rounded-full text-orange-700 font-medium"
          />
        </div>
        <span className="text-sm font-light">
          Total investment of &#8377;{sliderVal * 12}
        </span>
        <span className=" font-semibold">
          Would have become &#8377;{Math.ceil(Number(getFinalAmount()?.Amount))}{" "}
          <span className=" text-orange-600">
            &#40;+{getFinalAmount()?.factor}%&#41;
          </span>
        </span>
      </Card>
    </div>
  );
}

export default ReturnCalculator;
