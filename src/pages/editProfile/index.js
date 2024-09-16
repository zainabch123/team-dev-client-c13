import useProfile from "../../hooks/useProfile";
import useAuth from "../../hooks/useAuth";
import Form from "../../components/form";
import ProfileCardHeader from "../profile/profile-sections/profile-card-header";
import BasicInfoSection from "../profile/profile-sections/basic-info-section";
import TrainingInfoSection from "../profile/profile-sections/training-info-section";
import ContactInfoSection from "../profile/profile-sections/contact-info-section";
import BioInfoSection from "../profile/profile-sections/bio-info-section";
import ProfileButtons from "../profile/profile-sections/profile-buttons";
import "../profile/profile.css";
import { useState } from "react";

const EditProfile = () => {
  const { profile } = useProfile();
  const { user } = useAuth();

//   console.log("profile", profile);

  const [updatedProfile, setUpdatedProfile] = useState({
    cohort_id: profile.cohort_id,
    role: profile.role,
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    biography: profile.biography,
    githubUrl: profile.githubUrl,
    profilePicture: profile.profilePicture,
    username: profile.username,
    mobile: profile.mobile,
    specialism: profile.specialism,
    startDate: profile.startDate,
    endDate: profile.endDate
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  console.log("updated profile", updatedProfile)

  return (
    <main className="profile">
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
            editable={true}
            handleInput={handleInput}
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
            handleInput={handleInput}
          />
        </Form>
      </div>
    </main>
  );
};

export default EditProfile;
