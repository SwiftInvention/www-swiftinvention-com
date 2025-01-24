import React, { useCallback, useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { useLocation } from 'react-router-dom';
import { CareersCard } from '~/react/components/careerscard/CareersCard';
import mobileImage from '~/assets/images/mobile.png';
import frontendImage from '~/assets/images/frontend-white.png';
import devopsImage from '~/assets/images/devops-white.png';
import backendImage from '~/assets/images/backend-white.png';
import saImage from '~/assets/images/sa-white.png';
import qaImage from '~/assets/images/qa-white.png';
import { TechStack } from '~/react/components/careers/TechStack';
import { getByName, routes } from '~/react/routes/routes';

const vacancyList: {
  text: string;
  image: string;
  id: string;
  disabled?: boolean;
}[] = [
  {
    text: 'Software Architect',
    image: saImage.src,
    id: 'architect',
    disabled: true,
  },
  {
    text: 'SRE Engineer (DevOps)',
    image: devopsImage.src,
    id: 'devops',
    disabled: false,
  },
  {
    text: 'Fullstack (NodeJS/React) Engineer',
    image: backendImage.src,
    id: 'fullstack-node',
    disabled: false,
  },
  {
    text: 'Front End Engineer',
    image: frontendImage.src,
    id: 'frontend',
    disabled: false,
  },
  {
    text: 'Senior Software Engineer (Scala)',
    image: backendImage.src,
    id: 'backend',
    disabled: false,
  },
  {
    text: 'Software Engineer (Rust)',
    image: backendImage.src,
    id: 'rust',
    disabled: false,
  },
  {
    text: 'Mobile Developer (iOS/Android)',
    image: mobileImage.src,
    id: 'mobile',
    disabled: true,
  },
  {
    text: 'Data Engineer',
    image: qaImage.src,
    id: 'dataengineer',
    disabled: true,
  },
  {
    text: 'QA  Engineer',
    image: qaImage.src,
    id: 'tester',
    disabled: true,
  },
  {
    text: 'Fullstack (PHP) Engineer',
    image: backendImage.src,
    id: 'fullstack-php',
    disabled: true,
  },
];

const useScrollRef = (): [
  RefObject<HTMLDivElement>,
  (node: HTMLDivElement) => void,
] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const setRef = useCallback((node: HTMLDivElement) => {
    ref.current = node;
  }, []);

  return [ref, setRef];
};

export const getVacancyNameById = (id: string): string | undefined => {
  return vacancyList.find((vacancy) => id === vacancy.id)?.text;
};

export const CareersMainPage: React.FC = () => {
  const { pathname } = useLocation();
  const [techStackRef, setTechStackRef] = useScrollRef();

  useEffect(() => {
    if (pathname === getByName(routes, 'TechStack').link) {
      techStackRef.current?.scrollIntoView();
    }
  }, [pathname, techStackRef]);
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
      <ul className="mt-7 pb-25 flex flex-col justify-start sm:flex-row sm:flex-wrap gap-7">
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
      <div ref={setTechStackRef} />
      <TechStack />
    </>
  );
};
