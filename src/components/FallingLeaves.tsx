
import React from 'react';

const FallingLeaves = ({ count = 6 }: { count?: number }) => {
  const particles = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle}
          className="absolute animate-grain-fall opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        >
          <div className="w-2 h-3 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full transform rotate-12 shadow-sm animate-gentle-sway"></div>
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
