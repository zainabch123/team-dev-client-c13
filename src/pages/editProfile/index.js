import useProfile from "../../hooks/useProfile";
import useAuth from "../../hooks/useAuth";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import Form from "../../components/form";
import ProfileCardHeader from "../profile/profile-sections/profile-card-header";
import BasicInfoSection from "../profile/profile-sections/basic-info-section";
import TrainingInfoSection from "../profile/profile-sections/training-info-section";
import ContactInfoSection from "../profile/profile-sections/contact-info-section";
import BioInfoSection from "../profile/profile-sections/bio-info-section";
import ProfileButtons from "../profile/profile-sections/profile-buttons";
import { createProfile } from "../../service/apiClient";
import "../profile/profile.css";

const EditProfile = () => {
  const { profile } = useProfile();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // console.log("profile", profile);

  const [updatedProfile, setUpdatedProfile] = useState({
    userId: profile.id,
    cohort_id: profile.cohort_id,
    role: profile.role,
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    bio: profile.bio,
    githubUrl: profile.githubUrl,
    profilePicture: profile.profilePicture,
    username: profile.username,
    mobile: profile.mobile,
    specialism: profile.specialism,
    startDate: profile.startDate,
    endDate: profile.endDate,
  });

  const handleSave = async () => {
    setIsLoading(true)
    try {
      await createProfile(
        updatedProfile.userId,
        updatedProfile.cohort_id,
        updatedProfile.role,
        updatedProfile.firstName,
        updatedProfile.lastName,
        updatedProfile.username,
        updatedProfile.bio,
        updatedProfile.githubUrl,
        updatedProfile.profilePicture,
        updatedProfile.mobile,
        updatedProfile.specialism
      );
      setIsLoading(false)
      navigate(`/profile/${profile.id}`);
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;

    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  console.log("updated profile", updatedProfile);

  return (
    <>
      {isLoading && (
        <div className="overlay">
          <div className="spinner"></div>
          <div className="loading-text">Loading, please wait...</div>
        </div>
      )}
      <main className={`profile`}>
        <div className="profile-titleblock">
          <h2 className="h2">Edit Profile</h2>
        </div>
        <div className="profile-card">
          <ProfileCardHeader
            firstName={profile.firstName}
            lastName={profile.lastName}
          />
          <Form className="profile-form">
            <BasicInfoSection
              profile={updatedProfile}
              user={user}
              editable={true}
              handleInput={handleInput}
            />
            <TrainingInfoSection
              profile={updatedProfile}
              user={user}
              handleInput={handleInput}
              editable={true}
            />
            <ContactInfoSection
              profile={updatedProfile}
              user={user}
              editable={true}
              handleInput={handleInput}
            />
            <BioInfoSection
              profile={updatedProfile}
              user={user}
              editable={true}
              handleInput={handleInput}
            />
            <ProfileButtons
              profile={profile}
              user={user}
              buttonToDisplay={"Save"}
              handleSave={handleSave}
            />
          </Form>
        </div>
      </main>
    </>
  );
};

export default EditProfile;
