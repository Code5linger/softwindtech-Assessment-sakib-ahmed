const ScrollUpComponent = () => {
  const ScrollUpIcon = () => (
    <div className="flex flex-col items-center animate-bounce">
      <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-gray-800 rounded-full mt-2 animate-pulse"></div>
      </div>
      <div className="mt-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-pulse text-gray-800"
        >
          <path
            d="M17 14L12 9L7 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="grid place-content-center h-[50vh] gap-4">
      <div className="flex justify-center">
        <ScrollUpIcon />
      </div>
      <h1 className="text-4xl text-center">Please Scroll Up</h1>
    </div>
  );
};

export default ScrollUpComponent;
