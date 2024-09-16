import Button from "../../../components/button";
import { NavLink } from "react-router-dom";

const ProfileButtons = ({ profile, user }) =>
  {
    return (
      (profile.id === user.id || user.role === "TEACHER") && (
        <div className="profile-buttons">
          <NavLink to={`/profile/${user.id}/edit`}>
            <Button text="Edit" type="button" classes="edit-button" />
          </NavLink>
        </div>
      )
    );
};

export default ProfileButtons;
