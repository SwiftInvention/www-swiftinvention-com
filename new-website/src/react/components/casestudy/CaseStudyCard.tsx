import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  crop?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  description,
  title,
  link,
  crop,
}) => {
  return (
    <li className="group bg-transparent relative max-w-5xl w-full h-62 md:h-52 xl:h-62">
      <Link to={link}>
        <div className="absolute inset-0 opacity-20 sm:opacity-65 md:opacity-20 lg:opacity-65 group-hover:opacity-100">
          <img
            className={twMerge('h-full object-cover', crop)}
            src={image}
            alt="case study back"
          />
        </div>
        <div className="relative h-full flex flex-col mt-4 sm:mt-10 justify-center text-primaryCol2 font-sans px-16 group-hover:hidden sm:group-hover:flex sm:group-hover:text-primaryCol1 md:group-hover:hidden  lg:group-hover:flex lg:group-hover:text-primaryCol1">
          <div className="text-xl font-medium mb-3 xl:mt-6">{title}</div>
          <div className="text-sm pt-3 font-normal border-t lg:w-max max-w-sm2 whitespace-pre-line">
            {description}
          </div>
        </div>
      </Link>
    </li>
  );
};
