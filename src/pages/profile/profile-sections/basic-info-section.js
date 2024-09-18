import TextInput from "../../../components/form/textInput";
import { getInitials } from "../../../service/getInitials";

const BasicInfoSection = ({ profile, user, editable, handleInput }) => {
  return (
    <div className="basic-info">
      <h3>Basic Info</h3>
      <div className="basic profile-form-inputs">
        <div className="profileimg-section">
          <p className="profileimg-text">Photo</p>
          <div className="profileimg profile-icon">
            <p>{getInitials(profile.firstName, profile.lastName)}</p>
          </div>
          <div className="profileimg-input">
            <p className="profileimg-input-text">Add headshot</p>
          </div>
        </div>
        <TextInput
          label="First Name*"
          type="text"
          name="firstName"
          value={profile.firstName}
          readOnly={!editable}
          onChange={handleInput}
        />
        <TextInput
          label="Last Name*"
          type="text"
          name="lastName"
          value={profile.lastName}
          readOnly={!editable}
          onChange={handleInput}
        />
        <TextInput
          label="Username*"
          type="text"
          name="username"
          value={profile.username}
          readOnly={!editable}
          onChange={handleInput}
        />
        <TextInput
          label="GitHub URL*"
          type="text"
          name="githubUrl"
          value={profile.githubUrl}
          readOnly={!editable}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default BasicInfoSection;
