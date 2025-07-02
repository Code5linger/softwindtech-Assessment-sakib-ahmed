// Cards
import RocketCard from './Cards/RocketCard';
import GlobalCard from './Cards/GlobalCard';
import UpskillingCard from './Cards/UpskillingCard';
import CollaborationCard from './Cards/CollaborationCard';

// GSAP
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(window.SplitText);

const CulturalHighlights = () => {
  const textRef = useRef();
  const paragraphRef = useRef();
  const cardsRef = useRef([]);
  cardsRef.current = []; // Reset array on each render

  useEffect(() => {
    // Animate h1 by chars
    const split = new window.SplitText(textRef.current, {
      type: 'words,chars',
    });

    gsap.from(split.chars, {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: 'power2.out',
    });

    // Animate paragraph by lines
    const paragraphSplit = new window.SplitText(paragraphRef.current, {
      type: 'lines',
      linesClass: 'split-line',
    });

    gsap.from(paragraphSplit.lines, {
      duration: 0.8,
      opacity: 0,
      y: 40,
      stagger: 0.1,
      delay: 1.5,
      ease: 'power2.out',
    });

    return () => {
      split.revert(); // Clean up when unmounted
      paragraphSplit.revert();
    };
  }, []);

  return (
    <section className='relative grid place-content-center bg-[url("assets/CulturalHighlightsBG.png")] bg-cover bg-center h-204.5 '>
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom_right,_rgb(255,_255,_255)_50%,_rgba(0,0,0,0)_50%)] z-0 blur-[1px] antialiased
"
      />
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url('/assets/CulturalHighlightsBG.png')] bg-cover bg-center z-[-1]" />
      {/* Content (centered) */}
      {/* Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-14 py-7.5 bg-white/87">
        <h1
          ref={textRef}
          className="font-semibold text-[30px] tracking-[0.05em] font-poppins antialiased"
        >
          Cultural Highlights
        </h1>
        <p
          ref={paragraphRef}
          className="font-poppins font-normal text-[14px] leading-[24px] text-gray-700 max-w-[872px] mt-[43px] antialiased "
        >
          At Smart Lab Global, our values shape everything we do. We lead with
          integrity, innovate with purpose, and collaborate with empathy. These
          principles guide our culture, drive our work, and empower us to
          deliver lasting impact for our clients and communities.
        </p>
        {/* Mini Cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full mt-[56px]">
          {/* Card */}
          <CollaborationCard />
          <RocketCard />
          <GlobalCard />
          <UpskillingCard />
        </div>
      </div>
      {/* Card End */}
    </section>
  );
};

export default CulturalHighlights;
