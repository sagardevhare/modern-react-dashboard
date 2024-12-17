import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { MapMarker } from './MapMarker';

interface WorldMapProps {
  markers: Array<{
    coordinates: [number, number];
    city: string;
  }>;
}

// Using a simplified world map TopoJSON for better performance
const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

export const WorldMap: React.FC<WorldMapProps> = ({ markers }) => (
  <div className="relative w-full h-[400px] overflow-hidden">
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 140,
        center: [0, 20]
      }}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EBF4FF"
              stroke="#CBD5E1"
              strokeWidth={0.5}
              style={{
                default: { outline: 'none' },
                hover: { 
                  fill: '#DBEAFE', 
                  outline: 'none',
                  transition: 'all 0.3s ease'
                },
                pressed: { outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map((marker) => (
        <MapMarker 
          key={marker.city}
          coordinates={marker.coordinates}
          city={marker.city}
        />
      ))}
    </ComposableMap>
  </div>
);