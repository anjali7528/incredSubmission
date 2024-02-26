import { ReactElement } from "react";

function SectionCard({
  data,
  heading,
  children,
  showSplit = true,
}: {
  data: { key: string; value: string }[];
  heading?: string;
  children?: ReactElement;
  showSplit?: boolean;
}) {
  const getFirstSectionData = () => {
    if (!showSplit) {
      return data;
    }
    return data.slice(0, data.length / 2 + (data.length % 2));
  };
  return (
    <div>
      {heading && <div className="text-xl font-semibold mb-2">{heading}</div>}
      <div className="flex justify-between flex-wrap ">
        <div
          className={`w-full ${
            showSplit ? " md:w-1/2 md:border-r-2" : ""
          } px-5  `}
        >
          {getFirstSectionData().map((item, idx) => {
            return (
              <div key={idx} className="flex justify-between my-2 flex-wrap">
                <div className=" text-gray-500 my-1">{item.key}</div>
                <div className="text-black">{item.value}</div>
              </div>
            );
          })}
        </div>
        {showSplit && (
          <div className="w-full md:w-1/2 px-5">
            {data
              .slice(data.length / 2 + (data.length % 2), data.length)
              .map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex justify-between my-2 flex-wrap"
                  >
                    <div className=" text-gray-500 my-1">{item.key}</div>
                    <div className="text-black">{item.value}</div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

export default SectionCard;
