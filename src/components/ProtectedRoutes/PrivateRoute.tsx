import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const userToken = localStorage.getItem("userAccessToken");
  if (!userToken) {
    return <Navigate to={"/dashboard"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
