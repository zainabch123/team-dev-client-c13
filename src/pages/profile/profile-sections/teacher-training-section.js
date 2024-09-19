import TextInput from "../../../components/form/textInput";

const TeacherTrainingInfo = ({ profile, handleInput, editable, user }) => {
  return (
    <div className="training-info">
      <h3>Professional info</h3>
      <div className="training profile-form-inputs">
        <TextInput
          label="Role*"
          type="text"
          name="role"
          value={
            profile.role
              ? `${profile.role[0].toUpperCase()}${profile.role
                  .slice(1)
                  .toLowerCase()}`
              : ""
          }
          readOnly={!editable}
          onChange={handleInput}
        />
        <TextInput
          label="Specialism*"
          type="text"
          name="specialism"
          value={profile.specialism || ""}
          readOnly={!editable}
          onChange={handleInput}
        />
        <TextInput
          label="Job Title*"
          type="text"
          name="job-title"
          value="Software Development Instructor"
          readOnly={true}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default TeacherTrainingInfo;
