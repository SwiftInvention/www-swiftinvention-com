import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DefaultPage } from '../default/DefaultPage';
import servicesBg from '~/assets/images/services-bg.png';
import { VacancyPage } from './VacancyPage';
import { CareersMainPage } from './CareersMainPage';

export const CareersPage: React.FC = () => {
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
          <div className="px-10 md:px-24 pt-16 lg:pt-32">
            <Switch>
              <Route exact path="/careers">
                <CareersMainPage />
              </Route>
              <Route path="/careers/:id">
                <VacancyPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
