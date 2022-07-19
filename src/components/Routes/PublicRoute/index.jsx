import { Route, Redirect } from "react-router-dom";

function PublicRoute({ isAuthenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to="/products" /> : <Component {...props} />
      }
    />
  );
}

export default PublicRoute;
