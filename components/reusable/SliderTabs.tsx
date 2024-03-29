import React from "react";

interface ISliderTabs {
  tabs: string[];
  sliderIDX: number;
  setSliderIDX: React.Dispatch<React.SetStateAction<number>>;
  identifierStyle?: string;
  tabStyle?: string;
}

function SliderTabs({
  tabs,
  sliderIDX = 0,
  setSliderIDX,
  identifierStyle = "border-b-orange-500 border-b-2",
  
  tabStyle="text-sm text-black cursor-pointer py-3 px-8"
}: ISliderTabs) {
  const handleTabChange = (index: number) => {
    if (setSliderIDX) setSliderIDX(index);
  };

  return (
    <>
      {tabs.map((tab: string, index: number) => {
        const isActive = sliderIDX === index;
        return (
          <div
            key={index}
            className={`cursor-pointer ${tabStyle} ${
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
