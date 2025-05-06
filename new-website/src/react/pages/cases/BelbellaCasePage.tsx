import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import belbellaLogo from '~/assets/images/logos/belbella-logo-2x.png';
import belbellaLaptop from '~/assets/images/laptops/belbella-2x.png';
import styles from './CaseDetailsPage.module.css';

export const BelbellaCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-32 object-contain mb-3"
        src={belbellaLogo.src}
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
            <ul className="list-disc pl-4">
              <li>
                <a
                  className="underline"
                  href="https://en.wikipedia.org/wiki/JavaScript"
                >
                  JavaScript
                </a>
                (
                <a className="underline" href="https://vuejs.org/">
                  Vue.js
                </a>
                )
              </li>
              <li>
                <a
                  className="underline"
                  href="https://en.wikipedia.org/wiki/Representational_state_transfer"
                >
                  REST
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.scala-lang.org/">
                  Scala (Akka http, Quill)
                </a>
              </li>
              <li>
                <a className="underline" href="https://nightwatchjs.org/">
                  Nightwatchjs
                </a>
              </li>
              <li>
                <a className="underline" href="https://aws.amazon.com/">
                  Amazon AWS (EC2, RDS, CloudWatch)
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.postgresql.org/">
                  PostgreSQL
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.braintreepayments.com/"
                >
                  Braintree
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.plivo.com/">
                  Plivo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  const rightColumnItems: JSX.Element = (
    <div className="mb-4 lg:mb-0">
      <img
        className="max-h-80 w-full object-contain"
        src={belbellaLaptop.src}
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
