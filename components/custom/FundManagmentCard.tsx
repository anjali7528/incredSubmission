import CustomGroupAcordian from "../reusable/CustomGroupAcordian";
import BasicDataCard from "../reusable/BasicDataCard";
import { FUNDMANAGMENTDATA } from "@/data";

function FundManagmentCard() {
  return (
    <div>
      <div className="text-xl font-semibold mb-2">Fund Managment</div>
      {FUNDMANAGMENTDATA.map((item, idx) => {
        return (
          <CustomGroupAcordian
            title={item.name}
            subHeading={item.date}
            key={idx}
          >
            <BasicDataCard data={item.innerData} />
          </CustomGroupAcordian>
        );
      })}
    </div>
  );
}

export default FundManagmentCard;
