import { createContext, useState } from "react";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    id: "",
    cohortId: "",
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    githubUrl: "",
    profilePicture: "",
    role: "",
    username: "",
    mobile: "",
    specialism: "",
    startDate: "",
    endDate: "",
  });

   const value = {
     profile,
     setProfile
   };

  return (
    <ProfileContext.Provider value={ value}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
