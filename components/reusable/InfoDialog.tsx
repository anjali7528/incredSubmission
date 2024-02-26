import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
} from "@/components/reusable/dialog";
import SectionCard from "./SectionCard";

function InfoDialog({
  data,
  title,
  heading,
  showSplit
}: {
  data: { key: string; value: string }[];
  title?: string;
  heading?: string;
  showSplit?:boolean
}) {
  return (
    <Dialog>
      <div className="flex items-center gap-2">
        {heading && <span className="text-gray-400 text-sm">{heading}</span>}
        <DialogTrigger className="bg-gray-400 rounded-full text-xs  font-medium  w-4 h-4 text-white">
          ℹ
        </DialogTrigger>
      </div>
      <DialogContent className=" flex h-full  md:max-h-96 md:h-max lg:max-w-fit overflow-auto">
        <DialogHeader>
          <DialogTitle className="px-4">{title}</DialogTitle>
          <DialogDescription>
            <SectionCard data={data} showSplit={showSplit}/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default InfoDialog;
