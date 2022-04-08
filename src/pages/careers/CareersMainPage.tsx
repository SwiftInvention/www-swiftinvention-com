import React from 'react';
import { CareersCard } from '~/components/careerscard/CareersCard';
import frontendImage from '~/assets/images/frontend-white.png';
import devopsImage from '~/assets/images/devops-white.png';
import backendImage from '~/assets/images/backend-white.png';
import saImage from '~/assets/images/sa-white.png';
import qaImage from '~/assets/images/qa-white.png';

const vacancyList: {
  text: string;
  image: string;
  id: string;
  disabled?: boolean;
}[] = [
  {
    text: 'Software Engineer',
    image: backendImage,
    id: 'backend',
  },
  {
    text: 'Front End Engineer',
    image: frontendImage,
    id: 'frontend',
    disabled: true,
  },
  {
    text: 'Software Architect',
    image: saImage,
    id: 'architect',
    // disabled: true,
  },
  {
    text: 'SRE Engineer (DevOps)',
    image: devopsImage,
    id: 'devops',
    disabled: true,
  },
  {
    text: 'QA  Engineer',
    image: qaImage,
    id: 'tester',
    disabled: true,
  },
];

export const getVacancyNameById = (id: string): string | undefined => {
  return vacancyList.find((vacancy) => id === vacancy.id)?.text;
};

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
        {vacancyList.map((vacancy) => {
          return !vacancy.disabled ? (
            <CareersCard
              text={vacancy.text}
              image={vacancy.image}
              link={`/careers/${vacancy.id}`}
            />
          ) : null;
        })}
      </ul>
    </>
  );
};
