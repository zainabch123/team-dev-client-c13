import useAuth from "../../hooks/useAuth";
import "./profile.css";

const Profile = () => {
  const { user } = useAuth();
  
  // console.log("user from profile", user);
  
  return <h1>Welcome to the Profile page!</h1>;
};

export default Profile;
