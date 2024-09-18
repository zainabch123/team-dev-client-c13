import TextInput from "../../../components/form/textInput";
import LockIcon from "../../../assets/icons/lockIcon";

const TrainingInfoSection = ({ profile, user, handleInput, editable }) => {
  const isTeacher = user.role === "TEACHER";
  console.log("isTeacher", isTeacher);

  return (
    <>
      {user.role === "STUDENT" && (
        <div className="training-info">
          <h3>Professional info</h3>
          <div className="training profile-form-inputs">
            <TextInput
              label="Role*"
              type="text"
              name="role"
              value={`${profile.role[0].toUpperCase()}${profile.role
                .slice(1)
                .toLowerCase()}`}
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Specialism*"
              type="text"
              name="specialism"
              value={profile.specialism}
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Cohort*"
              type="text"
              name="cohort"
              value={`Cohort ${profile.cohort_id}`}
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Start Date*"
              type="text"
              name="start-date"
              value={new Date(profile.startDate).toLocaleDateString()}
              readOnly={true}
              icon={<LockIcon />}
            />

            <TextInput
              label="End Date*"
              type="text"
              name="end-date"
              value={new Date(profile.endDate).toLocaleDateString()}
              readOnly={true}
              icon={<LockIcon />}
            />
          </div>
        </div>
      )}

      {user.role === "TEACHER" && (
        <div className="training-info">
          <h3>Professional info</h3>
          <div className="training profile-form-inputs">
            <TextInput
              label="Role*"
              type="text"
              name="role"
              value={
                profile && profile.role
                  ? profile.role[0].toUpperCase() +
                    profile.role.slice(1).toLowerCase()
                  : ""
              }
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Specialism*"
              type="text"
              name="specialism"
              value={profile.specialism}
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />

            <TextInput
              label="Job Title*"
              type="text"
              name="job-title"
              value="Software Development Instructor"
              readOnly={!isTeacher}
              icon={<LockIcon />}
              onChange={handleInput}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingInfoSection;
