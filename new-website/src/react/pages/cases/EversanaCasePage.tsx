import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import eversanaLogo from '~/assets/images/logos/eversana-logo-2x.png';
import eversanaLaptop from '~/assets/images/laptops/eversana-2x.png';
import styles from './CaseDetailsPage.module.css';

export const EversanaCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-20 object-cover mb-3"
        src={eversanaLogo}
        alt="EVERSANA logo"
      />
      <div className={styles.detailsDescription}>
        Advisory and information services for the pharmaceutical industry
      </div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            Eversana was looking for a development firm that was comfortable
            taking a series of product concepts and working collaboratively to
            bring them to market as MVPs.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            We take product concepts for new information services from concept
            to MVP and working prototypes.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>Technologies Used</div>
          <div className={styles.detailsRegular}>
            <ul className="list-disc pl-4">
              <li>
                <a className="underline" href="https://www.typescriptlang.org/">
                  TypeScript
                </a>
                (
                <a className="underline" href="https://reactjs.org/">
                  React
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
                  Scala (Akka http, ZIO, Quill)
                </a>
              </li>
              <li>
                <a className="underline" href="https://aws.amazon.com/">
                  Amazon AWS (EC2, RDS, CloudWatch)
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
    <div className="">
      <img
        className="max-h-80 w-full object-contain mb-4 lg:mb-0"
        src={eversanaLaptop}
        alt="EVERSANA page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      previousCase="Blank Slate Technologies"
      nextCase="EatNakedKitchen"
      url="https://www.eversana.com/"
    />
  );
};
