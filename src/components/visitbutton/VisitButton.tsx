import React from 'react';

export interface VisitButtonProps {
  url: string;
}

export const VisitButton: React.FC<VisitButtonProps> = ({ url }) => {
  const handleClick = () => {
    // window.location.href = url;
    window.open(url, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="self-center inline-flex items-center justify-start border border-2 border-primaryCol3 bg-primaryCol1 text-primaryCol3 hover:text-primaryCol1 hover:bg-primaryCol3 h-8 w-30 m-2.5 -ml-8 lg:ml-0 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryCol3"
    >
      <div className="font-sans font-medium text-sm">Visit Site</div>
      <svg
        className="inline ml-3"
        width="15px"
        height="15px"
        viewBox="0 0 15 15"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Group 9</title>
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Button/Visit-Site"
            transform="translate(-88.000000, -8.000000)"
          >
            <g id="Group-9" transform="translate(88.000000, 8.000000)">
              <g
                id="Group"
                transform="translate(0.250000, 0.833333)"
                fill="currentColor"
                fillRule="nonzero"
              >
                <g>
                  <path
                    d="M4.75,0.416666667 L4.75,1.91666667 L1.5,1.91666667 L1.5,12.4166667 L12,12.4166667 L12,9.16666667 L13.5,9.16666667 L13.5,13.9166667 L0,13.9166667 L0,0.416666667 L4.75,0.416666667 Z"
                    id="Combined-Shape"
                  />
                  <polygon
                    id="Path-11"
                    points="12.6363366 0.219669914 13.6969968 1.28033009 7.69699675 7.28033009 6.63633658 6.21966991"
                  />
                  <polygon
                    id="Path-13"
                    points="13.9166667 1.81854531e-12 13.9166667 5.85197843 12.4166667 5.85197843 12.416 1.49966667 8.06468824 1.5 8.06468824 1.81854531e-12"
                  />
                </g>
              </g>
              <g id="Group-8" transform="translate(6.000000, 0.000000)" />
            </g>
            <rect
              id="Rectangle-Copy"
              stroke="currentColor"
              strokeWidth="1.5"
              x="0"
              y="0"
              width="122"
              height="32"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};
