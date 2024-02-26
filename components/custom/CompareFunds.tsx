import React from "react";
import { Card } from "../ui/card";

function CompareFunds({
  data,
  onCardClick,
}: {
  data: { icon: string; name: string }[];
  onCardClick: () => void;
}) {
  return (
    <div>
      <Card >
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex gap-5 py-8 px-4">
              <img
                src={item.icon}
                alt="img"
                className="w-10 h-10 object-contain"
              />
              <span>{item.name}</span>
            </div>
            {index !== data.length - 1 && (
              <div className="py-2 w-full bg-slate-100 flex justify-center items-center">
                VS
              </div>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
}

export default CompareFunds;
