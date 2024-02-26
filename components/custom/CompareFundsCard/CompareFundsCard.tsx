import { Badge } from "../../reusable/badge";
import CompareCard from "./CompareCard";
import { COMPARISIONDATA } from "@/data";

function CompareFundsCard() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex  justify-between items-center">
        <div className="text-xl font-semibold mb-2">Compare funds</div>
        <Badge className="text-xs text-orange-700 bg-orange-50 hover:bg-orange-50 border-gray-200 cursor-pointer py-2">
          Compare with other funds
        </Badge>
      </div>
      <div className="flex gap-2 flex-wrap">
        {COMPARISIONDATA.map((item, idx) => {
          return <CompareCard data={item} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default CompareFundsCard;
