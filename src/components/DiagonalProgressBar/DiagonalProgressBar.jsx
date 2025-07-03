import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DiagonalProgressBar = ({
  color = '#e31635',
  width = 8,
  className = '',
}) => {
  const svgRef = useRef();
  const lineRef = useRef();

  useEffect(() => {
    const line = lineRef.current;
    const svg = svgRef.current;

    if (!line || !svg) return;

    // Calculate diagonal length based on SVG dimensions
    const rect = svg.getBoundingClientRect();
    const diagonalLength = Math.sqrt(rect.width ** 2 + rect.height ** 2);

    // Set up the stroke dash
    gsap.set(line, {
      strokeDasharray: diagonalLength,
      strokeDashoffset: diagonalLength,
    });

    // Create scroll-based animation for the entire page
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const offset = diagonalLength * (1 - progress);
        gsap.set(line, { strokeDashoffset: offset });
      },
    });

    // Cleanup function
    return () => {
      scrollTrigger.kill();
    };
  }, [color, width]);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-[5] ${className}`}
      preserveAspectRatio="none"
    >
      <line
        ref={lineRef}
        x1="0"
        y1="100%"
        x2="100%"
        y2="0"
        stroke={color}
        strokeWidth={width}
        fill="none"
        strokeLinecap="round"
        style={{
          filter: `drop-shadow(0 0 8px ${color}66)`,
        }}
      />
    </svg>
  );
};

export default DiagonalProgressBar;
