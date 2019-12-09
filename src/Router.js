import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserContainer from './components/UserContainer';
import ReposContainer from './components/ReposContainer';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/users" component={UserContainer}/>
      <Route exact path="/repos" component={ReposContainer}/>
    </Switch>
  </BrowserRouter>
);

export default Router;