import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { Products } from "../pages/Products";
import { CartPage } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import Order from "../pages/Order";

import PrivateRoute from "../components/Routes/PrivateRoute";
import PublicRoute from "../components/Routes/PublicRoute";
import { Header } from "../components/Header";

import { isAuthenticated } from "../redux/slices/auth/selectors";

export const AppRouter = () => {
  const isAuth = useSelector(isAuthenticated);
  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute
          exact
          path="/login"
          isAuthenticated={isAuth}
          component={Login}
        />
        <PrivateRoute
          exact
          path="/cart"
          isAuthenticated={isAuth}
          component={CartPage}
        />
        <PrivateRoute
          exact
          path="/products"
          isAuthenticated={isAuth}
          component={Products}
        />
        <PrivateRoute
          exact
          path="/"
          isAuthenticated={isAuth}
          component={Home}
        />
        <PrivateRoute
          exact
          path="/order"
          isAuthenticated={isAuth}
          component={Order}
        />
      </Switch>
    </Router>
  );
};
