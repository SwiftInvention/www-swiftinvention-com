import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import mbsLogo from '~/assets/images/logos/mbs-logo-2x.png';
import mbsLaptop from '~/assets/images/laptops/mbs-2x.png';
import styles from './CaseDetailsPage.module.css';

export const MyBlueSkiesCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-20 object-cover mb-3"
        src={mbsLogo}
        alt="MyBlueSkies logo"
      />
      <div className={styles.detailsDescription}>
        An online platform for teaching and streaming
      </div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            MyBlueSkies was looking for a trusted software development firm that
            can take their concepts and turn them into MVPs and ultimately to
            production-quality offerings.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            We developed the entire solution from concept to website
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>Technologies Used</div>
          <div className={styles.detailsRegular}>
            <ul className="list-disc pl-4">
              <li>
                <a className="underline" href="https://create-react-app.dev/">
                  CRA
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
                <a className="underline" href="https://www.agora.io/en/">
                  Agora SDK
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
        src={mbsLaptop}
        alt="MyBlueSkies page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      previousCase="EatNakedKitchen"
      nextCase="Azigo"
      url="https://app.myblueskiesmusic.com/#/sign-in"
    />
  );
};
