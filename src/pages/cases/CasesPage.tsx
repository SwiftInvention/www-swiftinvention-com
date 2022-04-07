import React from 'react';
import { DefaultPage } from '../default/DefaultPage';
import casesBg from '~/assets/images/cases-bg.png';
import { CaseStudyCard } from '~/components/casestudy/CaseStudyCard';

import azigoCardBg from '~/assets/images/cards/azigo-card-2x.png';
import confyrmCardBg from '~/assets/images/cards/confyrm-card-2x.png';
import privoCardBg from '~/assets/images/cards/privo-card-2x.png';
import belbellaCardBg from '~/assets/images/cards/belbella-card-2x.png';
import blankslateCardBg from '~/assets/images/cards/blank-slate-card-2x.png';
import eversanaCardBg from '~/assets/images/cards/eversana-card-2x.png';
import enkCardBg from '~/assets/images/cards/enk-card-2x.png';
import { routes, getByName } from '~/routes/routes';

export interface CasesPageProps {}

export const CasesPage: React.FC<CasesPageProps> = () => {
  return (
    <DefaultPage>
      <div className="relative min-h-screen h-full">
        <div className="hidden md:block md:absolute md:inset-0 mx-auto max-w-8xl">
          <img
            className="h-full w-full object-cover object-center"
            src={casesBg}
            alt="cases page background"
          />
        </div>
        <div className="relative">
          <div className="px-8 pl-10 sm:pl-16 lg:pl-30 pt-16 lg:pt-32">
            <div className="max-w-xl">
              <div className="text-secondaryCol1 font-sans font-medium text-4xl mb-5">
                Case Studies
              </div>
              <div className="text-secondaryCol1 font-sans font-normal text-lg">
                No matter the need, Swift identifies the pathways needed for
                success. See our case studies below to see how we did it.
              </div>
            </div>
            <ul className="mt-16 sm:mt-24 pb-25 grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-7">
              <CaseStudyCard
                image={azigoCardBg}
                title="Azigo"
                description="Online retailer loyalty platform"
                link={getByName(routes, 'Azigo').link}
              />
              <CaseStudyCard
                image={confyrmCardBg}
                title="Confyrm"
                link={getByName(routes, 'Confyrm').link}
                description="Online service that delivers identity security alerts to reduce fraud and detect threats"
              />
              <CaseStudyCard
                image={privoCardBg}
                title="Privo"
                link={getByName(routes, 'Privo').link}
                description="Children&#39;s Online Identity &amp; 
                Consent Management"
                crop="object-right"
              />
              <CaseStudyCard
                image={belbellaCardBg}
                title="BelBella"
                link={getByName(routes, 'BelBella').link}
                description="On-demand beauty services"
                crop="object-right"
              />
              <CaseStudyCard
                image={blankslateCardBg}
                title="Blank Slate Technologies"
                link={getByName(routes, 'Blank Slate Technologies').link}
                description="Enterprise Microlearning App"
                crop="object-right"
              />
              <CaseStudyCard
                image={eversanaCardBg}
                title="EVERSANA"
                link={getByName(routes, 'EVERSANA').link}
                description="Advisory and information services for the pharmaceutical industry"
                crop="object-right"
              />
              <CaseStudyCard
                image={enkCardBg}
                title="EatNakedKitchen"
                link={getByName(routes, 'EatNakedKitchen').link}
                description="Science-based nutrition, skills and strategies website"
              />
            </ul>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
