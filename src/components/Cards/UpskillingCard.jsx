const UpskillingCard = () => {
  return (
    <div className="group flex items-center justify-evenly px-12 py-6 bg-[#4D4D4F17] rounded-2xl hover:bg-[#4D4D4F] transition-colors duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 41 36"
        className="h-10 w-10 fill-current text-[#414042] group-hover:text-[#FF4306] transition-colors duration-300"
      >
        <path d="M4 2.375V31.75h34.375a1.875 1.875 0 110 3.75H2.125A1.875 1.875 0 01.25 33.625V2.375a1.875 1.875 0 013.75 0zM39.7 8.7L26.575 21.825a1.875 1.875 0 01-2.65 0L17.75 15.65l-6.8 6.8A1.875 1.875 0 018.3 19.8l8.125-8.125a1.875 1.875 0 012.65 0l6.175 6.175 11.8-11.8A1.875 1.875 0 0139.7 8.7z" />
      </svg>
      <p className="text-white">Upskilling Programs</p>
    </div>
  );
};

export default UpskillingCard;
