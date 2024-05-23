import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const renderRoute = (props) => {
    if (auth.authenticate()) {
      return <Component {...props} />;
    }

    return <Redirect to="/" />;
  };

  return <Route {...rest} render={(props) => renderRoute(props)} />;
};
