import { Navigate, Outlet } from "react-router-dom";

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
