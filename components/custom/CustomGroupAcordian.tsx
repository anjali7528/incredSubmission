import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function CustomGroupAcordian({
  heading,
  subHeading,
  children,
}: {
  heading?: string;
  subHeading?: string;
  children: any;
}) {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline ">
            <div className="flex flex-col items-start">
              {heading ? (
                <div className="text-sm font-medium self-start ">
                  {heading}
                </div>
              ) : null}
              {subHeading ? (
                <div className="text-sm text-gray-400 ">
                  {subHeading}
                </div>
              ) : null}
            </div>
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default CustomGroupAcordian;
