import React from 'react';
import { Footer } from '~/components/footer/Footer';
import { Header } from '~/components/header/Header';
import { routes } from '~/routes/routes';

export interface DefaultPageProps {}

const headerItems = routes.filter((r) => r.isInHeader);
const footerItems = routes.filter((r) => r.isInFooter);

export const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
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
