import React from 'react';
import { CardHeader } from './ui/CardHeader';
import { WorldMap } from './map/WorldMap';

const markers = [
  { coordinates: [-74.006, 40.7128] as [number, number], city: "New York" },
  { coordinates: [2.3522, 48.8566] as [number, number], city: "Paris" },
  { coordinates: [77.2090, 28.6139] as [number, number], city: "New Delhi" },
  { coordinates: [121.4737, 31.2304] as [number, number], city: "Shanghai" },
  { coordinates: [37.6173, 55.7558] as [number, number], city: "Moscow" }
];

export default function ActiveUsers() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <CardHeader title="Active User" />
          <div className="text-sm text-indigo-600 font-medium">
            8.12% <span className="text-gray-500">Vs. previous month</span>
          </div>
        </div>
        <div className="text-2xl font-semibold">23,214</div>
      </div>

      <WorldMap markers={markers} />
    </div>
  );
}