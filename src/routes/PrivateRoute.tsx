import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const isAuthenticated = () => false;

export const PrivateRoute = ({ component: Component, path }: RouteProps) => {
  if (!isAuthenticated()) {
    return <Redirect to="/" />;
  }
  return <Route component={Component} path={path} />;
};
