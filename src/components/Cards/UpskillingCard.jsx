import AnimatedCard from '../AnimatedCard/AnimatedCard';

const UpskillingCard = () => {
  return (
    <AnimatedCard>
      {(isHovered) => (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 41 36"
            className={`min-h-10 flex-shrink-0 w-10 fill-current transition-all duration-300 ml-8 sm:ml-7 lg:ml-0 relative z-10 ${
              isHovered
                ? 'text-orange-500 scale-110 rotate-3 drop-shadow-lg'
                : 'text-gray-700'
            }`}
            style={{
              color: isHovered ? '#FF4306' : '#414042',
            }}
          >
            <path d="M4 2.375V31.75h34.375a1.875 1.875 0 110 3.75H2.125A1.875 1.875 0 01.25 33.625V2.375a1.875 1.875 0 013.75 0zM39.7 8.7L26.575 21.825a1.875 1.875 0 01-2.65 0L17.75 15.65l-6.8 6.8A1.875 1.875 0 018.3 19.8l8.125-8.125a1.875 1.875 0 012.65 0l6.175 6.175 11.8-11.8A1.875 1.875 0 0139.7 8.7z" />
          </svg>

          <p
            className={`ml-4 transition-colors duration-300 relative z-10 ${
              isHovered ? 'text-gray-100' : 'text-gray-700'
            }`}
            style={{
              color: isHovered ? '#F4F4F4' : '#414042',
            }}
          >
            Upskilling & Learning
          </p>
        </>
      )}
    </AnimatedCard>
  );
};

export default UpskillingCard;
