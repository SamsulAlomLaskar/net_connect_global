import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import lineChartData from "../static/statisticsLineChartData";

const StatsLineChart = () => {
  return (
    <LineChart
      width={600}
      height={300}
      style={{
        display: "grid",
        placeContent: "center",
        margin: "5% 50%",
        top: "20%",
        left:"-10%"
      }}
      data={lineChartData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="Sum of Sales (€million)" strokeWidth={2} stroke="#ED7D31" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};
export default StatsLineChart;
