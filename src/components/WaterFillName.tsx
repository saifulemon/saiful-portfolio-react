import React from 'react';

interface WaterFillNameProps {
  name: string;
  className?: string;
}

export function WaterFillName({ name, className = '' }: WaterFillNameProps) {
  return (
    <span className={`relative inline-block text-[36px] sm:text-[40px] lg:text-[60px] ${className}`}>
      {/* Outline layer */}
      <span
        className="block text-transparent"
        style={{
          WebkitTextStroke: '2px hsl(var(--primary))',
        }}
        aria-hidden="true"
      >
        {name}
      </span>
      {/* Fill layer with water animation */}
      <span
        className="absolute inset-0 text-primary animate-water-fill"
        aria-hidden="true"
      >
        {name}
      </span>
      {/* Screen reader text */}
      <span className="sr-only">{name}</span>
    </span>
  );
}
