import TextInput from "../../../components/form/textInput";

const ContactInfoSection = ({ profile, user, editable, handleInput }) => {
  return (
    <div className="contact-info">
      <h3>Contact Info</h3>
      <div className="contact profile-form-inputs">
        <TextInput
          label="Email*"
          type="email"
          name="email"
          value={profile.email}
          readOnly={true}
        />
        <TextInput
          label="Mobile*"
          type="text"
          name="mobile"
          value={profile.mobile}
          readOnly={!editable}
          onChange={handleInput}
        />
        <TextInput
          label="Password*"
          type="password"
          name="password"
          value="Needs to be set"
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default ContactInfoSection;