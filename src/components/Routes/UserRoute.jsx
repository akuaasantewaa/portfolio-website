import { useSelector } from "react-redux";

import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return user && user.role === "user" ? (
    <div>{children}</div>
  ) : (
    <LoadingToRedirect to="/login" message="You are not logged in." />
  );
};

export default UserRoute;
