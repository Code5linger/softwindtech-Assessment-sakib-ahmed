import { useEffect, useRef } from 'react';
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

    const rect = svg.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x1 = 0;
    const y1 = height * 0.6;
    const x2 = width;
    const y2 = height * 0.1;
    const diagonalLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    gsap.set(line, {
      strokeDasharray: diagonalLength,
      strokeDashoffset: diagonalLength,
    });

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
    <>
      {/* White overlay with clip-path following the diagonal line */}
      <div
        className="absolute inset-0 bg-white z-0 blur-[1px] antialiased"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 10%, 0% 60%)',
        }}
      />

      {/* SVG Progress Bar */}
      <svg
        ref={svgRef}
        className={`absolute inset-0 w-full h-full pointer-events-none z-[5] ${className}`}
        preserveAspectRatio="none"
      >
        <line
          ref={lineRef}
          x1="0"
          y1="60%"
          x2="100%"
          y2="10%"
          stroke={color}
          strokeWidth={width}
          fill="none"
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 8px ${color}66)`,
          }}
        />
      </svg>
    </>
  );
};

export default DiagonalProgressBar;
