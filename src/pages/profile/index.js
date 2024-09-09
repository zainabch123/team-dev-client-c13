import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../../service/apiClient";
import "./profile.css";

const Profile = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    getUser(id).then(setUserProfile);
  }, [id]);


  console.log("id", id);
  console.log("selected User", userProfile);

  // console.log("user from profile", user);

  return <h1>Welcome to the Profile page!</h1>;
};

export default Profile;
