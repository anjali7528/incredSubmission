import React from "react";
import CustomGroupAcordian from "./CustomGroupAcordian";
import BasicDataCard from "./BasicDataCard";
import { ELERTDATA, FUNDMANAGMENTDATA } from "@/data";

function FundManagmentCard() {
  return (
    <div className="flex flex-wrap flex-col">
        <span className="text-xl">Fund Management</span>
      {FUNDMANAGMENTDATA.map((object, idx) => {
        return (
          <CustomGroupAcordian
            heading={object.name}
            subHeading={object.date}
            key={idx}
          >
            <BasicDataCard key={idx} data={object.innerData} />
          </CustomGroupAcordian>
        );
      })}
    </div>
  );
}

export default FundManagmentCard;
