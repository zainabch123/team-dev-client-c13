import TextInput from "../../../components/form/textInput";

const ContactInfoSection = ({ profile, user, editable }) => {
    return (
      <div className="contact-info">
        <h3>Contact Info</h3>
        <div className="contact profile-form-inputs">
          <TextInput
            label="Email*"
            type="email"
            name="email"
            value={profile.email}
            disabled={!editable}
          />
          <TextInput
            label="Mobile*"
            type="tel"
            name="mobile"
            value={profile.mobile}
            disabled={!editable}
          />
          <TextInput
            label="Password*"
            type="password"
            name="password"
            value="Needs to be set"
            disabled={!editable}
          />
        </div>
      </div>
    );
};

export default ContactInfoSection;