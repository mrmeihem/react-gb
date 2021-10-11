import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ authed, ...props }) =>
<<<<<<< HEAD
  authed ? <Route {...props} /> : <Redirect to="/" />;
=======
  authed ? <Route {...props} /> : <Redirect to="/login" />;
>>>>>>> WIP
