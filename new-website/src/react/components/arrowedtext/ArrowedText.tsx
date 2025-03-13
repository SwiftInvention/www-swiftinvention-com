import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ArrowedTextProps {
  text: string;
  mainColor?: string;
  bgColor?: string;
  highlightColor?: string;
  highlightBgColor?: string;
  horizontalPadding?: string;
}

export const ArrowedText: React.FC<ArrowedTextProps> = ({
  text,
  mainColor,
  bgColor,
  highlightColor,
  highlightBgColor,
  horizontalPadding,
}) => {
  return (
    <div
      className={twMerge(
        'font-sans font-medium text-lg flex items-center py-1',
        mainColor,
        bgColor,
        highlightColor && `hover:${highlightColor}`,
        highlightBgColor && `hover:${highlightBgColor}`,
        horizontalPadding ?? 'px-2 -ml-2'
      )}
    >
      {text}
      <svg
        className="inline -mt-1 ml-2"
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
