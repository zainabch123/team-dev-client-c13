import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../../service/apiClient";
import "./profile.css";

const Profile = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUser(9);
        setUserProfile(profileData);
      } catch (e) {
        console.error("Error fetching user profile:", e);
        setError(e.message || "Failed to load user profile");
        setUserProfile(undefined);
      }
    };

    fetchUserProfile();
  }, [id]);

  console.log("selected User", userProfile);
  console.log("set error", error);

  if (userProfile === null) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <h1>Welcome to the Profile page!</h1>;
};

export default Profile;
