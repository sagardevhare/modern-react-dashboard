import React from 'react';

interface SalesCardProps {
  amount: string;
  label: string;
  percentage?: string;
}

const SalesCard = ({ amount, label, percentage }: SalesCardProps) => (
  <div className="bg-white rounded-xl p-4 shadow-sm">
    <div className="text-2xl font-semibold text-gray-800">{amount}</div>
    <div className="text-sm text-gray-500 mt-1">
      {label} {percentage && <span className="text-gray-400">({percentage})</span>}
    </div>
  </div>
);

export default function SalesDistribution() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Sales Distribution</h2>
        <p className="text-sm text-gray-500">This is all over Platform Sales Generated</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <SalesCard amount="$34,343.00" label="Total Sales" />
        <SalesCard amount="$4.5k" label="By Website" percentage="40%" />
        <SalesCard amount="$2.8k" label="By Mobile" percentage="25%" />
        <SalesCard amount="$2.2k" label="By Market" percentage="20%" />
        <SalesCard amount="$1.7k" label="By Agent" percentage="15%" />
      </div>
    </div>
  );
}