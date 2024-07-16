import React from "react";
import { useFetchJessicaTaylor } from "@/hooks";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export const BloodPressureGraph: React.FC = () => {
  const { data } = useFetchJessicaTaylor();

  if (!data) return null;

  const chartData = data.diagnosis_history
    .filter((diagnosis) => {
      const date = new Date(
        `${diagnosis.month} 1, ${diagnosis.year}`,
      ).getTime();
      return (
        date >= new Date("October 1, 2023").getTime() &&
        date <= new Date("March 31, 2024").getTime()
      );
    })
    .sort(
      (a, b) =>
        new Date(`${a.month} 1, ${a.year}`).getTime() -
        new Date(`${b.month} 1, ${b.year}`).getTime(),
    )
    .map((diagnosis) => ({
      month: `${diagnosis.month} ${diagnosis.year}`,
      systolic: diagnosis.blood_pressure.systolic.value,
      diastolic: diagnosis.blood_pressure.diastolic.value,
    }));

  const formatMonth = (tick: string) => {
    const [month, year] = tick.split(" ");
    const shortMonth = month.substring(0, 3);
    return `${shortMonth}, ${year}`;
  };

  return (
    <div className="relative">
      <ResponsiveContainer
        width={500}
        height={240}
        className={"absolute -left-9"}
      >
        <LineChart data={chartData}>
          <CartesianGrid vertical={false} color="#CBC8D4" />
          <XAxis
            dataKey="month"
            tickFormatter={formatMonth}
            className="text-[12px] text-[#072635]"
          />
          <YAxis
            domain={[60, 180]}
            tickCount={7}
            className="text-[12px] text-[#072635]"
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="systolic"
            stroke="#C26EB4"
            strokeWidth={2}
            dot={{ strokeWidth: 1.5, r: 7, fill: "#E66FD2", stroke: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="diastolic"
            stroke="#7E6CAB"
            strokeWidth={2}
            dot={{ strokeWidth: 1.5, r: 7, fill: "#8C6FE6", stroke: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
