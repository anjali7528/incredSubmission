import HoldingAnalysisCard from "@/components/custom/HoldingAnalysisCard";
import ItemSelectionCard from "@/components/custom/ItemSelectionCard";
import ReturnCalculator from "@/components/custom/ReturnCalculator";
import GrowthCard from "@/components/custom/GrowthCard";
import { DataTable } from "@/components/reusable/TableCard";
import {
  ADVANCERATIODATA,
  ADVANCERATIOINFODATA,
  CONSARRAY,
  ELERTDATA,
  ELERTTERMSDATA,
  EQUITYSECTORDATA,
  HOLDINGCHARTDATA,
  MININVESTAMTDATA,
  PEERCOMPARISONCOLDATA,
  PEERCOMPARISONDATA,
  PROSARRAY,
  TABLECOLUMS,
  TABLEDATA,
} from "@/data";
import InfoDialog from "@/components/reusable/InfoDialog";
import ReturnRankingCard from "@/components/custom/ReturnRankingCard";
import BasicDataCard from "@/components/reusable/BasicDataCard";
import FundManagmentCard from "@/components/custom/FundManagmentCard";
import SectionCard from "@/components/reusable/SectionCard";
import CompareFundsCard from "@/components/custom/CompareFundsCard/CompareFundsCard";
import ProsConsCard from "@/components/custom/ProsConsCard";
import FAQ from "@/components/custom/FAQ";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/reusable/dialog";

export default function Home() {
  return (
    <main className="flex mx-5 md:mx-48 flex-col gap-20 pt-5 pb-10 ">
      <div className="text-sm text-gray-400 flex-2">
        Home &gt; Mutual Funds &gt; Quant Mutual Funds &gt; Quant Small Cap Fund
        Direct Plan Growth
      </div>
      <div className="md:flex md:gap-10">
        <div className=" flex flex-col gap-20 justify-end">
          <GrowthCard />
          <ReturnCalculator />
          <DataTable
            data={TABLEDATA}
            columns={TABLECOLUMS}
            heading="Holdings"
          />
          <HoldingAnalysisCard
            heading="Holding Analysis"
            subHeading="Equity / Debt / Cash Split"
            chartData={HOLDINGCHARTDATA}
          />
          <HoldingAnalysisCard
            subHeading="Equity sector allocation"
            chartData={EQUITYSECTORDATA}
          />

          <SectionCard data={ADVANCERATIODATA} heading="Advanced ratios">
            <InfoDialog
              data={ADVANCERATIOINFODATA}
              title="Understand terms"
              heading="Understand terms"
            />
          </SectionCard>
          <SectionCard
            data={MININVESTAMTDATA}
            heading="Minimum investment amounts"
          />
          <ReturnRankingCard />
          <DataTable
            data={PEERCOMPARISONDATA}
            columns={PEERCOMPARISONCOLDATA}
            heading="Peer Comparison"
          />
          <BasicDataCard
            data={ELERTDATA}
            heading="Expense ratio, exit load and tax"
          >
            <InfoDialog
              data={ELERTTERMSDATA}
              title="Understand terms"
              heading="Understand terms"
            />
          </BasicDataCard>
          <FundManagmentCard />
          <ProsConsCard prosArray={PROSARRAY} consArray={CONSARRAY} />
          <CompareFundsCard />
          <FAQ />
        </div>
        <div className="md:hidden fixed bottom-0 w-full left-0">
          <Dialog>
            <DialogTrigger className="min-w-full bg-orange-700 h-14 text-white text-md font-semibold">
              Invest
            </DialogTrigger>
            <DialogContent>
              <ItemSelectionCard />
            </DialogContent>
          </Dialog>
        </div>
        <div className="md:sticky top-8 h-max hidden md:block ">
          <ItemSelectionCard />
        </div>
      </div>
    </main>
  );
}
