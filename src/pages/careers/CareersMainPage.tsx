import React from 'react';
import { CareersCard } from '~/components/careerscard/CareersCard';
import frontendImage from '~/assets/images/frontend-white.png';
import devopsImage from '~/assets/images/devops-white.png';
import backendImage from '~/assets/images/backend-white.png';
import saImage from '~/assets/images/sa-white.png';
import qaImage from '~/assets/images/qa-white.png';
import { TechStack } from '~/components/careers/TechStack';

const vacancyList: {
  text: string;
  image: string;
  id: string;
  disabled?: boolean;
}[] = [
  {
    text: 'Software Architect',
    image: saImage,
    id: 'architect',
    // disabled: true,
  },
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
    text: 'SRE Engineer (DevOps)',
    image: devopsImage,
    id: 'devops',
    disabled: true,
  },
  {
    text: 'Data Scientist',
    image: frontendImage,
    id: 'datascientist',
    disabled: false,
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
      <div className="font-sans font-medium text-primaryCol2 text-base">
        WE ARE LOOKING FOR
      </div>
      <ul className="mt-7 pb-8 flex flex-col justify-start sm:flex-row sm:flex-wrap gap-7">
        {vacancyList.map((vacancy) => {
          return !vacancy.disabled ? (
            <CareersCard
              key={vacancy.id}
              text={vacancy.text}
              image={vacancy.image}
              link={`/careers/${vacancy.id}`}
            />
          ) : null;
        })}
      </ul>
      <TechStack />
    </>
  );
};
