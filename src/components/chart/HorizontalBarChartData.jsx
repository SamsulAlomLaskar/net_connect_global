import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  LabelList,
} from "recharts";
import hrBarChartData from "../static/horizontalBarChartData";

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    //  hrBarChartData.map((item, value) => {
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#78ADD2" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {/* {item["Sum of Market cap (€million)"]} */}H
      </text>
    </g>
    // });
  );
};

const HorizontalBarChartData = () => {
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
        <Bar
          dataKey="Sum of Sales (€million)"
          barSize={16}
          stackId="a"
          fill="#A4D0A0"
        />
        <Bar
          dataKey="Sum of Capex (€million)"
          barSize={16}
          stackId="b"
          fill="#0072AA"
        />
        <Bar
          dataKey="Sum of Profits (€million)"
          barSize={16}
          stackId="c"
          fill="#78ADD2"
        />
        <Bar
          dataKey="Sum of Market cap (€million)"
          barSize={16}
          stackId="d"
          fill="#21AA47"
        >
          {" "}
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default HorizontalBarChartData;
