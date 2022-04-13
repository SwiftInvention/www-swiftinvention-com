import React from 'react';

export interface StackCardProps {
  text: string;
  image: string;
  link: string;
}

export const StackCard: React.FC<StackCardProps> = ({ text, image, link }) => {
  return (
    <a href={link}>
      <li className="flex flex-row items-center justify-start gap-4 w-full sm:w-64 h-24 px-8 rounded-xl bg-secondaryCol4 shadow-card hover:shadow-cardHovered">
        <img className="h-14 w-14 object-contain" src={image} alt="service" />
        <div className="text-left text-primaryCol2 font-sans font-normal text-lg">
          {text}
        </div>
      </li>
    </a>
  );
};
