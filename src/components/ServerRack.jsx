export const ServerRack = ({ level, color }) => {
    return (
      <svg
        className="w-full h-8"
        viewBox="0 0 100 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="2"
          width="90"
          height="16"
          rx="2"
          fill="currentColor"
          className={`${color} opacity-20`}
        />
        <rect
          x="10"
          y="6"
          width="10"
          height="3"
          rx="1"
          fill="currentColor"
          className={color}
        />
        <rect
          x="25"
          y="6"
          width="10"
          height="3"
          rx="1"
          fill="currentColor"
          className={color}
        />
        <rect
          x="80"
          y="6"
          width="10"
          height="8"
          rx="1"
          fill="currentColor"
          className={color}
        />
      </svg>
    );
  };
  