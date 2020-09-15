import React from 'react';
import { Route } from 'react-router-dom';
import { RouteNames, RoutingDefinition } from 'modules/Core/types';
import HomePage from './Page/Index';

export const routeNames: RouteNames = {
  HOME: '/'
};

const Routing: RoutingDefinition = [
  <Route
    key={routeNames.HOME}
    path={routeNames.HOME}
    exact
    component={HomePage}
  />
];

export default Routing;
