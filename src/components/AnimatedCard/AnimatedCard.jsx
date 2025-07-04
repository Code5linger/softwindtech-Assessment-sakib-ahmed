import { useState } from 'react';

const AnimatedCard = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const exitX = ((e.clientX - rect.left) / rect.width) * 100;
    const exitY = ((e.clientY - rect.top) / rect.height) * 100;

    let newX = exitX;
    let newY = exitY;

    const distances = {
      left: exitX,
      right: 100 - exitX,
      top: exitY,
      bottom: 100 - exitY,
    };

    const closestEdge = Object.keys(distances).reduce((a, b) =>
      distances[a] < distances[b] ? a : b
    );

    switch (closestEdge) {
      case 'left':
        newX = -30;
        break;
      case 'right':
        newX = 130;
        break;
      case 'top':
        newY = -30;
        break;
      case 'bottom':
        newY = 130;
        break;
    }

    setMousePosition({ x: newX, y: newY });
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <div className="relative z-10">
      <div
        className={`relative flex flex-shrink-0 items-center justify-center px-6 py-6 rounded-2xl transition-all duration-300 cursor-pointer bg-[#4D4D4F17] overflow-hidden ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute rounded-full bg-gray-700 transition-transform duration-750 ease-in-out pointer-events-none"
          style={{
            width: '600px',
            height: '600px',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: isHovered
              ? 'translate(-50%, -50%) scale(1)'
              : 'translate(-50%, -50%) scale(0)',
            transformOrigin: 'center center',
            backgroundColor: '#414042',
          }}
        />

        {typeof children === 'function' ? children(isHovered) : children}
      </div>
    </div>
  );
};

export default AnimatedCard;
