import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserPage } from './pages/UserPage';
import { AuthPage } from './pages/AuthPage';
import { AddDataPage } from './pages/AddDataPage';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/user">
          <UserPage />
        </Route>
        {/* <Route path="/add-data"> */}
        {/* <AddDataPage /> */}

        {/* </Route> */}
        <Redirect to="/user" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
