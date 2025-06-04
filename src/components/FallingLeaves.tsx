
import React from 'react';

const FallingLeaves = ({ count = 10 }: { count?: number }) => {
  const leaves = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf}
          className="absolute animate-leaf-fall opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <div className="w-3 h-3 bg-farm-green-400 rounded-full transform rotate-45 shadow-sm"></div>
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
