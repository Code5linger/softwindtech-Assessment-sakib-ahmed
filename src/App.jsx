import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import CulturalHighlights from './components/CulturalHighlights';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    // Create ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
      preventDefault: true,
    });

    // Cleanup function
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="grid place-content-center h-[50vh]">
          <h1 className="text-4xl">Scroll Down</h1>
        </div>
        <CulturalHighlights />
        <div className="grid place-content-center h-[50vh]">
          <h1 className="text-4xl">Scroll Up</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
