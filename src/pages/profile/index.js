import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../../service/apiClient";
import "./profile.css";
import ProfileCircle from "../../components/profileCircle";
import LockIcon from "../../assets/icons/lockIcon";
import Form from "../../components/form";
import TextInput from "../../components/form/textInput";
import Button from "../../components/button";

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
          <div className="profile profile-icon">
            <p>{`${userProfile.firstName[0]}${userProfile.lastName[0]}`}</p>
          </div>
          <div className="profile-header-text">
            <h3>
              {userProfile.firstName} {userProfile.lastName}
            </h3>
            <p>Software Developer</p>
          </div>
        </div>
        <Form className="profile-form">
          <div className="basic-info">
            <h3>Basic info</h3>
            <div className="basic profile-form-inputs">
              <div className="profileimg-section">
                <p className="profileimg-text">Photo</p>
                <div className="profileimg profile-icon">
                  <p>{`${userProfile.firstName[0]}${userProfile.lastName[0]}`}</p>
                </div>
                <div className="profileimg-input">
                  <p className="profileimg-input-text">Add headshot</p>
                </div>
              </div>
              <TextInput
                label="First Name*"
                type="text"
                name="firstName"
                value={userProfile.firstName}
                readOnly
              />

              <TextInput
                label="Last Name*"
                type="text"
                name="lastName"
                value={userProfile.lastName}
                readOnly
              />

              <TextInput
                label="Username*"
                type="text"
                id="username"
                name="username"
                value="insert username here"
                readOnly
              />

              <TextInput
                label="GitHub Username*"
                type="text"
                name="github-url"
                value={userProfile.githubUrl}
                readOnly
              />
            </div>
          </div>
          <div className="training-info">
            <h3>Training info</h3>
            <div className="training profile-form-inputs">
              <TextInput
                label="Role*"
                type="text"
                name="role"
                value={userProfile.role}
                readOnly
                disabled={true}
                icon={<LockIcon />}
              />

              <TextInput
                label="Specialism*"
                type="text"
                name="speacialism"
                value={"Software Developer"}
                readOnly
                disabled
                icon={<LockIcon />}
              />

              <TextInput
                label="Cohort*"
                type="text"
                name="cohort"
                value={"Cohort " + userProfile.cohort_id}
                readOnly
                disabled
                icon={<LockIcon />}
              />

              <TextInput
                label="Start Date*"
                type="text"
                name="start-date"
                value={"January 2023"}
                readOnly
                disabled
                icon={<LockIcon />}
              />

              <TextInput
                label="End Date*"
                type="text"
                name="end-date"
                value={"June 2023"}
                readOnly
                disabled
                icon={<LockIcon />}
              />
            </div>
          </div>
          <div className="contact-info">
            <h3>Contact info</h3>
            <div className="contact profile-form-inputs">
              <TextInput
                label="Email*"
                type="email"
                name="email"
                value={userProfile.email}
                readOnly
              />

              <TextInput
                label="Mobile*"
                type="tel"
                name="mobile"
                value="079 111 111 111"
                readOnly
              />

              <TextInput
                label="Password*"
                type="password"
                name="password"
                value="Needs to be set"
                readOnly
              />
            </div>
          </div>
          <div className="bio-info">
            <h3>Bio</h3>
            <div className="bio profile-form-inputs">
              <label>
                Bio
                <textarea
                  label="Bio"
                  name="bio"
                  value={userProfile.biography}
                  maxLength={"300"}
                  readOnly
                />
              </label>
            </div>
          </div>
          <div className="profile-buttons">
            <Button text="Edit" type="button" classes="edit-button" />
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Profile;
