// import React, { memo } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   LabelList,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 8,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 18,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const renderCustomizedLabel = (props) => {
//   const { x, y, width, height, value } = props;
//   const radius = 10;

//   return (
//     <g>
//       <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
//       <text
//         x={x + width / 2}
//         y={y - radius}
//         fill="#fff"
//         textAnchor="middle"
//         dominantBaseline="middle"
//       >
//         {value.split(" ")[1]}
//       </text>
//     </g>
//   );
// };

// const HorizontalBarChartDataNew = () => {
//   return (
//     <>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
//             <LabelList dataKey="name" content={renderCustomizedLabel} />
//           </Bar>
//           <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
//         </BarChart>
//       </ResponsiveContainer>
//     </>
//   );
// };
// export default memo(HorizontalBarChartDataNew);

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import hrBarChartData from "./static/horizontalBarChartData";

const data = [
  {
    year: "2010",
    sum_of_sales_in_M: 4000,
    sum_of_capex_in_M: 2400,
    sum_of_market_cap_M: 3400,
  },
  {
    year: "2011",
    sum_of_sales_in_M: 3000,
    sum_of_capex_in_M: 1398,
    sum_of_profits_in_M: 2333,
    sum_of_market_cap_M: 6210,
  },
  {
    year: "2012",
    sum_of_sales_in_M: 2500,
    sum_of_capex_in_M: 897,
    sum_of_profits_in_M: 2333,
    sum_of_market_cap_M: 2290,
  },
  {
    year: "2013",
    sum_of_sales_in_M: 2780,
    sum_of_capex_in_M: 3908,
    sum_of_profits_in_M: 2333,
    sum_of_market_cap_M: 3000,
  },
  {
    year: "2014",
    sum_of_sales_in_M: 18,
    sum_of_capex_in_M: 4800,
    sum_of_profits_in_M: 2333,
    sum_of_market_cap_M: 1181,
  },
  {
    year: "2015",
    sum_of_sales_in_M: 2390,
    sum_of_capex_in_M: 3800,
    sum_of_profits_in_M: 2333,
    sum_of_market_cap_M: 2500,
  },
  {
    year: "2016",
    sum_of_sales_in_M: 3490,
    sum_of_capex_in_M: 4300,
    sum_of_profits_in_M: 2333,
    sum_of_market_cap_M: 2400,
  },
  {
    year: "2017",
    sum_of_sales_in_M: 3490,
    sum_of_capex_in_M: 4300,
    sum_of_profits_in_M: 2333,
    sum_of_market_cap_M: 1500,
  },
  {
    year: "2018 ",
    sum_of_sales_in_M: 3490,
    sum_of_capex_in_M: 4300,
    sum_of_profits_in_M: 2333,
    sum_of_market_cap_M: 2022,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <text x={x + width} y={y} fill="#19ADD2" textAnchor="middle" dy={-9}>
      {value}
    </text>
  );
};

export default function HorizontalBarChartDataNew() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        position: "relative",
        left: "7%",
        top: "100px",
      }}
    >
      <BarChart
        width={900}
        height={400}
        data={data}
        stackOffset="sign"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sum_of_capex_in_M" fill="#A4D0A0" minPointSize={6}></Bar>

        <Bar dataKey="sum_of_sales_in_M" fill="#0072AA" minPointSize={10} />
        <Bar dataKey="sum_of_profits_in_M" fill="#78ADD2" minPointSize={9} />
        <Bar dataKey="sum_of_market_cap_M" fill="#21AA47" minPointSize={7}>
          <LabelList
            dataKey="sum_of_market_cap_M"
            content={renderCustomizedLabel}
          />
        </Bar>
      </BarChart>
    </div>
  );
}
