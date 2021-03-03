import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import azigoLaptopImg from '~/assets/images/laptops/azigo-2x.png';
import azigoLogo from '~/assets/images/logos/azigo-logo-2x.png';
import styles from './CaseDetailsPage.module.css';

export const AzigoCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-16 mb-3 object-cover"
        src={azigoLogo}
        alt="Azigo logo"
      />
      <div className={styles.detailsDescription}>
        Online retailer royalty platform
      </div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            Azigo was looking for a dev shop that could take Azigo’s product
            concepts and develop them rapidly into products.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            We developed the browser plugs and web service to manage affiliate
            marketing commerce for retailer brands and end users.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>Technologies Used</div>
          <div className={styles.detailsRegular}>
            JavaScript (Google Closure library), REST, Java/Scala (Finagle,
            Quill), Amazon AWS (EC, RDS), Selenium, Chrome/Safari/FireFox
            browser extensions, Solar.
          </div>
        </div>
      </div>
    </div>
  );
  const rightColumnItems: JSX.Element = (
    <div className="mb-4 lg:mb-0">
      <img
        className="max-h-80 w-full object-cover"
        src={azigoLaptopImg}
        alt="Azigo page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      url="https://membersshop.com/?ref=www.azigoinc.com"
    />
  );
};
