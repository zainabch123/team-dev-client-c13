import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";

const ProfileButtons = ({ profile, user, buttonToDisplay, handleSave }) => {
  const isDisabled = profile.id === user.id || user.role === "TEACHER";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${profile.id}/edit`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="profile-buttons">
      {buttonToDisplay === "Edit" && (
        <Button
          text="Edit"
          type="button"
          classes="edit-button"
          disabled={!isDisabled}
          onClick={handleClick}
        />
      )}

      {buttonToDisplay === "Save" && (
        <Button
          text="Save"
          type="button"
          classes="save-button"
          onClick={handleSave}
        />
      )}
    </div>
  );
};

export default ProfileButtons;
