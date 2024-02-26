import { ReactElement } from "react";

function BasicDataCard({
  data,
  heading,
  children,
}: {
  data: { key: string; value: string[] }[];
  heading?: string;
  children?: ReactElement;
}) {
  return (
    <div>
      {heading && <div className="text-xl font-semibold mb-2">{heading}</div>}
      <div className="flex flex-col">
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
        {children}
      </div>
    </div>
  );
}

export default BasicDataCard;
