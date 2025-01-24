import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowedText } from '~/react/components/arrowedtext/ArrowedText';

export interface StripeProps {
  text: string;
  label: string;
  link: string;
}

export const Stripe: React.FC<StripeProps> = ({ text, label, link }) => {
  return (
    <div className="bg-primaryCol3 w-full h-36 flex flex-wrap items-center justify-center">
      <div className="font-sans font-medium just-primaryCol1 text-lg px-2">
        {text}
      </div>
      <button
        type="button"
        className="-mt-1 sm:ml-10 px-6 h-11 inline-flex items-center justify-center border-primaryCol1 hover:border-primaryCol3 border-2 bg-primaryCol3 hover:bg-primaryCol1 text-primaryCol1 hover:text-primaryCol3 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primaryCol1"
      >
        <Link className="" to={link}>
          <ArrowedText text={label} horizontalPadding="px-0" />
        </Link>
      </button>
    </div>
  );
};
