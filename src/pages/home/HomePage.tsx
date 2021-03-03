import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { DefaultPage } from '../default/DefaultPage';
import homeHeaderBg from '~/assets/images/home-header-bg.png';
import homeServicesBg from '~/assets/images/home-services-bg.png';
import homeGrid from '~/assets/images/home-grid.svg';
import computerCode from '~/assets/images/computer-code.svg';
import { ArrowedText } from '~/components/arrowedtext/ArrowedText';
import { routes, getByName } from '~/routes/routes';

import styles from './HomePage.module.css';

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <DefaultPage>
      <div className={clsx('relative', styles.headerBgOverlay)}>
        <div className="absolute inset-0 mx-auto max-w-8xl">
          <img
            className="h-full object-cover object-left"
            src={homeHeaderBg}
            alt="home page header background"
          />
          <div className="absolute inset-0 z-50">
            <div className="h-full flex items-center justify-start lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="px-8 pl-10 sm:pl-16 md:pl-30 max-w-xl">
                <div className="text-primaryCol2 font-sans font-medium text-5xl mb-5">
                  Prevail Faster
                </div>
                <div className="text-primaryCol2 font-sans font-normal text-lg">
                  Swift is the choice for startups who want to succeed fast.
                  Swift pivots with startups into stronger solutions that opens
                  pathways to success.
                </div>
                <div className="mt-6">
                  <Link to={getByName(routes, 'Case Studies').link}>
                    <ArrowedText
                      text="See Who&#39;s Succeeded"
                      mainColor="text-primaryColor1"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block lg:pl-2">
                <img src={computerCode} alt="Computer Code" />
              </div>
            </div>
            {/* <div className="w-full h-full items-center flex flex-row flex-wrap justify-start">
              <div className="pl-30 max-w-xl">
                <div className="text-primaryCol2 font-sans font-medium text-5xl mb-5">
                  Prevail Faster
                </div>
                <div className="text-primaryCol2 font-sans font-normal text-lg">
                  Swift is the choice for startups who want to succeed fast.
                  Swift pivots with startups into stronger solutions that opens
                  pathways to success.
                </div>
                <div className="mt-6 text-primaryCol1 font-sans font-medium text-lg">
                  See Who&#39;s Succeeded{' '}
                  <img
                    className="inline hover:hidden"
                    src={arrowRightBlack}
                    alt="right arrow"
                  />
                </div>
              </div>
              <div className="hidden md:pl-30 lg:pl-48 md:block">
                <img src={computerCode} alt="Computer Code" />
              </div>
            </div> */}
          </div>
          <div className="relative">
            <div
              className={clsx(
                'absolute',
                'inset-x-0',
                styles.homeGridContainer
              )}
            >
              <div className="mx-auto max-w-max-w-8xl">
                <img
                  className="h-full object-cover"
                  src={homeGrid}
                  alt="home grid background"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondaryCol4 max-w-8xl h-25 px-8 pl-10 sm:pl-16 md:pl-100 flex items-center">
        <div className="font-sans text-secondaryCol1 text-sm font-normal">
          Swift is a technology company that works with clients across a variety
          of industries.
        </div>
      </div>
      <div className={clsx('relative', styles.serviceBgOverlay)}>
        <div className="absolute inset-0">
          <div className="mx-auto max-w-8xl">
            <img
              className="h-full object-cover object-left"
              src={homeServicesBg}
              alt="home services background"
            />
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="md:relative w-full h-full items-center flex flex-row flex-wrap justify-start content-start">
            <div className="md:absolute md:left-0">
              <div className="pt-8 md:pt-0 px-4 pl-10 sm:pl-16 md:pl-30 font-sans font-medium text-secondaryCol1 text-2.5xl">
                Services
              </div>
            </div>
            <div className="md:absolute md:left-0 max-w-5xl ">
              <div className="pt-4 px-8 pl-10 sm:pl-16 md:pl-100 font-sans text-secondaryCol1 text-lg">
                Our dev shop pivots to ensure your startup arrives at the best
                solution as quick as possible. We offer a number of software
                application services to find the right pathway for you.
                <div className="mt-6">
                  <Link to={getByName(routes, 'Services').link}>
                    <ArrowedText
                      text="See Services"
                      mainColor="text-primaryCol3"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
