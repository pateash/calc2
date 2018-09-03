/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import Calc from './containers/Calc';
import CounterPage from './containers/CounterPage';
import HomePage from './containers/HomePage';

// TODO:4 we will create many versions for different users(ex- programmer, banker)

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />

      <Route path={routes.CALC} component={Calc} />
    </Switch>
  </App>
);
