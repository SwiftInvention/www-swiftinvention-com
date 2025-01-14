import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import blankSlateLogo from '~/assets/images/logos/blankslate-logo-2x.png';
import blankSlateLaptop from '~/assets/images/laptops/blankslate-2x.png';
import styles from './CaseDetailsPage.module.css';

export const BlankslateCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-16 mb-3 object-cover"
        src={blankSlateLogo.src}
        alt="Blank slate logo"
      />
      <div className={styles.detailsDescription}>
        Enterprise Microlearning App
      </div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            Blank Slate was looking for a full service development partner that
            can take their concepts and turn them into MVPs and ultimately to
            production-quality offerings.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            We developed the entire solution from concept to website and mobile
            app development on ongoing operations.
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
                  Scala (Akka http, Quill, Finagle)
                </a>
              </li>
              <li>
                <a className="underline" href="https://nightwatchjs.org/">
                  Nightwatchjs
                </a>
              </li>
              <li>
                <a className="underline" href="https://aws.amazon.com/">
                  Amazon AWS
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://en.wikipedia.org/wiki/JavaScript"
                >
                  JavaScript
                </a>
                (
                <a className="underline" href="https://reactjs.org/">
                  React
                </a>
                )
              </li>
              <li>
                <a className="underline" href="https://reactnative.dev/">
                  React Native
                </a>
              </li>
              <li>
                <a className="underline" href="https://cloud.google.com/">
                  Google Cloud
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.ansible.com/">
                  Ansible
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
        src={blankSlateLaptop.src}
        alt="Blank slate page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      previousCase="BelBella"
      nextCase="EatNakedKitchen"
      url="https://www.blankslatetech.co/"
    />
  );
};
