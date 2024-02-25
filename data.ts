export const CALCULATORFACTOR = {
  monthly: [
    {
      year: 1,
      factor: 20.0,
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
  label: ["a", "b", "c", "d", "e", "f"],
  time: ["1M", "6M", "1Y", "3Y", "5Y", "All"],
  data: [
    {
      time: "1M",
      returnPercentage: "10.94%",
      values: [10, 20, 13, 33, 40, 50],
    },
    {
      time: "6M",
      returnPercentage: "37.31%",
      values: [87, 42, 15, 64, 29, 91],
    },
    {
      time: "1Y",
      returnPercentage: "78.86%",
      values: [56, 73, 20, 88, 41, 95],
    },
    {
      time: "3Y",
      returnPercentage: "47.89%",
      values: [18, 67, 53, 19, 82, 90],
    },
    {
      time: "5Y",
      returnPercentage: "40.19%",
      values: [35, 68, 91, 14, 50, 77],
    },
    {
      time: "All",
      returnPercentage: "20.07%",
      values: [22, 83, 46, 57, 39, 74],
    },
  ],
};

export const BADGEDATA = ["Equity", "Small Cap", "Very High Risk"];

export const GROWTHCARDSECTIONDATA = [
  { key: "NAV: 23 Feb 2024", value: "₹261.44" },
  { key: "Min. SIP amount", value: "₹1,000" },
  { key: "Rating", value: "3 ★" },
  { key: "Fund size", value: "₹15,663.84Cr" },
];

export const TABLEDATA = [
  {
    id: "m5gr84i9",
    Name: "Reliance Industries Ltd",
    Sector: "Energy",
    Instrument: "Equity",
    Assets: "9.87%",
  },
  {
    id: "p8fj93h2",
    Name: "Tata Consultancy Services Ltd",
    Sector: "Information Technology",
    Instrument: "Mutual Fund",
    Assets: "12.34%",
  },
  {
    id: "a3kl47b5",
    Name: "HDFC Bank Ltd",
    Sector: "Finance",
    Instrument: "Equity",
    Assets: "8.56%",
  },
  {
    id: "q2dy59c1",
    Name: "Infosys Ltd",
    Sector: "Information Technology",
    Instrument: "Futures",
    Assets: "6.78%",
  },
  {
    id: "r9wx23e4",
    Name: "Mahindra & Mahindra Ltd",
    Sector: "Automobile",
    Instrument: "Equity",
    Assets: "11.23%",
  },
  {
    id: "t5vn78f6",
    Name: "Indian Oil Corporation Ltd",
    Sector: "Energy",
    Instrument: "Mutual Fund",
    Assets: "7.89%",
  },
  {
    id: "u4mc36g7",
    Name: "Bharti Airtel Ltd",
    Sector: "Telecommunications",
    Instrument: "Futures",
    Assets: "10.45%",
  },
  {
    id: "w7sp24h8",
    Name: "State Bank of India",
    Sector: "Finance",
    Instrument: "Equity",
    Assets: "9.01%",
  },
  {
    id: "z9pl14i6",
    Name: "Wipro Ltd",
    Sector: "Information Technology",
    Instrument: "Mutual Fund",
    Assets: "8.79%",
  },
  {
    id: "l3jd29k5",
    Name: "Adani Enterprises Ltd",
    Sector: "Infrastructure",
    Instrument: "Futures",
    Assets: "7.56%",
  },
  {
    id: "h6fu82l3",
    Name: "Axis Bank Ltd",
    Sector: "Finance",
    Instrument: "Equity",
    Assets: "11.98%",
  },
  {
    id: "g2qe45m9",
    Name: "ICICI Bank Ltd",
    Sector: "Finance",
    Instrument: "Mutual Fund",
    Assets: "10.67%",
  },
  {
    id: "v8tw63n1",
    Name: "Hindustan Unilever Ltd",
    Sector: "Consumer Goods",
    Instrument: "Futures",
    Assets: "9.33%",
  },
  {
    id: "k5ad77o2",
    Name: "Bajaj Auto Ltd",
    Sector: "Automobile",
    Instrument: "Equity",
    Assets: "6.45%",
  },
  {
    id: "b4se28p3",
    Name: "Tata Steel Ltd",
    Sector: "Metals",
    Instrument: "Mutual Fund",
    Assets: "8.87%",
  },
  {
    id: "x9zc81q4",
    Name: "ITC Ltd",
    Sector: "Consumer Goods",
    Instrument: "Equity",
    Assets: "10.12%",
  },
  {
    id: "y3rv47r5",
    Name: "ONGC Ltd",
    Sector: "Energy",
    Instrument: "Futures",
    Assets: "11.76%",
  },
  {
    id: "n2ak93s6",
    Name: "NTPC Ltd",
    Sector: "Energy",
    Instrument: "Mutual Fund",
    Assets: "7.23%",
  },
  {
    id: "m6bg59t7",
    Name: "Sun Pharmaceutical Industries Ltd",
    Sector: "Healthcare",
    Instrument: "Futures",
    Assets: "9.54%",
  },
  {
    id: "p7fc24u8",
    Name: "Bharat Petroleum Corporation Ltd",
    Sector: "Energy",
    Instrument: "Equity",
    Assets: "8.88%",
  },
];

export const TABLECOLUMS = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Sector",
    header: "Sector",
  },
  {
    accessorKey: "Instrument",
    header: "Instrument",
  },
  {
    accessorKey: "Assets",
    header: "Assets",
  },
];

