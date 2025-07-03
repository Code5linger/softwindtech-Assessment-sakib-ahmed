import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DiagonalProgressBar = ({
  color = '#e31635',
  width = 8,
  trigger = '.cultural-highlights-section',
  start = 'top 80%',
  end = 'bottom 20%',
  scrub = 1,
  className = '',
}) => {
  const svgRef = useRef();
  const lineRef = useRef();

  useEffect(() => {
    // Calculate the diagonal line length (viewport diagonal)
    const lineLength = Math.sqrt(
      window.innerWidth ** 2 + window.innerHeight ** 2
    );

    // Diagonal line progress animation using strokeDasharray
    gsap.fromTo(
      lineRef.current,
      {
        strokeDasharray: `0 ${lineLength}`,
      },
      {
        strokeDasharray: `${lineLength} 0`,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: scrub,
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === trigger) {
          trigger.kill();
        }
      });
    };
  }, [color, width, trigger, start, end, scrub]);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-[5] ${className}`}
    >
      <line
        ref={lineRef}
        x1="0"
        y1="100%"
        x2="100%"
        y2="0"
        stroke={color}
        strokeWidth={8}
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
