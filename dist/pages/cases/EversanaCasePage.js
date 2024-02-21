import React from "../../../_snowpack/pkg/react.js";
import {CaseDetailsPage} from "./CaseDetailsPage.js";
import eversanaLogo from "../../assets/images/logos/eversana-logo-2x.png.proxy.js";
import eversanaLaptop from "../../assets/images/laptops/eversana-2x.png.proxy.js";
import styles from "./CaseDetailsPage.module.css.proxy.js";
export const EversanaCasePage = () => {
  const leftColumnItems = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "max-h-20 object-cover mb-3",
    src: eversanaLogo,
    alt: "EVERSANA logo"
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.detailsDescription
  }, "Advisory and information services for the pharmaceutical industry"), /* @__PURE__ */ React.createElement("div", {
    className: styles.detailsDivider
  }), /* @__PURE__ */ React.createElement("div", {
    className: "py-1 pr-2 space-y-8 max-w-md"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: styles.detailsSubtitle
  }, "Why They Came to Swift"), /* @__PURE__ */ React.createElement("div", {
    className: styles.detailsRegular
  }, "Eversana was looking for a development firm that was comfortable taking a series of product concepts and working collaboratively to bring them to market as MVPs.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: styles.detailsSubtitle
  }, "What Swift Did for Them"), /* @__PURE__ */ React.createElement("div", {
    className: styles.detailsRegular
  }, "We take product concepts for new information services from concept to MVP and working prototypes.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: styles.detailsSubtitle
  }, "Technologies Used"), /* @__PURE__ */ React.createElement("div", {
    className: styles.detailsRegular
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc pl-4"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "https://www.typescriptlang.org/"
  }, "TypeScript"), "(", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "https://reactjs.org/"
  }, "React"), ")"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "https://en.wikipedia.org/wiki/Representational_state_transfer"
  }, "REST")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "https://www.scala-lang.org/"
  }, "Scala (Akka http, ZIO, Quill)")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "https://aws.amazon.com/"
  }, "Amazon AWS (EC2, RDS, CloudWatch)")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "https://www.ansible.com/"
  }, "Ansible")))))));
  const rightColumnItems = /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    className: "max-h-80 w-full object-contain mb-4 lg:mb-0",
    src: eversanaLaptop,
    alt: "EVERSANA page"
  }));
  return /* @__PURE__ */ React.createElement(CaseDetailsPage, {
    leftColumnItems,
    rightColumnItems,
    previousCase: "Blank Slate Technologies",
    nextCase: "EatNakedKitchen",
    url: "https://www.eversana.com/"
  });
};
