import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { PublicRoute } from './routes/PublicRoute';
import { history } from './utils/router';
import { NotFoundPage } from './pages/notfound/NotFoundPage';
import { ErrorPage } from './pages/error/ErrorPage';
import { HomePage } from './pages/home/HomePage';
import { routes, getByName } from '~/routes/routes';
import { NewProductsPage } from './pages/latest/NewProductsPage';
import { ServicesPage } from './pages/services/ServicesPage';
import { CasesPage } from './pages/cases/CasesPage';
import { NewsPage } from './pages/news/NewsPage';
import { FeedbackPage } from './pages/feedback/FeedbackPage';
import { AzigoCasePage } from './pages/cases/AzigoCasePage';
import { ConfyrmCasePage } from './pages/cases/ConfyrmCasePage';
import { PrivoCasePage } from './pages/cases/PrivoCasePage';
import { BelbellaCasePage } from './pages/cases/BelbellaCasePage';
import { BlankslateCasePage } from './pages/cases/BlankslateCasePage';
import { EversanaCasePage } from './pages/cases/EversanaCasePage';
import { EnkCasePage } from './pages/cases/EnkCasePage';

interface AppProps {}

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PublicRoute
            exact
            path={getByName(routes, 'Home').link}
            component={HomePage}
          />
          <PublicRoute
            path={getByName(routes, 'New Products').link}
            component={NewProductsPage}
          />
          <PublicRoute
            path={getByName(routes, 'Services').link}
            component={ServicesPage}
          />
          <PublicRoute
            path={getByName(routes, 'Case Studies').link}
            component={CasesPage}
          />
          <PublicRoute
            path={getByName(routes, 'News').link}
            component={NewsPage}
          />
          <PublicRoute
            path={getByName(routes, 'Contact Us').link}
            component={FeedbackPage}
          />
          <PublicRoute
            path={getByName(routes, 'Azigo').link}
            component={AzigoCasePage}
          />
          <PublicRoute
            path={getByName(routes, 'Confyrm').link}
            component={ConfyrmCasePage}
          />
          <PublicRoute
            path={getByName(routes, 'Privo').link}
            component={PrivoCasePage}
          />
          <PublicRoute
            path={getByName(routes, 'BelBella').link}
            component={BelbellaCasePage}
          />
          <PublicRoute
            path={getByName(routes, 'Blank Slate Technologies').link}
            component={BlankslateCasePage}
          />
          <PublicRoute
            path={getByName(routes, 'EVERSANA').link}
            component={EversanaCasePage}
          />
          <PublicRoute
            path={getByName(routes, 'EatNakedKitchen').link}
            component={EnkCasePage}
          />

          <PublicRoute
            path={getByName(routes, 'Error').link}
            component={ErrorPage}
          />
          <PublicRoute component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
