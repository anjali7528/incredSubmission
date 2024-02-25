import React from "react";

function SectionCard({ data }: { data: { key: string; value: string }[] }) {
  return (
    <div className="flex justify-between ">
      <div className="w-1/2 px-5 border-r-2 ">
        {data.slice(0, data.length / 2 + (data.length % 2)).map((item, idx) => {
          return (
            <div key={idx} className="flex justify-between my-2 flex-wrap">
              <div className=" text-gray-500 my-1">{item.key}</div>
              <div className="text-black">{item.value}</div>
            </div>
          );
        })}
      </div>
      <div className="w-1/2 px-5">
        {data
          .slice(data.length / 2 + (data.length % 2), data.length)
          .map((item, idx) => {
            return (
              <div key={idx} className="flex justify-between my-2 flex-wrap">
                <div className=" text-gray-500">{item.key}</div>
                <div className="text-black">{item.value}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SectionCard;
