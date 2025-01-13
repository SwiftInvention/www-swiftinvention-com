import React from 'react';
import { Link } from 'react-router-dom';

export interface CareersCardProps {
  text: string;
  image: string;
  link: string;
}

export const CareersCard: React.FC<CareersCardProps> = ({
  text,
  image,
  link,
}) => {
  return (
    <Link to={link}>
      <li className="flex flex-col items-center justify-center w-full sm:w-64 h-40 rounded-xl bg-secondaryCol4 shadow-card hover:shadow-cardHovered">
        <img className="mb-5 h-14" src={image} alt="service" />
        <div className="px-6 text-center text-primaryCol2 font-sans font-normal text-base">
          {text}
        </div>
      </li>
    </Link>
  );
};
