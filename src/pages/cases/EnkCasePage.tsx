import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import enkLogo from '~/assets/images/logos/enk-logo-2x.png';
import enkLaptop from '~/assets/images/laptops/enk-2x.png';
import styles from './CaseDetailsPage.module.css';

export const EnkCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-4 mb-8 object-cover"
        src={enkLogo}
        alt="EatNakedKitchen logo"
      />
      <div className={styles.detailsDescription}>
        Science-based nutrition, skills and strategies website
      </div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            EatNakedKitchen was looking for a highly reliable partner to help
            them migrate their website to a robust Google Cloud platform and
            support and maintain the site in production.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            Backend development of this new website as well as on-going
            operational support.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>Technologies Used</div>
          <div className={styles.detailsRegular}>
            <ul className="list-disc pl-4">
              <li>
                <a className="underline" href="https://wordpress.com/">
                  WordPress
                </a>
              </li>
              <li>
                <a className="underline" href="https://ontraport.com/">
                  Ontraport
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.elegantthemes.com/gallery/divi//"
                >
                  Divi
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
        src={enkLaptop}
        alt="EatNakedKitchen page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      previousCase="EVERSANA"
      nextCase="MyBlueSkies"
      url="https://www.pakira.com/"
    />
  );
};
