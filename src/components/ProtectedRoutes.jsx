import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ Component }) => {
  const isLoggedIn = useSelector((store) => store.exam.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

export default ProtectedRoutes;
