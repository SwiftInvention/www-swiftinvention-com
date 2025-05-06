import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ArrowLeft, ArrowRight } from './Arrows';

export enum Direction {
  previous,
  next,
}

export interface CaseArrowProps {
  link: string;
  direction: Direction;
}

export const CaseArrow: React.FC<CaseArrowProps> = ({ link, direction }) => {
  const isNext = direction === Direction.next;
  return (
    <div className="text-primaryCol3 hover:text-primaryCol1 hover:bg-primaryCol3 px-2 py-2">
      <Link className="flex flex-row" to={link}>
        <div
          className={twMerge(
            'h-full object-cover',
            isNext && 'order-last pl-3',
            !isNext && 'pr-3'
          )}
        >
          {isNext ? <ArrowRight /> : <ArrowLeft />}
        </div>
        <div className="hidden md:block font-sans font-medium text-sm">
          {isNext ? 'Next Case Study' : 'Previous Case Study'}
        </div>
      </Link>
    </div>
  );
};
