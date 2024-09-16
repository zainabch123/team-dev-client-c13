import useProfile from "../../hooks/useProfile";

const EditProfile = () => {
    const {profile} = useProfile();
return (
    <h1>Here is {profile.firstName}</h1>
)
}

export default EditProfile;
