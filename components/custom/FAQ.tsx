import { FAQDATA } from "@/data";
import CustomGroupAcordian from "../reusable/CustomGroupAcordian";

function FAQ() {
  return (
    <div>
      <div className="text-xl font-semibold mb-2">FAQs</div>
      {FAQDATA.map((item, idx) => {
        return (
          <CustomGroupAcordian title={item.title} key={idx}>
            <div>{item.value}</div>
          </CustomGroupAcordian>
        );
      })}
    </div>
  );
}

export default FAQ;
