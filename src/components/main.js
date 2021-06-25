import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import ArLocation from './arlocation';
import MapLocation from './maplocation';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/arlocation" component={ArLocation} />
    <Route path="/maplocation" component={MapLocation} />
  </Switch>
)

export default Main;