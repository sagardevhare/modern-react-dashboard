import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { CardHeader } from './ui/CardHeader';

const data = [
  { name: 'Jan', value: 30, id: 'jan' },
  { name: 'Feb', value: 45, id: 'feb' },
  { name: 'Mar', value: 35, id: 'mar' },
  { name: 'Apr', value: 60, id: 'apr' },
  { name: 'May', value: 40, id: 'may' },
  { name: 'Jun', value: 45, id: 'jun' },
  { name: 'Jul', value: 35, id: 'jul' },
];

export default function RevenueUpdates() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <CardHeader title="Revenue Updates" />

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0}>
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
            <Bar 
              dataKey="value" 
              fill="#4F46E5" 
              radius={[4, 4, 0, 0]}
              name="Revenue"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}