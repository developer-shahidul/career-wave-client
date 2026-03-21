import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log("data loaded", user);

  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }
  if (!user) {
    return (
      <Navigate to={"/logIn"} state={location.pathname} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
