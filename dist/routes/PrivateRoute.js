import React from "../../_snowpack/pkg/react.js";
import {Redirect, Route} from "../../_snowpack/pkg/react-router-dom.js";
const isAuthenticated = () => false;
export const PrivateRoute = ({component: Component, path}) => {
  if (!isAuthenticated()) {
    return /* @__PURE__ */ React.createElement(Redirect, {
      to: "/"
    });
  }
  return /* @__PURE__ */ React.createElement(Route, {
    component: Component,
    path
  });
};
