"use client";

import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "21 JAN", value: 160 },
  { date: "22 JAN", value: 140 },
  { date: "23 JAN", value: 180 },
  { date: "24 JAN", value: 220 },
  { date: "25 JAN", value: 160 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-900 text-white p-2 rounded">
        <p className="label">{`24 Jan 2023`}</p>
        <p className="intro">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  render() {
    return (
      <div>
        <p className="text-xl font-semibold mb-5">Network</p>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#abbace" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#abbace" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="#e0e0e0"
            />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 320]} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              fillOpacity={1}
              fill="url(#colorValue)"
              dot={false}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
