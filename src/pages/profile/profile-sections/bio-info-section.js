const BioInfoSection = ({ profile, user, editable, handleInput }) => {
  return (
    <div className="bio-info">
      <h3>Bio</h3>
      <div className="bio profile-form-inputs">
        <label>
          Bio
          <textarea
            label="Bio"
            name="bio"
            value={profile.bio}
            maxLength={"300"}
            readOnly={!editable}
            onChange={handleInput}
          />
          <div className="character-counter">
            {profile.bio ? `${profile.bio.length}/300` : "0/300"}
          </div>
        </label>
      </div>
    </div>
  );
};

export default BioInfoSection;
