import React from 'react';
import { CareersCard } from '~/components/careerscard/CareersCard';
import frontendImage from '~/assets/images/frontend-white.png';
import backendImage from '~/assets/images/backend-white.png';

export const CareersMainPage: React.FC = () => {
  return (
    <>
      <div className="max-w-xl">
        <div className="text-secondaryCol1 font-sans font-medium text-4xl mb-5">
          Careers
        </div>
        <div className="text-secondaryCol1 font-sans font-normal text-lg">
          {/* */}
        </div>
      </div>
      <div className="font-sans font-medium text-primaryCol2 text-base pt-16 lg:pt-28">
        WE ARE LOOKING FOR
      </div>
      <ul className="mt-7 pb-25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-7 ">
        <CareersCard
          text="Software Engineer"
          image={backendImage}
          link="/careers/353522"
        />
        <CareersCard
          text="Front End Engineer"
          image={frontendImage}
          link="/careers/353523"
        />
      </ul>
    </>
  );
};
