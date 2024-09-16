import Button from "../../../components/button";
import { NavLink } from "react-router-dom";

const ProfileButtons = ({ profile, user, buttonToDisplay }) => {
  const isDisabled = profile.id === user.id || user.role === "TEACHER";

  return (
    <div className="profile-buttons">
      {buttonToDisplay === "Edit" && (
        <NavLink to={`/profile/${user.id}/edit`}>
          <Button
            text="Edit"
            type="button"
            classes="edit-button"
            disabled={!isDisabled}
          />
        </NavLink>
      )}

      {buttonToDisplay === "Save" && (
        <Button
          text="Save"
          type="submit"
          classes="save-button"
        />
      )}
    </div>
  );
};

export default ProfileButtons;
