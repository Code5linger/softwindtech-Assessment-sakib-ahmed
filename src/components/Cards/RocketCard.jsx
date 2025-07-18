import AnimatedCard from '../AnimatedCard/AnimatedCard';

const RocketCard = () => {
  return (
    <AnimatedCard>
      {(isHovered) => (
        <div className="flex items-center w-full">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38 38"
              className={`h-10 w-10 fill-current transition-all duration-300 relative z-10 ${
                isHovered
                  ? 'text-orange-500 scale-110 rotate-3 drop-shadow-lg'
                  : 'text-gray-700'
              }`}
              style={{
                color: isHovered ? '#FF4306' : '#414042',
              }}
            >
              <path d="M32.867.25h1.96a2.917 2.917 0 012.917 2.915v1.962a17.917 17.917 0 01-4.875 12.29l-2.046 2.173a40.022 40.022 0 01-2.66 2.57v8.397a2.915 2.915 0 01-1.417 2.5l-7.523 4.515a1.25 1.25 0 01-1.867-.814l-1.605-7.62a2.157 2.157 0 01-.233-.215l-3.12-3.323-3.324-3.122a2.168 2.168 0 01-.215-.233L1.241 20.64a1.25 1.25 0 01-.817-1.867l4.517-7.523a2.915 2.915 0 012.5-1.417h8.395a40.02 40.02 0 012.57-2.656l2.173-2.05A17.916 17.916 0 0132.866.25h.002zM22.294 6.947l-2.173 2.048a37.175 37.175 0 00-5.425 6.418l-3.655 5.484 3.098 2.906.057.057 2.905 3.097 5.48-3.654a37.17 37.17 0 006.423-5.428l2.047-2.172a15.416 15.416 0 004.195-10.576v-1.96a.417.417 0 00-.417-.417h-1.962c-3.93 0-7.712 1.501-10.573 4.197zM9.831 34c-2.015 2.015-6.502 2.408-7.905 2.483a.4.4 0 01-.3-.111.401.401 0 01-.112-.3c.075-1.404.468-5.89 2.483-7.905 1.5-1.5 4.334-1.5 5.834 0s1.5 4.333 0 5.833zm-.987-14.313l3.77-5.659c.385-.576.783-1.141 1.195-1.695H7.441a.418.418 0 00-.357.202l-3.612 6.02 5.372 1.132zm16.82 4.5c-.555.413-1.12.812-1.697 1.196l-5.654 3.77 1.13 5.372 6.02-3.612a.416.416 0 00.201-.356v-6.37zm2.5-11.854a2.5 2.5 0 11-5.001-.001 2.5 2.5 0 015.001.001z" />
            </svg>
          </div>
          <div className="ml-4 flex-1">
            <p
              className={`transition-colors duration-300 relative z-10 text-sm md:text-base font-medium leading-tight ${
                isHovered ? 'text-gray-100' : 'text-gray-700'
              }`}
              style={{
                color: isHovered ? '#F4F4F4' : '#414042',
              }}
            >
              Hackathons & Demo Days
            </p>
          </div>
        </div>
      )}
    </AnimatedCard>
  );
};

export default RocketCard;
