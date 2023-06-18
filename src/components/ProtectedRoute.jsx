import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRoute({
  isAllowed,
  redirectPath = "/",
  children,
}) {
  if (!isAllowed) {
    window.alert("You are not allowed to access this page");
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  children: PropTypes.element,
};
