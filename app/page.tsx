import DountChart from "@/components/custom/DonutChart";
import LineChart from "@/components/custom/LineChart";
import Header from "@/components/custom/Header";
import HoldingAnalysisCard from "@/components/custom/HoldingAnalysisCard";
import ItemSelectionCard from "@/components/custom/ItemSelectionCard";
import ReturnCalculator from "@/components/custom/ReturnCalculator";
import GrowthCard from "@/components/custom/GrowthCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <ItemSelectionCard/>
     <ReturnCalculator/> */}
     <GrowthCard/>
      {/* <HoldingAnalysisCard/> */}
    </main>
  );
}
