import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import CulturalHighlights from './components/CulturalHighlights';
import ScrollDownComponent from './components/Utils/ScrollDown';
import ScrollUpComponent from './components/Utils/ScrollUp';
import GradientCursor from './components/Cursor/GradientCursor';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <ScrollDownComponent setIsActive={setIsActive} />
        <CulturalHighlights />
        <ScrollUpComponent setIsActive={setIsActive} />
      </div>
      <GradientCursor isActive={isActive} />
    </div>
  );
}

export default App;
