import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from "recharts";
import hrBarChartData from "../static/horizontalBarChartData";

const HorizontalBarChartData = () => {
  return (
    <div style={{display:'grid',placeContent:'center',position:'relative',left:'10%',top:'100px'}}>
      <BarChart
          width={900}
          height={400}
          data={hrBarChartData}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        <Bar dataKey="Sum of Sales (€million)" barSize={16} stackId="a" fill="#FC8256" />
        <Bar dataKey="Sum of Capex (€million)" barSize={16} stackId="b" fill="#01B8AA" />
        <Bar dataKey="Sum of Profits (€million)" barSize={16} stackId="c" fill="#01b8aa" />
        <Bar dataKey="Sum of Market cap (€million)" barSize={16} stackId="d" fill="#F5CF40" />
        </BarChart>
    </div>
  );
};

export default HorizontalBarChartData;
