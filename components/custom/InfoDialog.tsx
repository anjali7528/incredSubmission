import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
   DialogTitle
} from "@/components/ui/dialog";
import SectionCard from "./SectionCard";

function InfoDialog({ data, title }: { data: { key: string; value: string }[], title?:string }) {
  return (
    <Dialog>
      <DialogTrigger className="bg-gray-400 rounded-full text-xs  font-medium  w-4 h-4 text-white">
        ℹ
      </DialogTrigger>
      <DialogContent className=" flex lg:max-h-fit lg:max-w-fit">
        <DialogHeader>
          <DialogTitle className="px-4">{title}</DialogTitle>
          <DialogDescription>
            <SectionCard data={data} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default InfoDialog;
