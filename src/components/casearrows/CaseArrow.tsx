import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import ArrowLeft from '../../assets/images/arrow-left.svg';
import ArrowRight from '../../assets/images/arrow-right.svg';

export enum Direction {
  previous,
  next,
}

export interface CaseArrowProps {
  link: string;
  direction: Direction;
}

export const CaseArrow: React.FC<CaseArrowProps> = ({ link, direction }) => {
  const isNext = direction === Direction.previous;
  return (
    <div className="text-primaryCol3">
      <Link className="flex flex-row" to={link}>
        <img
          className={clsx(
            'h-full',
            'object-cover',
            isNext || 'order-last pl-3',
            isNext && 'pr-3'
          )}
          src={isNext ? ArrowLeft : ArrowRight}
          alt="arrow"
        />
        <div className="hidden md:block font-sans font-medium text-sm">
          {isNext ? 'Previous Case Study' : 'Next Case Study'}
        </div>
      </Link>
    </div>
  );
};
