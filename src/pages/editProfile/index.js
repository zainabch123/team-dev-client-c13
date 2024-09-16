import useProfile from "../../hooks/useProfile";
import useAuth from "../../hooks/useAuth";
import Form from "../../components/form";
import ProfileCardHeader from "../profile/profile-sections/profile-card-header"
import BasicInfoSection from "../profile/profile-sections/basic-info-section"
import TrainingInfoSection from "../profile/profile-sections/training-info-section";
import ContactInfoSection from "../profile/profile-sections/contact-info-section";
import BioInfoSection from "../profile/profile-sections/bio-info-section";
import ProfileButtons from "../profile/profile-sections/profile-buttons";
import "../profile/profile.css";


const EditProfile = () => {
    const {profile} = useProfile();
    const { user } = useAuth();

    console.log("profile", profile)


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
        <BasicInfoSection profile={profile} user={user} editable={true} />
        <TrainingInfoSection profile={profile} user={user} editable={true} />
        <ContactInfoSection profile={profile} user={user} editable={true} />
        <BioInfoSection profile={profile} user={user} editable={true} />
        {/* <ProfileButtons profile={profile} user={user} /> */}
      </Form>
    </div>
  </main>
);
}

export default EditProfile;
