import { useNavigate, useLocation, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./profile.css";

const Profile = () => {
  const { user } = useAuth();
  const location = useLocation();

  console.log("user from profile", user);
  console.log("profile location", location);
  return <h1>Welcome to the Profile page!</h1>;
};

export default Profile;
