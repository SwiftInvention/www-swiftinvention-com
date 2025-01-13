import React from 'react';

export interface ServiceCardProps {
  text: string;
  image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ text, image }) => {
  return (
    <li className="flex flex-col items-center justify-center w-full sm:w-64 h-40 rounded-xl bg-secondaryCol4 shadow-card">
      <img className="mb-5 h-14 pt-2" src={image} alt="service" />
      <div className="px-6 text-center text-primaryCol2 font-sans font-normal text-base">
        {text}
      </div>
    </li>
  );
};
