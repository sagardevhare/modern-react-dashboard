import React from 'react';
import { Marker } from 'react-simple-maps';

interface MapMarkerProps {
  coordinates: [number, number];
  city: string;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ coordinates, city }) => (
  <Marker key={city} coordinates={coordinates}>
    <circle 
      r={4} 
      fill="#4F46E5"
      style={{
        filter: 'drop-shadow(0 0 2px rgba(79, 70, 229, 0.3))',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        const target = e.target as SVGCircleElement;
        target.style.r = '6';
      }}
      onMouseLeave={(e) => {
        const target = e.target as SVGCircleElement;
        target.style.r = '4';
      }}
    />
  </Marker>
);