export const ADVANCERATIOINFODATA = [
  {
    key: "P/E (Price/ Earning) ratio",
    value:
      "Weighted average of the P/E of underlying securities. P/E is the ratio of the current share price to the company’s earnings per share.Generally, overpriced stocks have a high P/E and unpriced stocks have a low P/E.",
  },
  {
    key: "P/B (Price/ Book) ratio",
    value:
      "Weighted average of the P/B of underlying securities. It is the ratio of the current share price to the book value per share. A lower P/B could either mean the stock is undervalued or there are problems in the company fundamentals.",
  },
  {
    key: "Alpha",
    value:
      "Weighted average of the alpha of underlying securities. This indicates how a stock has performed compared to the benchmark index value. If alpha is 1, it means the stock has outperformed the benchmark by 1% and -1 means the stock has underperformed by 1%.",
  },
  {
    key: "Beta",
    value:
      "Weighted average of the beta of underlying securities. Beta measures the movement of a stock in relation to the overall market movement. If beta > 1, it means the stock is more volatile. If beta < 1, it means lower volatility.",
  },
  {
    key: "Sharpe ratio",
    value:
      "Weighted average of the Sharpe ratio of underlying securities. This helps understand the return of an investment compared to its risk. Sharpe ratio of 1 to 3 or above means greater returns from an investment but with a higher risk level.",
  },
  {
    key: "Sortino",
    value:
      "Weighted average of the sortino ratio of underlying securities to help evaluate the returns of an investment for a given level of bad risk. Higher sortino ratio, better is the investment. Sortino ratio>2 is considered to be good.",
  },
];

export const RETURNRANKDATA = [
  {
    id: "1234",
    Name: "Fund returns",
    ONEY: "75.9%",
    THREEY: "47.1%",
    FIVEY: "40.2%",
    All: "20.1%",
  },
  {
    id: "12345",
    Name: "Category average",
    ONEY: "55.7%",
    THREEY: "30.2%",
    FIVEY: "27.7%",
    All: "NA",
  },
  {
    id: "123455",
    Name: "Rank with in category",
    ONEY: "3",
    THREEY: "1",
    FIVEY: "1",
    All: "NA",
  },
];

export const RETURNRANKDATAB = [
  {
    id: "1234",
    Name: "Fund returns",
    ONEY: "70.5%",
    THREEY: "45.3%",
    FIVEY: "38.9%",
    All: "18.7%",
  },
  {
    id: "12345",
    Name: "Category average",
    ONEY: "50.2%",
    THREEY: "28.6%",
    FIVEY: "25.9%",
    All: "NA",
  },
  {
    id: "123455",
    Name: "Rank with in category",
    ONEY: "2",
    THREEY: "1",
    FIVEY: "1",
    All: "NA",
  },
];

export const RETURNRANKCOLUMS = [
  {
    accessorKey: "Name",
    header: " ",
  },
  {
    accessorKey: "ONEY",
    header: "1Y",
  },
  {
    accessorKey: "THREEY",
    header: "3Y",
  },
  {
    accessorKey: "FIVEY",
    header: "5Y",
  },
  {
    accessorKey: "All",
    header: "All",
  },
];

export const RETURNRANKTERMS = [
  {
    key: "Annualised returns",
    value:
      "Average of the yearly returns of a mutual fund over a given period.",
  },

  {
    key: "Absolute returns",
    value: "The total return of a mutual fund over a given period",
  },
];

export const ELERTDATA = [
  {
    key: "Expense ratio: 0.70%",
    value: ["Inclusive of GST"],
  },
  {
    key: "Exit load",
    value: ["Exit load of 1% if redeemed within 1 year"],
  },
  {
    key: "Stamp duty",
    value: ["0.005% (from July 1st, 2020)"],
  },
  {
    key: "Tax implication",
    value: [
      "Returns are taxed at 15%, if you redeem before one year. After 1 year, you are required to pay LTCG tax of 10% on returns of Rs 1 lakh+ in a financial year.",
    ],
  },
];
