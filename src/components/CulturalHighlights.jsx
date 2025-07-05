// Cards
import RocketCard from './Cards/RocketCard';
import GlobalCard from './Cards/GlobalCard';
import UpskillingCard from './Cards/UpskillingCard';
import CollaborationCard from './Cards/CollaborationCard';

// GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import DiagonalProgressBar from './DiagonalProgressBar/DiagonalProgressBar';
import GradientCursor from './Cursor/GradientCursor';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(window.SplitText);

const CulturalHighlights = () => {
  const [showCards, setShowCards] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  const textRef = useRef();
  const paragraphRef = useRef();
  const bgRef = useRef();
  const contentRef = useRef();

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

    // Parallax effect for background
    gsap.to(bgRef.current, {
      yPercent: -20, // Changed from xPercent to yPercent
      ease: 'none',
      scrollTrigger: {
        trigger: '.cultural-highlights-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Parallax effect for content (opposite direction)
    gsap.to(contentRef.current, {
      yPercent: 10, // Positive value for opposite movement
      ease: 'none',
      scrollTrigger: {
        trigger: '.cultural-highlights-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    const timer = setTimeout(() => {
      setShowCards(true);
    }, 2500);

    // Image lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (bgRef.current) {
      observer.observe(bgRef.current);
    }

    return () => {
      split.revert();
      paragraphSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative cultural-highlights-section flex items-center justify-center h-204.5 overflow-hidden border-y-1 border-white">
      {/* Animated Background Image Layer */}
      <div
        ref={bgRef}
        className={`absolute inset-0 bg-[url('assets/CulturalHighlightsBG.webp')] bg-cover bg-center z-[-2] h-[150%] -top-[20%] ${
          shouldLoad ? "bg-[url('assets/CulturalHighlightsBG.webp')]" : ''
        }`}
      />

      {/* Diagonal Red Line whth WHite Overlay */}
      <DiagonalProgressBar />

      {/* Content*/}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl px-3 py-3 md:px-6 lg:px-9 xl:px-12 2xl:px-15 md:py-4 lg:py-5 xl:py-7 2xl:py-8 rounded-[3px] mx-3 mb-17 md:mb-12 bg-white/87"
      >
        <h1
          ref={textRef}
          className="font-semibold text-[30px] tracking-[0.05em] font-poppins antialiased cursor-default"
        >
          Cultural Highlights
        </h1>
        <p
          ref={paragraphRef}
          className="font-poppins font-normal text-[14px] leading-[24px] text-gray-700 max-w-[872px] antialiased mt-3 md:mt-5 lg:mt-7 xl:mt-9 2xl:mt-11 cursor-default"
        >
          At Smart Lab Global, our values shape everything we do. We lead with
          integrity, innovate with purpose, and collaborate with empathy. These
          principles guide our culture, drive our work, and empower us to
          deliver lasting impact for our clients and communities.
        </p>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-5 lg:gap-x-10 xl:gap-x-15 2xl:gap-x-20 gap-y-2 md:gap-y-4 lg:gap-y-6 xl:gap-y-8 2xl:gap-y-10 w-full mt-3 md:mt-5 lg:mt-8 xl:mt-11 2xl:mt-14 transition-all duration-500 items-start grid-rows-auto ${
            showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <CollaborationCard />

          <RocketCard />
          <GlobalCard />
          <UpskillingCard />
        </div>
      </div>
    </section>
  );
};

export default CulturalHighlights;
