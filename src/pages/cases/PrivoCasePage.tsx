import React from 'react';
import { CaseDetailsPage } from './CaseDetailsPage';
import privoLogo from '~/assets/images/logos/privo-logo-2x.png';
import privoLaptop from '~/assets/images/laptops/privo-2x.png';
import styles from './CaseDetailsPage.module.css';

export const PrivoCasePage: React.FC = () => {
  const leftColumnItems: JSX.Element = (
    <div>
      <img
        className="max-h-16 object-cover mb-3"
        src={privoLogo}
        alt="Privo logo"
      />
      <div className={styles.detailsDescription}>
        Children&#39;s Online Identity &amp; Consent Management
      </div>
      <div className={styles.detailsDivider} />
      <div className="py-1 pr-2 space-y-8 max-w-md">
        <div>
          <div className={styles.detailsSubtitle}>Why They Came to Swift</div>
          <div className={styles.detailsRegular}>
            Privo was looking to outsource much of its software development and
            maintenance to a trusted partner with experience in the identity
            management industry.
          </div>
        </div>
        <div>
          <div className={styles.detailsSubtitle}>What Swift Did for Them</div>
          <div className={styles.detailsRegular}>
            We are the primary developers of the the back-end for the privo
            online identity service.
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
                  href="https://en.wikipedia.org/wiki/JavaScript"
                >
                  JavaScript
                </a>
                (
                <a className="underline" href="https://angular.io/">
                  Angular2
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
                <a className="underline" href="https://grpc.io/">
                  gRPC
                </a>
              </li>
              <li>
                <a className="underline" href="https://openid.net/">
                  OpenId
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language"
                >
                  SAML
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://en.wikipedia.org/wiki/Microservices"
                >
                  Microservices
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://en.wikipedia.org/wiki/Java_(programming_language)"
                >
                  Java
                </a>
                (
                <a className="underline" href="https://spring.io/">
                  Spring
                </a>
                )
              </li>
              <li>
                <a className="underline" href="https://www.scala-lang.org/">
                  Scala (Akka gRPC, ZIO, Quill)
                </a>
              </li>
              <li>
                <a className="underline" href="https://gatling.io/">
                  Gatling
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.zaproxy.org/">
                  ZAP
                </a>
              </li>
              <li>
                <a className="underline" href="https://nightwatchjs.org/">
                  Nightwatchjs
                </a>
              </li>
              <li>
                <a className="underline" href="https://aws.amazon.com/">
                  Amazon AWS (ECS, EC2, RDS, SQS, CloudFront, IAM, ECR, Route53,
                  CloudWatch)
                </a>
              </li>
              <li>
                <a className="underline" href="https://kubernetes.io/">
                  Kubernetes (EKS)
                </a>
              </li>
              <li>
                <a className="underline" href="https://istio.io/">
                  Istio
                </a>
              </li>
              <li>
                <a className="underline" href="https://prometheus.io/">
                  Prometheus
                </a>
              </li>
              <li>
                <a className="underline" href="https://grafana.com/">
                  Grafana
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.terraform.io/">
                  Terraform
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
        className="max-h-80 w-full object-cover mb-4 lg:mb-0"
        src={privoLaptop}
        alt="Privo page"
      />
    </div>
  );
  return (
    <CaseDetailsPage
      leftColumnItems={leftColumnItems}
      rightColumnItems={rightColumnItems}
      previousCase="Confyrm"
      nextCase="BelBella"
      url="https://www.privo.com/"
    />
  );
};
