const CollaborationCard = () => {
  return (
    <div className="group flex items-center justify-center px-12 py-6 bg-[#4D4D4F17] rounded-2xl hover:bg-[#4D4D4F] transition-colors duration-300">
      {/* SVG goes here */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        className="h-10 w-10 fill-current text-[#414042] group-hover:text-[#FF4306] transition-colors duration-300"
      >
        <path d="M5.5 24.25V23H3v1.25A8.75 8.75 0 0011.75 33h3.75v-2.5h-3.75a6.25 6.25 0 01-6.25-6.25zM28 11.75V13h2.5v-1.25A8.75 8.75 0 0021.75 3H18v2.5h3.75A6.25 6.25 0 0128 11.75zm-16.25 0h-7.5A3.75 3.75 0 00.5 15.5V18H3v-2.5a1.25 1.25 0 011.25-1.25h7.5A1.25 1.25 0 0113 15.5V18h2.5v-2.5a3.75 3.75 0 00-3.75-3.75zM8 10.5a5 5 0 100-10 5 5 0 000 10zM8 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm23.75 26.25h-7.5A3.75 3.75 0 0020.5 33v2.5H23V33a1.25 1.25 0 011.25-1.25h7.5A1.25 1.25 0 0133 33v2.5h2.5V33a3.75 3.75 0 00-3.75-3.75zM23 23a5 5 0 1010 0 5 5 0 00-10 0zm7.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>

      <p className="text-[#414042] ml-4">Collaborative Sprints</p>
    </div>
  );
};

export default CollaborationCard;
