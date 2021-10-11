import { Route, Redirect } from "react-router-dom";

// redirects to profile page.

export const PublicRoute = ({ authed, ...props }) =>
  !authed ? <Route {...props} /> : <Redirect to="/profile" />;
