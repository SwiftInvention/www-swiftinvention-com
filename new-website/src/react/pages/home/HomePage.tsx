import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultPage } from '../default/DefaultPage';
import homeHeaderBg from '~/assets/images/home-header-bg.png';
import homeServicesBg from '~/assets/images/home-services-bg.png';
import homeGrid from '~/assets/images/home-grid.svg';
import computerCode from '~/assets/images/computer-code.svg';
import { ArrowedText } from '~/components/arrowedtext/ArrowedText';
import { routes, getByName } from '~/routes/routes';

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <DefaultPage>
      <div className="relative min-h-[582px]">
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
                  Swift release for your MVP.
                </div>
                <div className="text-primaryCol2 font-sans font-normal text-lg">
                  We&#39;re an experienced team of software designers and
                  engineers that know how to take ideas from concept to reality.
                </div>
                <div className="mt-6 max-w-max">
                  <Link to={getByName(routes, 'Case Studies').link}>
                    <ArrowedText
                      text="See Who&#39;s Succeeded"
                      mainColor="text-primaryCol1"
                      highlightColor="text-primaryCol3"
                      highlightBgColor="bg-primaryCol1"
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
            <div className="absolute inset-x-0 -bottom-[216px]">
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
        <div className="font-sans text-secondaryCol1 text-sm font-normal" />
      </div>
      <div className="relative min-h-[421px]">
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
                We help disruptive startups and businesses create innovative
                products and services. From strategy and design to iOS, Android,
                web apps and infrastructure development. We’re experts at
                crafting tailor-made solutions for your idea. Swift Invention is
                your technology partner ready to build code for success that’s
                ready to scale.
                <div className="mt-6 max-w-max">
                  <Link to={getByName(routes, 'Services').link}>
                    <ArrowedText
                      text="See Services"
                      mainColor="text-primaryCol3"
                      highlightColor="text-primaryCol1"
                      highlightBgColor="bg-primaryCol3"
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
