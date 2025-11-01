import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface DataPoint {
  time: string;
  suhu: number;
  level: number;
}

interface TankChartProps {
  data: DataPoint[];
}

const TankChart: React.FC<TankChartProps> = ({ data }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="font-bold text-lg mb-2">Grafik Suhu & Level</h2>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis yAxisId="left" orientation="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="suhu" stroke="#f43f5e" />
      <Line yAxisId="right" type="monotone" dataKey="level" stroke="#22c55e" />
    </LineChart>
  </div>
);

export default TankChart;
