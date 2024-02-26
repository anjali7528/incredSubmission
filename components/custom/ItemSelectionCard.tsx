"use client";
import { useState, useMemo } from "react";
import { Card } from "../reusable/card";
import { Button } from "../reusable/button";
import { Input } from "../reusable/input";
import { getNextMonthFirstDate } from "@/util/helper";
import SliderTabs from "../reusable/SliderTabs";

function ItemSelectionCard() {
  const [sliderIDX, setSliderIDX] = useState(0);
  const [selectedDate, setSelectedDate] = useState(getNextMonthFirstDate());
  const [sipAmount, setSipAmount] = useState("");
  const [valError, setValError] = useState({
    status: false,
    message: "",
    component: "",
  });

  const inputValidations = useMemo(() => {
    return () => {
      let error = { status: false, message: "", component: "" };
      if (sipAmount === "")
        error = {
          status: true,
          message: "Enter valid SIP amount",
          component: "amount",
        };
      else if (parseInt(sipAmount) < 2000)
        error = {
          status: true,
          message: "Enter SIP amount greater than 2000",
          component: "amount",
        };
      else if (new Date(selectedDate) < new Date())
        error = {
          status: true,
          message: "Selected date cannot be in the past",
          component: "date",
        };
      setValError(error);
      return !error.status;
    };
  }, [sipAmount, selectedDate]);

  const handleSIPAmount = (e: any) => {
    setValError({ status: false, message: "", component: "" });
    setSipAmount(e.target.value);
  };

  const renderMonthlySIPFields = useMemo(() => {
    return (
      <>
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs">SIP Amount</label>
          <Input
            className={`w-2/4 text-orange-700 border-0 ${
              valError.status && valError.component === "amount"
                ? "bg-red-50"
                : "bg-orange-50"
            }`}
            name="sipAmount"
            type="number"
            placeholder="0"
            value={sipAmount}
            onChange={handleSIPAmount}
          />
        </div>
        {sliderIDX === 0 && (
          <div className="flex items-center justify-between">
            <label className="text-xs">Monthly SIP Date</label>
            <Input
              className={`w-2/4 text-orange-700 border-0 ${
                valError.status && valError.component === "date"
                  ? "bg-red-50"
                  : "bg-orange-50"
              }`}
              name="sipDate"
              type="date"
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
            />
          </div>
        )}
      </>
    );
  }, [sliderIDX, sipAmount, selectedDate, valError]);

  return (
    <Card className="w-96">
      <div className="flex flex-row gap-3 border-b">
        <SliderTabs
          tabs={["MONTHLY SIP", "ONE TIME"]}
          setSliderIDX={setSliderIDX}
          sliderIDX={sliderIDX}
        />
      </div>
      <div className="px-8 py-6 flex-col items-stretch">
        <div className="min-h-64">{renderMonthlySIPFields}</div>
        <div className="flex flex-col gap-2">
          {sliderIDX === 0 && (
            <span className="text-xs font-thin text-center">
              {!valError.status
                ? `Next SIP installment on ${selectedDate}`
                : valError.message}
            </span>
          )}
          <div className="flex flex-row gap-2 flex-wrap">
            <Button
              className="flex-grow bg-orange-100 text-orange-700 hover:bg-orange-100"
              onClick={() =>
                inputValidations() && console.log("Add to Cart clicked")
              }
            >
              ADD TO CART
            </Button>
            <Button
              className="flex-grow bg-orange-700 text-white hover:bg-orange-600"
              onClick={() =>
                inputValidations() && console.log("Invest clicked")
              }
            >
              {sliderIDX === 0 ? "START SIP" : "INVEST"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ItemSelectionCard;
