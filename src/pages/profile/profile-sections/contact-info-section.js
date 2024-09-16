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
          readOnly={!editable}
          onChange={handleInput}
        />
        <TextInput
          label="Mobile*"
          type="tel"
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
          readOnly={!editable}
        />
      </div>
    </div>
  );
};

export default ContactInfoSection;