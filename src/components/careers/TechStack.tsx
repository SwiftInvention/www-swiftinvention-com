import React from 'react';
import scalaImage from '~/assets/images/stack/scala.png';
import javaImage from '~/assets/images/stack/java.png';
import rustImage from '~/assets/images/stack/rust.png';
import tsImage from '~/assets/images/stack/ts.png';
import jsImage from '~/assets/images/stack/js.png';
import zioImage from '~/assets/images/stack/zio.png';
import akkaImage from '~/assets/images/stack/akka.svg';
import grafanaImage from '~/assets/images/stack/grafana.svg';
import gatlingImage from '~/assets/images/stack/gatling.svg';
import zapImage from '~/assets/images/stack/zap.svg';
import nwjImage from '~/assets/images/stack/nightwatchjs.svg';
import awsImage from '~/assets/images/stack/aws.svg';
import gcpImage from '~/assets/images/stack/gcp.svg';
import ociImage from '~/assets/images/stack/oci.svg';
import kubernetesImage from '~/assets/images/stack/kubernetes.svg';
import istioImage from '~/assets/images/stack/istio.svg';
import prometheusImage from '~/assets/images/stack/prometheus.svg';
import terraformImage from '~/assets/images/stack/terraform.svg';
import viteImage from '~/assets/images/stack/vite.svg';
import snowpackImage from '~/assets/images/stack/snowpack.svg';
import muiImage from '~/assets/images/stack/mui.svg';
import tailwindImage from '~/assets/images/stack/tailwind.svg';
import socketIoImage from '~/assets/images/stack/socketio.svg';
import i18nextImage from '~/assets/images/stack/i18next.svg';
import solidJsImage from '~/assets/images/stack/solidjs.svg';
import wcImage from '~/assets/images/stack/webcomponents.svg';
import puppeteerImage from '~/assets/images/stack/puppeteer.svg';
import recoilImage from '~/assets/images/stack/recoil.svg';
import rnImage from '~/assets/images/stack/reactnative.svg';
import swiftImage from '~/assets/images/stack/swift.svg';
import swiftUiImage from '~/assets/images/stack/swiftui.svg';
import kotlinImage from '~/assets/images/stack/kotlin.svg';
import ajcImage from '~/assets/images/stack/ajc.svg';

import jotaiImage from '~/assets/images/stack/jotai.png';
import quillImage from '~/assets/images/stack/quill.png';
import mysqlImage from '~/assets/images/stack/mysql.png';
import pgsqlImage from '~/assets/images/stack/pgsql.png';
import grpcImage from '~/assets/images/stack/grpc.png';
import { StackCard } from '../careerscard/StackCard';

const techStackList: {
  text: string;
  image: string;
  link: string;
  disabled?: boolean;
}[] = [
  {
    text: 'Scala',
    image: scalaImage,
    link: 'https://www.scala-lang.org/',
  },
  {
    text: 'Java',
    image: javaImage,
    link: 'https://www.oracle.com/java/',
  },
  {
    text: 'Rust',
    image: rustImage,
    link: 'https://www.rust-lang.org/',
  },
  {
    text: 'TypeScript',
    image: tsImage,
    link: 'https://www.typescriptlang.org/',
  },
  {
    text: 'JavaScript',
    image: jsImage,
    link:
      'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
  },
  {
    text: 'ZIO',
    image: zioImage,
    link: 'https://zio.dev/',
  },
  {
    text: 'Akka',
    image: akkaImage,
    link: 'https://akka.io/',
  },
  {
    text: 'Quill',
    image: quillImage,
    link: 'https://getquill.io/',
  },
  {
    text: 'Grafana',
    image: grafanaImage,
    link: 'https://grafana.com/',
  },
  {
    text: 'MySQL',
    image: mysqlImage,
    link: 'https://www.mysql.com/',
  },
  {
    text: 'PostgreSQL',
    image: pgsqlImage,
    link: 'https://www.postgresql.org/',
  },
  {
    text: 'gRPC',
    image: grpcImage,
    link: 'https://grpc.io/',
  },
  {
    text: 'Gatling',
    image: gatlingImage,
    link: 'https://gatling.io/',
  },
  {
    text: 'ZAP',
    image: zapImage,
    link: 'https://www.zaproxy.org/',
  },
  {
    text: 'Nightwatch.js',
    image: nwjImage,
    link: 'https://nightwatchjs.org/',
  },
  {
    text: 'AWS',
    image: awsImage,
    link: 'https://aws.amazon.com/',
  },
  {
    text: 'GCP',
    image: gcpImage,
    link: 'https://cloud.google.com/',
  },
  {
    text: 'OCI',
    image: ociImage,
    link: 'https://www.oracle.com/cloud/',
  },
  {
    text: 'Kubernetes',
    image: kubernetesImage,
    link: 'https://kubernetes.io/',
  },
  {
    text: 'Istio',
    image: istioImage,
    link: 'https://istio.io/',
  },
  {
    text: 'Prometheus',
    image: prometheusImage,
    link: 'https://prometheus.io/',
  },
  {
    text: 'Terraform',
    image: terraformImage,
    link: 'https://www.terraform.io/',
  },
  {
    text: 'Vite',
    image: viteImage,
    link: 'https://vitejs.dev/',
  },
  {
    text: 'Snowpack',
    image: snowpackImage,
    link: 'https://www.snowpack.dev/',
  },
  {
    text: 'MUI',
    image: muiImage,
    link: 'https://mui.com/',
  },
  {
    text: 'Tailwind',
    image: tailwindImage,
    link: 'https://tailwindcss.com/',
  },
  {
    text: 'Socket IO',
    image: socketIoImage,
    link: 'https://socket.io/',
  },
  {
    text: 'i18next',
    image: i18nextImage,
    link: 'https://www.i18next.com/',
  },
  {
    text: 'Solid JS',
    image: solidJsImage,
    link: 'https://www.solidjs.com/',
  },
  {
    text: 'WebComponents',
    image: wcImage,
    link: 'https://www.webcomponents.org/',
  },
  {
    text: 'Puppeteer',
    image: puppeteerImage,
    link: 'https://github.com/puppeteer/puppeteer',
  },
  {
    text: 'Recoil',
    image: recoilImage,
    link: 'https://recoiljs.org/',
  },
  {
    text: 'Jotai',
    image: jotaiImage,
    link: 'https://jotai.org/',
  },
  {
    text: 'React Native',
    image: rnImage,
    link: 'https://reactnative.dev/',
  },
  {
    text: 'Swift',
    image: swiftImage,
    link: 'https://developer.apple.com/swift/',
  },
  {
    text: 'SwiftUI',
    image: swiftUiImage,
    link: 'https://developer.apple.com/xcode/swiftui/',
  },
  {
    text: 'Kotlin',
    image: kotlinImage,
    link: 'https://kotlinlang.org/',
  },
  {
    text: 'Jetpack Compose',
    image: ajcImage,
    link: 'https://developer.android.com/jetpack/compose',
  },
];

export const TechStack: React.FC = () => {
  return (
    <>
      <div className="font-sans font-medium text-primaryCol2 text-base pt-8">
        OUR TECH STACK
      </div>
      <ul className="mt-7 pb-25 flex flex-col justify-start sm:flex-row sm:flex-wrap gap-7">
        {techStackList.map((techStackItem, index) => {
          return !techStackItem.disabled ? (
            <StackCard
              key={index.toString()}
              text={techStackItem.text}
              image={techStackItem.image}
              link={techStackItem.link}
            />
          ) : null;
        })}
      </ul>
    </>
  );
};
