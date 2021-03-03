import React from 'react';
import caseDetailsBg from '~/assets/images/case-details-bg-2x.png';
import { DefaultPage } from '../default/DefaultPage';
import { VisitButton } from '~/components/visitbutton/VisitButton';

export interface CaseDetailsPageProps {
  leftColumnItems: JSX.Element;
  rightColumnItems: JSX.Element;
  url?: string;
}

export const CaseDetailsPage: React.FC<CaseDetailsPageProps> = ({
  leftColumnItems,
  rightColumnItems,
  url,
}) => {
  return (
    <DefaultPage>
      <div className="relative min-h-screen h-full bg-primaryCol2">
        <div className="absolute inset-0 mx-auto max-w-8xl h-full">
          <img
            className="h-full w-full object-cover"
            src={caseDetailsBg}
            alt="case details page background"
          />
        </div>
        <div className="relative">
          <div className="px-8 pl-10 sm:pl-16 lg:pl-30 pt-16 lg:pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-7">
              <div className="order-2 lg:order-1 mb-40">{leftColumnItems}</div>
              <div className="order-1 lg:order-2 self-center flex flex-col mb-16 lg:mb-0 max-w-xl">
                {rightColumnItems}
                {url && <VisitButton url={url} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
