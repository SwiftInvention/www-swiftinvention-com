import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import belbellaLogo from '~/assets/images/logos/belbella-logo-2x.png';
import belbellaLaptop from '~/assets/images/laptops/belbella-2x.png';
import styles from './CaseDetailsPage.module.css';

export const BelbellaCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-32 object-cover mb-3"
        src={belbellaLogo}
        alt="BelBella logo"
      />
      <div className={styles.detailsDescription}>On-demand beauty services</div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            BelBella was looking for a development partner that could support
            take theiri UX and UI designs and implement them in an agile manner
            using the latest tech stacks.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            We took the concept and UI input and developed a e-commerce website
            and webapp including database, text messaging, email notification,
            scheduling functions. We also developed both iOS and Adnroid mobile
            apps for both end-users and traveling beauty pros.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>Technologies Used</div>
          <div className={styles.detailsRegular}>
            JavaScript(Vue.js), REST, Scala (Akka http, Quill), Nightwatchjs,
            Amazon AWS (EC2, RDS, CloudWatch), PostgreSQL, Braintree, Plivo
          </div>
        </div>
      </div>
    </div>
  );
  const rightColumnItems: JSX.Element = (
    <div className="mb-4 lg:mb-0">
      <img
        className="max-h-80 w-full object-cover"
        src={belbellaLaptop}
        alt="BelBella page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      previousCase="Privo"
      nextCase="Blank Slate Technologies"
      url="https://belbella.com/"
    />
  );
};
