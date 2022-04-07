import React from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import {ArrowedText} from "../arrowedtext/ArrowedText.js";
export const Stripe = ({text, label, link}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-primaryCol3 w-full h-36 flex flex-wrap items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-sans font-medium just-primaryCol1 text-lg px-2"
  }, text), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "-mt-1 sm:ml-10 px-6 h-11 inline-flex items-center justify-center border-primaryCol1 hover:border-primaryCol3 border-2 bg-primaryCol3 hover:bg-primaryCol1 text-primaryCol1 hover:text-primaryCol3 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primaryCol1"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "",
    to: link
  }, /* @__PURE__ */ React.createElement(ArrowedText, {
    text: label,
    horizontalPadding: "px-0"
  }))));
};
