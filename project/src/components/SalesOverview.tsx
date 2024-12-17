import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { CardHeader } from './ui/CardHeader';

const data = [
  { name: 'Profit', value: 23450, id: 'profit' },
  { name: 'Expense', value: 23450, id: 'expense' },
];

const COLORS = ['#4F46E5', '#06B6D4'];

export default function SalesOverview() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <CardHeader title="Sales Overview" />

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell key={entry.id} fill={COLORS[data.indexOf(entry) % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${index === 0 ? 'bg-indigo-600' : 'bg-cyan-500'}`}></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
            <span className="text-sm font-medium">${item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}