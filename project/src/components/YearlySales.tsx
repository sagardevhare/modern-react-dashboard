import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { CardHeader } from './ui/CardHeader';

const data = [
  { name: 'Jan', value2022: 4000, value2023: 4400, id: 'jan' },
  { name: 'Feb', value2022: 4500, value2023: 5100, id: 'feb' },
  { name: 'Mar', value2022: 4200, value2023: 4800, id: 'mar' },
  { name: 'Apr', value2022: 4800, value2023: 5400, id: 'apr' },
  { name: 'May', value2022: 4300, value2023: 5000, id: 'may' },
  { name: 'Jun', value2022: 4600, value2023: 5200, id: 'jun' },
];

const yearlyData = [
  { year: '2023', value: 5476, color: '#4F46E5' },
  { year: '2022', value: 4476, color: '#06B6D4' },
];

export default function YearlySales() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <CardHeader title="Yearly Sales" />

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.1} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              dx={-10}
            />
            <Tooltip />
            {yearlyData.map((year) => (
              <Line
                key={year.year}
                type="monotone"
                dataKey={`value${year.year}`}
                stroke={year.color}
                strokeWidth={2}
                dot={false}
                name={year.year}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-center space-x-8">
        {yearlyData.map((year) => (
          <div key={year.year} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: year.color }}
            />
            <span className="text-sm text-gray-600">
              {year.year} (${year.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}