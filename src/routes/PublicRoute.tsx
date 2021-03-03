import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export const PublicRoute = ({ component: Component, path }: RouteProps) => {
  return <Route component={Component} path={path} />;
};
