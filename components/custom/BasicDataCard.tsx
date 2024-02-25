import React from "react";

function BasicDataCard({ data }: { data: { key: string; value: string[] }[] }) {
  return (
    <div className="flex flex-wrap flex-col">
      {data.map((item, idx) => {
        return (
          <div key={idx} className="my-2">
            <div className="my-1 font-medium">{item.key}</div>
            {item.value.map((val, idx) => {
              return (
                <div className="font-light" key={idx}>
                  {val}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default BasicDataCard;
