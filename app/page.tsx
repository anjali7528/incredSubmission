import DountChart from "@/components/custom/DonutChart";
import LineChart from "@/components/custom/LineChart";
import Header from "@/components/custom/Header";
import HoldingAnalysisCard from "@/components/custom/HoldingAnalysisCard";
import ItemSelectionCard from "@/components/custom/ItemSelectionCard";
import ReturnCalculator from "@/components/custom/ReturnCalculator";
import GrowthCard from "@/components/custom/GrowthCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DataTable } from "@/components/custom/TableCard";
import { ADVANCERATIOINFODATA, COMPARISIONDATA, ELERTDATA, TABLECOLUMS, TABLEDATA } from "@/data";
import InfoDialog from "@/components/custom/InfoDialog";
import ReturnRankingCard from "@/components/custom/ReturnRankingCard";
import BasicDataCard from "@/components/custom/BasicDataCard";
import CustomGroupAcordian from "@/components/custom/CustomGroupAcordian";
import FundManagmentCard from "@/components/custom/FundManagmentCard";
import CompareFunds from "@/components/custom/CompareFunds";

const handleClick = ()=>{
  console.log("ahd")
}

export default function Home() {
  return (
    <main>
      <ItemSelectionCard/>
     <ReturnCalculator/>
     <GrowthCard/>
      <HoldingAnalysisCard/>
      <DataTable columns={TABLECOLUMS} data={TABLEDATA} />
      <InfoDialog data={ADVANCERATIOINFODATA} title="jnd"/>
      <ReturnRankingCard/>
      <BasicDataCard data={ELERTDATA}/>
      <FundManagmentCard/>
     {/* {COMPARISIONDATA.map((item, idx) =>{
         return <div className="flex "><CompareFunds key={idx} data={item} onCardClick={handleClick}/></div>
     })} */}
    </main>
  );
}
