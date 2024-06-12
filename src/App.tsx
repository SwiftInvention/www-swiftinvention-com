import React from 'react';
import { Routes, HashRouter, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/notfound/NotFoundPage';
import { ErrorPage } from './pages/error/ErrorPage';
import { HomePage } from './pages/home/HomePage';
import { routes, getByName } from '~/routes/routes';
import { ServicesPage } from './pages/services/ServicesPage';
import { CasesPage } from './pages/cases/CasesPage';
import { NewsPage } from './pages/news/NewsPage';
import { FeedbackPage } from './pages/feedback/FeedbackPage';
import { AzigoCasePage } from './pages/cases/AzigoCasePage';
import { ConfyrmCasePage } from './pages/cases/ConfyrmCasePage';
import { PrivoCasePage } from './pages/cases/PrivoCasePage';
import { BelbellaCasePage } from './pages/cases/BelbellaCasePage';
import { BlankslateCasePage } from './pages/cases/BlankslateCasePage';
// import { EversanaCasePage } from './pages/cases/EversanaCasePage';
import { EnkCasePage } from './pages/cases/EnkCasePage';
import { CareersPage } from './pages/careers/CareersPage';
import { MyBlueSkiesCasePage } from './pages/cases/MyBlueSkiesCasePage';
import { PakiraCasePage } from './pages/cases/PakiraCasePage';
import { VacancyPage } from './pages/careers/VacancyPage';

function App() {
  return (
    <div className="App">
      {/* <Router history={history}> */}
      <HashRouter>
        <Routes>
          <Route path={getByName(routes, 'Home').link} element={<HomePage />} />
          {/* <Route
            path={getByName(routes, 'New Products').link}
            element={<NewProductsPage />}
          /> */}
          <Route
            path={getByName(routes, 'Services').link}
            element={<ServicesPage />}
          />
          <Route
            path={getByName(routes, 'Case Studies').link}
            element={<CasesPage />}
          />
          <Route
            path={getByName(routes, 'Careers').link}
            element={<CareersPage />}
          />
          <Route
            path={getByName(routes, 'Careers').link + '/:id'}
            element={<VacancyPage />}
          />
          <Route
            path={getByName(routes, 'TechStack').link}
            element={<CareersPage />}
          />
          <Route path={getByName(routes, 'News').link} element={<NewsPage />} />
          <Route
            path={getByName(routes, 'Contact Us').link}
            element={<FeedbackPage />}
          />
          <Route
            path={getByName(routes, 'Azigo').link}
            element={<AzigoCasePage />}
          />
          <Route
            path={getByName(routes, 'Confyrm').link}
            element={<ConfyrmCasePage />}
          />
          <Route
            path={getByName(routes, 'Privo').link}
            element={<PrivoCasePage />}
          />
          <Route
            path={getByName(routes, 'BelBella').link}
            element={<BelbellaCasePage />}
          />
          <Route
            path={getByName(routes, 'Blank Slate Technologies').link}
            element={<BlankslateCasePage />}
          />
          {/* <Route
            path={getByName(routes, 'EVERSANA').link}
            element={<EversanaCasePage />}
           /> */}
          <Route
            path={getByName(routes, 'EatNakedKitchen').link}
            element={<EnkCasePage />}
          />
          <Route
            path={getByName(routes, 'MyBlueSkies').link}
            element={<MyBlueSkiesCasePage />}
          />
          <Route
            path={getByName(routes, 'Pakira').link}
            element={<PakiraCasePage />}
          />

          <Route
            path={getByName(routes, 'Error').link}
            element={<ErrorPage />}
          />
          <Route element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
