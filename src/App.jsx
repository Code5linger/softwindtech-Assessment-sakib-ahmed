import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import CulturalHighlights from './components/CulturalHighlights';
import ScrollDownComponent from './components/ScrollDown';
import ScrollUpComponent from './components/ScrollUp';

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
        <ScrollDownComponent />
        <CulturalHighlights />
        <ScrollUpComponent />
      </div>
    </div>
  );
}

export default App;
