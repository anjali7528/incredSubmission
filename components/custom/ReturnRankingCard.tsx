"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import SliderTabs from "./SliderTabs";
import { DataTable } from "./TableCard";
import { ADVANCERATIOINFODATA, RETURNRANKCOLUMS, RETURNRANKDATA, RETURNRANKDATAB, RETURNRANKTERMS } from "@/data";
import InfoDialog from "./InfoDialog";


function ReturnRankingCard() {
  const [tabIDX, setTabIdx] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    if(tabIDX === 0) setData(RETURNRANKDATA);
    else setData(RETURNRANKDATAB)
  }, [tabIDX])
  

  return (
    <Card>
      <CardHeader className="flex flex-row justify-center sm:justify-between items-center flex-wrap">
        <CardTitle className="text-sm text-gray-500 font-normal">
          Category: Equity Small Cap
        </CardTitle>
        <div className="flex flex-wrap justify-center">
          <SliderTabs
            tabs={["Annualised returns", "Absolute returns"]}
            sliderIDX={tabIDX}
            setSliderIDX={setTabIdx}
            identifierStyle="bg-orange-100 rounded-3xl text-orange-700 my-0 "
          />
        </div>
      </CardHeader>
      <CardContent>
         <DataTable columns={RETURNRANKCOLUMS} data={data}/>
      </CardContent>
      <CardFooter className="gap-2">
      <span >Understand terms</span>
      <InfoDialog data={RETURNRANKTERMS} title="jnd" />
      </CardFooter>
    </Card>
  );
}

export default ReturnRankingCard;
