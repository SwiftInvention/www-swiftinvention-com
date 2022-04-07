import React from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import {DefaultPage} from "../default/DefaultPage.js";
import {Stripe} from "../../components/stripe/Stripe.js";
import servicesBg from "../../assets/images/services-bg.png.proxy.js";
import phoneAlarm from "../../assets/images/phone-alarm.svg.proxy.js";
import {routes, getByName} from "../../routes/routes.js";
export const NewProductsPage = () => {
  return /* @__PURE__ */ React.createElement(DefaultPage, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative min-h-screen h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:block sm:absolute sm:inset-0 mx-auto max-w-8xl"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-full w-full object-cover object-left-top",
    src: servicesBg,
    alt: "background"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8 pl-10 sm:pl-16 md:pl-30 pt-16 lg:pt-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-secondaryCol1 font-sans font-medium text-4xl border-b border-primaryCol3 max-w-max pb-2 pr-6 mb-16"
  }, "New Products"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-auto gap-7  justify-items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    className: "max-h-72 w-full pl-8 sm:pl-16 mb-8",
    src: phoneAlarm,
    alt: "phone alarm"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "lg:pl-4 mb-34"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-primaryCol3 font-sans font-medium text-lg"
  }, "NEW!"), /* @__PURE__ */ React.createElement("div", {
    className: "text-secondaryCol1 text-2.5xl font-sans font-medium mt-2 mb-4"
  }, "Service Provider Scheduling App"), /* @__PURE__ */ React.createElement("div", {
    className: "text-secondaryCol1 font-sans font-normal text-sm space-y-4 max-w-xl"
  }, /* @__PURE__ */ React.createElement("p", null, "We are excited to announce a new service in a time of new needs: Our Service Provider Scheduling App."), /* @__PURE__ */ React.createElement("p", null, "In short order, we\u2019ll create a custom appointment and booking application that schedules at-client-location appointments for you.", " ", /* @__PURE__ */ React.createElement(Link, {
    className: "text-primaryCol3 hover:border-b",
    to: getByName(routes, "Contact Us").link
  }, "Contact Us"), " ", "now to schedule a meeting with us so we can understand your business and needs further."), /* @__PURE__ */ React.createElement("p", null, "In the meantime, see", " ", /* @__PURE__ */ React.createElement("a", {
    className: "text-primaryCol3 hover:border-b",
    href: "https://belbella.com",
    target: "_blank",
    rel: "noreferrer"
  }, "https://belbella.com"), " ", "to get a sense of what we can do for you."))))), /* @__PURE__ */ React.createElement(Stripe, {
    text: "Do you have an idea for a new product?",
    label: "Contact Us",
    link: getByName(routes, "Contact Us").link
  }))));
};
