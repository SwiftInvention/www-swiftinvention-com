import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from '~/react/components/footer/Footer';
import { Header } from '~/react/components/header/Header';
import { getByName, routes } from '~/react/routes/routes';

export interface DefaultPageProps {
  children: JSX.Element | JSX.Element[];
}

const headerItems = routes.filter((r) => r.isInHeader);
const footerItems = routes.filter((r) => r.isInFooter);

export const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== getByName(routes, 'TechStack').link) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="bg-primaryCol1 max-w-8xl mx-auto">
      <div className="relative">
        <div className="min-h-screen">
          <header>
            <Header navItems={headerItems} />
          </header>
          <main>
            <div id="content">{children}</div>
          </main>
          <footer>
            <Footer navItems={footerItems} />
          </footer>
        </div>
      </div>
    </div>
  );
};
