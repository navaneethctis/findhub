import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GitHubProvider from './contexts/github/GitHubProvider';
import AlertProvider from './contexts/alert/AlertProvider';

import AboutPage from './components/page/AboutPage';
import HomePage from './components/page/HomePage';
import NavigationBar from './components/layout/NavigationBar';
import NotFoundPage from './components/page/NotFoundPage';
import UserPage from './components/page/UserPage';

const App = () => (
  <GitHubProvider>
    <NavigationBar />
    <AlertProvider>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/users/:login' component={UserPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AlertProvider>
  </GitHubProvider>
);

export default App;
