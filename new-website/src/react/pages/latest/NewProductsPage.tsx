import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultPage } from '../default/DefaultPage';
import { Stripe } from '~/components/stripe/Stripe';
import servicesBg from '~/assets/images/services-bg.png';
import phoneAlarm from '~/assets/images/phone-alarm.svg';
import { routes, getByName } from '~/routes/routes';

export interface NewProductsPageProps {}

export const NewProductsPage: React.FC<NewProductsPageProps> = () => {
  return (
    <DefaultPage>
      <div className="relative min-h-screen h-full">
        <div className="hidden sm:block sm:absolute sm:inset-0 mx-auto max-w-8xl">
          <img
            className="h-full w-full object-cover object-left-top"
            src={servicesBg.src}
            alt="background"
          />
        </div>
        <div className="relative">
          <div className="px-8 pl-10 sm:pl-16 md:pl-30 pt-16 lg:pt-32">
            <div className="text-secondaryCol1 font-sans font-medium text-4xl border-b border-primaryCol3 max-w-max pb-2 pr-6 mb-16">
              New Products
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-auto gap-7  justify-items-start">
              <div className="">
                <img
                  className="max-h-72 w-full pl-8 sm:pl-16 mb-8"
                  src={phoneAlarm.src}
                  alt="phone alarm"
                />
              </div>
              <div className="lg:pl-4 mb-34">
                <div className="text-primaryCol3 font-sans font-medium text-lg">
                  NEW!
                </div>
                <div className="text-secondaryCol1 text-2.5xl font-sans font-medium mt-2 mb-4">
                  Service Provider Scheduling App
                </div>
                <div className="text-secondaryCol1 font-sans font-normal text-sm space-y-4 max-w-xl">
                  <p>
                    We are excited to announce a new service in a time of new
                    needs: Our Service Provider Scheduling App.
                  </p>
                  <p>
                    In short order, we’ll create a custom appointment and
                    booking application that schedules at-client-location
                    appointments for you.{' '}
                    <Link
                      className="text-primaryCol3 hover:border-b"
                      to={getByName(routes, 'Contact Us').link}
                    >
                      Contact Us
                    </Link>{' '}
                    now to schedule a meeting with us so we can understand your
                    business and needs further.
                  </p>
                  <p>
                    In the meantime, see{' '}
                    <a
                      className="text-primaryCol3 hover:border-b"
                      href="https://belbella.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://belbella.com
                    </a>{' '}
                    to get a sense of what we can do for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Stripe
            text="Do you have an idea for a new product?"
            label="Contact Us"
            link={getByName(routes, 'Contact Us').link}
          />
        </div>
      </div>
    </DefaultPage>
  );
};
