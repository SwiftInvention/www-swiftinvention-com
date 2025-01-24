import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultPage } from '../default/DefaultPage';
import servicesBg from '~/assets/images/services-bg.png';
import { ArrowedText } from '~/react/components/arrowedtext/ArrowedText';
import { ServiceCard } from '~/react/components/servicecard/ServiceCard';
import computerImage from '~/assets/images/computer-white.png';
import phoneImage from '~/assets/images/phone-white.png';
import serverImage from '~/assets/images/server-white.png';
import tabletImage from '~/assets/images/tablet-white.png';
import { routes, getByName } from '~/react/routes/routes';

export interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <DefaultPage>
      <div className="relative min-h-screen h-full">
        <div className="hidden sm:block sm:absolute sm:inset-0 mx-auto max-w-8xl">
          <img
            className="h-full w-full object-cover object-left-top"
            src={servicesBg.src}
            alt="services page background"
          />
        </div>
        <div className="relative">
          <div className="px-10 md:px-24 pt-16 lg:pt-32">
            <div className="max-w-xl">
              <div className="text-secondaryCol1 font-sans font-medium text-4xl mb-5">
                Services
              </div>
              <div className="text-secondaryCol1 font-sans font-normal text-lg">
                We help disruptive startups and businesses create innovative
                products and services. From strategy and design to iOS, Android,
                web apps and infrastructure development. We’re experts at
                crafting tailor-made solutions for your idea. Swift Invention is
                your technology partner ready to build code for success that’s
                ready to scale.
              </div>
              <div className="mt-6 max-w-max">
                <Link to={getByName(routes, 'Case Studies').link}>
                  <ArrowedText
                    text="See Who&#39;s Succeeded"
                    mainColor="text-primaryCol3"
                    highlightColor="text-primaryCol1"
                    highlightBgColor="bg-primaryCol3"
                  />
                </Link>
              </div>
            </div>
            <div className="font-sans font-medium text-primaryCol2 text-base pt-16 lg:pt-28">
              OUR SERVICES
            </div>
            <ul className="mt-7 pb-25 flex flex-col justify-start sm:flex-row sm:flex-wrap gap-7">
              <ServiceCard
                text="Mobile Apps (iOS&nbsp;and&nbsp;Android)"
                image={phoneImage.src}
              />
              <ServiceCard text="Web Apps" image={tabletImage.src} />
              <ServiceCard text="Website Development" image={serverImage.src} />
              <ServiceCard text="Web Services" image={computerImage.src} />
            </ul>
          </div>
          {/* <Stripe
            text="Interested in the Service Provider Scheduling App and other
          products we have to offer?"
            label="See Products"
            link={getByName(routes, 'New Products').link}
          /> */}
        </div>
      </div>
    </DefaultPage>
  );
};
