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
            <ul className="list-disc pl-4">
              <li>
                <a
                  className="underline"
                  href="https://developers.google.com/closure/library"
                >
                  JavaScript (Google Closure library)
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
                <a
                  className="underline"
                  href="https://en.wikipedia.org/wiki/Java_(programming_language)"
                >
                  Java
                </a>
                /
                <a className="underline" href="https://www.scala-lang.org/">
                  Scala
                </a>{' '}
                (
                <a
                  className="underline"
                  href="https://github.com/twitter/finagle"
                >
                  Finagle
                </a>
                ,{' '}
                <a className="underline" href="https://getquill.io/">
                  Quill
                </a>
                )
              </li>
              <li>
                <a className="underline" href="https://aws.amazon.com/">
                  Amazon AWS (EC, RDS)
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.selenium.dev/">
                  Selenium
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://chrome.google.com/webstore/category/extensions"
                >
                  Chrome
                </a>
                /
                <a
                  className="underline"
                  href="https://developer.apple.com/safari/extensions/"
                >
                  Safari
                </a>
                /
                <a
                  className="underline"
                  href="https://addons.mozilla.org/en-US/firefox/"
                >
                  FireFox
                </a>{' '}
                browser extensions
              </li>
              <li>
                <a className="underline" href="https://solr.apache.org/">
                  Solr
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
        src={azigoLaptopImg}
        alt="Azigo page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      previousCase="MyBlueSkies"
      nextCase="Confyrm"
      url="https://membersshop.com/?ref=www.azigoinc.com"
    />
  );
};
