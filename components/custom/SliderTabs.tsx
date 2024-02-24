import React from "react";

interface ISliderTabs {
  tabs: string[];
  sliderIDX: number;
  setSliderIDX: React.Dispatch<React.SetStateAction<number>>;
  identifierStyle?: string;
  onTabChange?: (value: string) => void;
}

function SliderTabs({
  tabs,
  sliderIDX = 0,
  setSliderIDX,
  identifierStyle = "border-b-orange-500 border-b-2",
  onTabChange,
}: ISliderTabs) {
  const handleTabChange = (index: number) => {
    if (setSliderIDX) setSliderIDX(index);
    if (onTabChange) onTabChange(tabs[index]);
  };

  return (
    <>
      {tabs.map((tab: string, index: number) => {
        const isActive = sliderIDX === index;
        return (
          <div
            key={index}
            className={`text-sm text-black cursor-pointer py-3 px-8 ${
              isActive ? identifierStyle : "border-b-0"
            }`}
            onClick={() => handleTabChange(index)}
          >
            {tab}
          </div>
        );
      })}
    </>
  );
}

export default React.memo(SliderTabs);