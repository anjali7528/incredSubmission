import { ReactElement } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

function CustomGroupAcordian({
  title,
  heading,
  subHeading,
  children,
}: {
  heading?: string;
  subHeading?: string;
  children: ReactElement;
  title?: string;
}) {
  return (
    <div>
      {heading && <div className="text-xl font-semibold mb-2">{heading}</div>}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline ">
            <div className="flex flex-col items-start text-left">
              {title ? (
                <div className="text-md font-medium self-start ">{title}</div>
              ) : null}
              {subHeading ? (
                <div className="text-sm text-gray-400 ">{subHeading}</div>
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
