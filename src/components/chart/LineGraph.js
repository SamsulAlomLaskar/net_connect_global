import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    cases: 4000,
    deaths: 3000,
    recovered: 2400,
  },
  {
    name: "Page B",
    cases: 3000,
    recovered: 1398,
    deaths: 2398,
  },
  {
    name: "Page C",
    cases: 2000,
    recovered: 9800,
    deaths: 2000,
  },
  {
    name: "Page D",
    cases: 2780,
    recovered: 3908,
    deaths: 3508,
  },
  {
    name: "Page E",
    cases: 1890,
    recovered: 4800,
    deaths: 3800,
  },
  {
    name: "Page F",
    cases: 2390,
    deaths: 2390,
    recovered: 3800,
  },
  {
    name: "Page G",
    cases: 3490,
    deaths: 3490,
    recovered: 4300,
  },
];

export default function LineGraph() {
  const [covidData, setCovidData] = useState([]);
  const [cases, setCases] = useState({
    name: "Page F",
    cases: 2390,
    deaths: 2390,
    recovered: 3800,
  });
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((json) => setCovidData(json))
      .catch((error) => console.error(error));
  }, []);

  console.log(covidData);

  for (const [key, value] of Object.entries(covidData.cases)) {
    console.log(`${key}: ${value} Data`);
  }

  return (
    <LineChart
      width={1200}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="recovered"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line yAxisId="right" type="monotone" dataKey="cases" stroke="#82ca9d" />
      <Line yAxisId="right" type="monotone" dataKey="deaths" stroke="red" />
    </LineChart>
  );
}
