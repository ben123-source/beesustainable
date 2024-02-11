import React from 'react';

const Map = ({ onSelectCountry }) => {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full">
      {/* Simplified shapes for countries, these should be replaced with actual country shapes */}
      {/* Canada */}
      <rect x="100" y="50" width="150" height="80" fill="lightblue" onClick={() => onSelectCountry('Canada')} />
      <text x="175" y="90" fontSize="12" textAnchor="middle" fill="black">Canada</text>
      
      {/* USA */}
      <rect x="100" y="150" width="150" height="80" fill="lightgreen" onClick={() => onSelectCountry('USA')} />
      <text x="175" y="190" fontSize="12" textAnchor="middle" fill="black">USA</text>
      
      {/* UK */}
      <rect x="300" y="50" width="80" height="50" fill="salmon" onClick={() => onSelectCountry('UK')} />
      <text x="340" y="75" fontSize="12" textAnchor="middle" fill="black">UK</text>
      
      {/* Australia */}
      <rect x="300" y="150" width="150" height="80" fill="gold" onClick={() => onSelectCountry('Australia')} />
      <text x="375" y="190" fontSize="12" textAnchor="middle" fill="black">Australia</text>
    </svg>
  );
};

export default Map;
