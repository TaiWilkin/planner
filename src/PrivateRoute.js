import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useSelector(state => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
