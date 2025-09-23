import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ Component }) => {
  const isLoggedIn = useSelector((store) => store.exam.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
      return
    } 
  }, [isLoggedIn])

  return <Component />;
};

export default ProtectedRoutes;
