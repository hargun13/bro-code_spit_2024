import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const HorizontalBarChart = ({ data }) => {
  const formattedData = Object.entries(data[0]).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <BarChart
      width={600}
      height={300}
      data={formattedData}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 90, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" stroke="black" tick={{ fontSize: 12 }} />
      <YAxis
        dataKey="name"
        type="category"
        stroke="black"
        tick={{ fontSize: 12 }}
      />
      <Tooltip
        cursor={{ fill: "rgba(255,255,255,0.1)" }}
        wrapperStyle={{ fontSize: 12, fontWeight: "bold", color: "#62D69C" }}
      />
      <Legend
        wrapperStyle={{ fontSize: 12, fontWeight: "bold", color: "#62D69C" }}
      />
      <Bar dataKey="value" fill="#62D69C" />
    </BarChart>
  );
};

export default HorizontalBarChart;
