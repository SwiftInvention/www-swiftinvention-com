import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import pakiraLogo from '~/assets/images/logos/pakira-logo.svg';
import pakiraLaptop from '~/assets/images/laptops/pakira-2x.png';
import styles from './CaseDetailsPage.module.css';

export const PakiraCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-20 object-cover mb-3"
        src={pakiraLogo.src}
        alt="Pakira logo"
      />
      <div className={styles.detailsDescription}>
        SaaS industry directory, chat, forum, and order tracking for businesses
        in the wholesale wood industry
      </div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            Pakira was looking for talented, offshore front-end and back-end
            developers as well as UI/UX designers to augment Pakira’s existing
            team
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            Worked as part of Pakira’s team to take a concept into a fully
            production-ready solution
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>Technologies Used</div>
          <div className={styles.detailsRegular}>
            <ul className="list-disc pl-4">
              <li>
                <a className="underline" href="https://nodejs.org/">
                  Node.js
                </a>
              </li>
              <li>
                <a className="underline" href="https://typeorm.io/">
                  TypeORM
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.postgresql.org/">
                  PostgreSQL
                </a>
              </li>
              <li>
                <a className="underline" href="https://vitejs.dev/">
                  Vite
                </a>
              </li>
              <li>
                <a className="underline" href="https://reactjs.org/">
                  React
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.typescriptlang.org/">
                  Typescript
                </a>
              </li>
              <li>
                <a className="underline" href="https://tailwindcss.com/">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const rightColumnItems: JSX.Element = (
    <div className="">
      <img
        className="max-h-80 w-full object-contain mb-4 lg:mb-0"
        src={pakiraLaptop.src}
        alt="MyBlueSkies page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      previousCase="MyBlueSkies"
      nextCase="Privo"
      url="https://www.pakira.com/"
    />
  );
};
