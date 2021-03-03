import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultPage } from '../default/DefaultPage';
import servicesBg from '~/assets/images/services-bg.png';
import { ArrowedText } from '~/components/arrowedtext/ArrowedText';
import { ServiceCard } from '~/components/servicecard/ServiceCard';
import computerImage from '~/assets/images/computer-white.png';
import phoneImage from '~/assets/images/phone-white.png';
import serverImage from '~/assets/images/server-white.png';
import tabletImage from '~/assets/images/tablet-white.png';
import { routes, getByName } from '~/routes/routes';

export interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <DefaultPage>
      <div className="relative min-h-screen h-full">
        <div className="hidden sm:block sm:absolute sm:inset-0 mx-auto max-w-8xl">
          <img
            className="h-full w-full object-cover object-left-top"
            src={servicesBg}
            alt="services page background"
          />
        </div>
        <div className="relative">
          <div className="px-8 pl-10 sm:pl-16 md:pl-30 pt-16 lg:pt-32">
            <div className="max-w-xl">
              <div className="text-secondaryCol1 font-sans font-medium text-4xl mb-5">
                Services
              </div>
              <div className="text-secondaryCol1 font-sans font-normal text-lg">
                Our dev shop pivots to ensure your startup arrives at the best
                solution as quick as possible. We offer a number of software
                application services to find the right pathway for you.
              </div>
              <div className="mt-6">
                <Link to={getByName(routes, 'Case Studies').link}>
                  <ArrowedText
                    text="See Who&#39;s Succeeded"
                    mainColor="text-primaryCol3"
                  />
                </Link>
              </div>
            </div>
            <div className="font-sans font-medium text-primaryCol2 text-base pt-16 lg:pt-28">
              OUR SERVICES
            </div>
            <ul className="mt-7 mb-25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-7 ">
              <ServiceCard
                text="Mobile Apps (iOS&nbsp;and&nbsp;Android)"
                image={phoneImage}
              />
              <ServiceCard text="Web Apps" image={tabletImage} />
              <ServiceCard text="Website Development" image={serverImage} />
              <ServiceCard text="Web Services" image={computerImage} />
            </ul>
          </div>
          <div className="bg-primaryCol3 w-full h-36 flex items-center justify-center">
            <div className="font-sans font-medium text-primaryCol1 text-lg">
              Interested in the Service Provider Scheduling App and other
              products we have to offer?
            </div>
            <button
              type="button"
              className="-mt-1 ml-10 px-6 h-10 inline-flex items-center justify-center border-primaryCol1 hover:border-primaryCol3 border-2 bg-primaryCol3 hover:bg-primaryCol1 text-primaryCol1 hover:text-primaryCol3 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primaryCol1"
            >
              <Link to={getByName(routes, 'Case Studies').link}>
                <ArrowedText text="See Products" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
