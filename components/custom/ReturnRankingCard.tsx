"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../reusable/card";
import SliderTabs from "../reusable/SliderTabs";
import { DataTable } from "../reusable/TableCard";
import {
  RETURNRANKCOLUMS,
  RETURNRANKDATA,
  RETURNRANKDATAB,
  RETURNRANKTERMS,
} from "@/data";
import InfoDialog from "../reusable/InfoDialog";

function ReturnRankingCard() {
  const [tabIDX, setTabIdx] = useState(0);

  const getData = () => {
    if (tabIDX === 0) return RETURNRANKDATA;
    return RETURNRANKDATAB;
  };

  return (
    <div>
      <div className="text-xl font-semibold mb-2">Returns and rankings</div>
      <Card>
        <CardHeader className="flex flex-row justify-center sm:justify-between items-center flex-wrap">
          <CardTitle className="text-sm text-gray-500 font-normal">
            Category: Equity Small Cap
          </CardTitle>
          <div className="flex justify-center text-center">
            <SliderTabs
              tabs={["Annualised returns", "Absolute returns"]}
              sliderIDX={tabIDX}
              setSliderIDX={setTabIdx}
              identifierStyle="bg-orange-100 rounded-3xl text-orange-700 my-0 "
            />
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={RETURNRANKCOLUMS}
            data={getData()}
            showBorder={false}
          />
        </CardContent>
        <CardFooter className="gap-2">
          <InfoDialog
            data={RETURNRANKTERMS}
            title="Understand terms"
            heading="Understand terms"
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export default ReturnRankingCard;
