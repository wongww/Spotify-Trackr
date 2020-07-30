import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.js';
import History from './History.js';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/history' component={History}></Route>
    </Switch>
  );
}

export default Main;