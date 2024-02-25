export const CALCULATORFACTOR = {
    monthly: [
      {
        year: 1,
        factor: 20.00,
      },
      {
        year: 3,
        factor: 61.66,
      },
      {
        year: 5,
        factor: 168.31,
      },
    ],
    yearly: [
      {
        year: 1,
        factor: 73.65,
      },
      {
        year: 3,
        factor: 223.72,
      },
      {
        year: 5,
        factor: 437.44,
      },
    ],
  };

  export const LINEGRAPHDATA = {
    label:["a","b","c","d","e","f"],
    time:["1M","6M","1Y","3Y","5Y","All"],
    data:[{
      time:"1M",
      returnPercentage:"10.94%",
      values:[10,20,13,33,40,50]
    },
    {
      time:"6M",
      returnPercentage:"37.31%",
      values:[87, 42, 15, 64, 29, 91]
    },
    {
      time:"1Y",
      returnPercentage:"78.86%",
      values:[56, 73, 20, 88, 41, 95]
    },
    {
      time:"3Y",
      returnPercentage:"47.89%",
      values:[18, 67, 53, 19, 82, 90]
    },
    {
      time:"5Y",
      returnPercentage:"40.19%",
      values:[35, 68, 91, 14, 50, 77]
    },
    {
      time:"All",
      returnPercentage:"20.07%",
      values:[22, 83, 46, 57, 39, 74]
    }
    ],
  }

  export const BADGEDATA = ["Equity", "Small Cap", "Very High Risk"];