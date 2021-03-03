import React from 'react';
import clsx from 'clsx';

export interface ArrowedTextProps {
  text: string;
  mainColor?: string;
  highlightColor?: string;
}

export const ArrowedText: React.FC<ArrowedTextProps> = ({
  text,
  mainColor,
  highlightColor,
}) => {
  return (
    <div
      className={clsx(
        mainColor && mainColor,
        highlightColor && `hover:${highlightColor}`,
        'font-sans',
        'font-medium',
        'text-lg',
        'flex',
        'items-center'
      )}
    >
      {text}
      <svg
        className="inline hover:hidden -mt-1 ml-2"
        width="13px"
        height="17px"
        viewBox="0 0 13 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Arrow-Right</title>
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Button/Black-Right"
            transform="translate(-194.000000, -2.000000)"
            stroke="currentColor"
            strokeWidth="2"
          >
            <g id="Path-8" transform="translate(195.000000, 3.000000)">
              <polyline
                transform="translate(5.000000, 7.500000) rotate(-270.000000) translate(-5.000000, -7.500000) "
                points="-2 12 5 3 12 12"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
