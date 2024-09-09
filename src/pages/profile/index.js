import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../../service/apiClient";
import "./profile.css";
import ProfileCircle from "../../components/profileCircle";
import ProfileIcon from "../../assets/icons/profileIcon";

const Profile = () => {
  // const { user } = useAuth();
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUser(id);
        setUserProfile(profileData);
      } catch (e) {
        // console.error("Error fetching user profile:", e);
        setError(e.message || "Failed to load user profile");
        setUserProfile(undefined);
      }
    };

    fetchUserProfile();
  }, [id]);

  console.log("selected User", userProfile);

  if (userProfile === null) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const userInitials = `${userProfile.firstName[0]}${userProfile.lastName[0]}`;

  return (
    <main className="profile">
      <div className="profile-titleblock">
        <h2 className="h2">Profile</h2>
      </div>
      <div className="profile-card">
        <div className="profile-card-header">
          <ProfileCircle initials={userInitials} />
          <h3>
            {userProfile.firstName} {userProfile.lastName}
          </h3>
          <p>Software Developer</p>
        </div>
        <form className="profile-form">
          <div className="basic-info">
            <h3>Basic info</h3>
            <div className="welcome-form-profileimg">
              <p className="text-blue1">Photo</p>
              <div className="welcome-form-profileimg-input">
                <ProfileIcon colour="#28C846" background="#64DC78" />
                <p className="text-blue1">Add headshot</p>
              </div>
              <p className="welcome-form-profileimg-error">
                Please upload a valid image file
              </p>
            </div>
            <label>
              First Name*
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userProfile.firstName}
                readOnly
              ></input>
            </label>
            <label>
              Last Name*
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userProfile.lastName}
                readOnly
              ></input>
            </label>
            <label>
              Username*
              <input type="text" id="username" name="username" readOnly></input>
            </label>
            <label>
              GitHub Username*
              <input
                type="text"
                id="github-url"
                name="github-url"
                value={userProfile.githubUrl}
                readOnly
              ></input>
            </label>
          </div>
          <div className="training-info">
            <h3>Training info</h3>
            <label>
              Role*
              <input
                type="text"
                id="role"
                name="role"
                value={userProfile.role}
                readOnly
              ></input>
            </label>
            <label>
              Specialism*
              <input
                type="text"
                id="specialism"
                name="speacialism"
                value={"Software Developer"}
                readOnly
              ></input>
            </label>
            <label>
              Chort*
              <input
                type="text"
                id="cohort"
                name="cohort"
                value={"Cohort " + userProfile.cohort_id}
                readOnly
              ></input>
            </label>
            <label>
              Start Date*
              <input
                type="text"
                id="start-date"
                name="start-date"
                value={"January 2023"}
                readOnly
              ></input>
            </label>
            <label>
              End Date*
              <input
                type="text"
                id="end-date"
                name="end-date"
                value={"June 2023"}
                readOnly
              ></input>
            </label>
          </div>
          <div className="contact-info">
            <h3>Contact info</h3>
            <label>
              Email*
              <input
                type="email"
                id="email"
                name="email"
                value={userProfile.email}
                readOnly
              ></input>
            </label>
            <label>
              Mobile*
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value="079 111 111 111"
                readOnly
              ></input>
            </label>
            <label>
              Password*
              <input
                type="text"
                id="password"
                name="password"
                value={"Needs to be set"}
                readOnly
              ></input>
            </label>
          </div>
          <div className="bio-info">
            <h3>Bio</h3>
            <label>
              Bio
              <textarea
                type="text"
                id="bio"
                name="bio"
                value={userProfile.biography}
                maxLength={"300"}
                readOnly
              />
            </label>
          </div>
          <div className="profile-submit">
            <button className="cancel-button" type="submit">
              Cancel
            </button>
            <button className="submit-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Profile;
