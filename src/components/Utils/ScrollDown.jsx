export default function ScrollDownComponent({ setIsActive }) {
  const ScrollDownIcon = () => (
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
          className="animate-pulse"
        >
          <path
            d="M7 10L12 15L17 10"
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
    <div className="grid place-content-center h-[50vh] gap-12">
      <h1
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="text-4xl text-center text-black z-50"
      >
        Please Scroll Down
      </h1>
      <div className="flex justify-center">
        <ScrollDownIcon />
      </div>
    </div>
  );
}
