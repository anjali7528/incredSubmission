import InfoDialog from "../reusable/InfoDialog";
import { PROSNCONSTERMS } from "@/data";

function ProsConsCard({
  prosArray,
  consArray,
}: {
  prosArray: string[];
  consArray: string[];
}) {
  return (
    <div>
      <div className="flex gap-2 mb-1">
        <div className="text-xl font-semibold ">Pros and cons</div>
        <InfoDialog
          data={PROSNCONSTERMS}
          title="Disclaimer"
          showSplit={false}
        />
      </div>
      <div className="text-md text-gray-600">Category:Equity Small Cap</div>
      <div className="flex gap-5 w-full my-10 flex-wrap">
        <div className="md:flex-1 w-full">
          <div className="text-xl font-semibold mb-1 text-green-600">
          &#128077; Pros
          </div>
          <ComponentMapper valueArray={prosArray} />
        </div>
        <div className="md:flex-1 w-full">
          <div className="text-xl font-semibold mb-1 text-red-600">
            &#x1F44E; Cons
          </div>
          <ComponentMapper valueArray={consArray} />
        </div>
      </div>
    </div>
  );
}

export default ProsConsCard;

const ComponentMapper = ({ valueArray }: { valueArray: string[] }) => (
  <>
    {valueArray.map((item, idx) => (
      <div
        className=" border-b border-gray-300 py-5 text-md text-gray-700 "
        key={`value_${idx}`}
      >
        {item}
      </div>
    ))}
  </>
);
