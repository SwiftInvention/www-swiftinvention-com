import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import confyrmLogo from '~/assets/images/logos/confyrm-logo-2x.png';
import confyrmLaptopImg from '~/assets/images/laptops/confyrm-2x.png';
import styles from './CaseDetailsPage.module.css';

export const ConfyrmCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img className="h-12 mb-3" src={confyrmLogo} alt="Confyrm logo" />
      <div className={styles.detailsDescription}>
        Online service that delivers identity security alerts to reduce fraud
        and detect threats.
      </div>
      <div className="italic font-sans font-normal text-secondaryCol1 text-lg">
        Acquired by Citigroup
      </div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            Confyrm was looking for a trusted software development firm with
            experience in identity management, security and cloud computing.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            Confyrm is an online service that delivers identity security alerts
            to reduce fraud and detect threats. Under the direction of the
            Confyrm CTO and management team, Swift developed a highly scalable,
            cloud-based identity and fraud integration platform. Confyrm was
            later acquired by Citigroup.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>Technologies Used</div>
          <div className={styles.detailsRegular}>
            Scala (Finagle), PostgreSQL, RabbitMQ, Amazon AWS (EC2, RDS, IAM,
            ECR), Docker, Ansible.
          </div>
        </div>
      </div>
    </div>
  );
  const rightColumnItems: JSX.Element = (
    <div className="">
      <img
        className="max-h-80 w-full object-cover mb-16 lg:mb-0"
        src={confyrmLaptopImg}
        alt="Confyrm laptop"
      />
    </div>
  );

  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
    />
  );
};
