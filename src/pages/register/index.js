import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";
import CredentialsCard from "../../components/credentials";
import "./register.css";

const Register = () => {
  const { onRegister } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const specialChars = /^(?=.*[!@#$%^&*])/;
  // This doesn't work and could be implemented later
  // const forbiddenChars = /^(?=.*[(){}[]|`¬¦!"£$%^&*"<>:;#~_-+=,@])/;
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-blue register credentialpage">
      <CredentialsCard
        title="Register"
        socialLinksTitle="Or sign up with"
        altButtonTitle="Already a user?"
        altButtonLink="/login"
        altButtonText="Log in"
      >
        <div className="register-form">
          <form>
            <TextInput
              value={formData.email}
              onChange={onChange}
              type="email"
              name="email"
              label={"Email *"}
            />
            <TextInput
              value={formData.password}
              onChange={onChange}
              name="password"
              label={"Password *"}
              type={"password"}
            />
            <div>{errorMsg}</div>
          </form>
          <Button
            text="Sign up"
            onClick={() => {
              let enteredPass = formData.password;
              setErrorMsg("");
              if (enteredPass.length < 8) {
                setErrorMsg("Password must be at least 8 characters long!");
              } else if (
                enteredPass.toLowerCase() === enteredPass ||
                enteredPass.toUpperCase() === enteredPass
              ) {
                setErrorMsg(
                  "Password must contain at least 1 uppercase and 1 lowercase letter"
                );
              } else if (!specialChars.test(enteredPass)) {
                setErrorMsg(
                  "Password must contain at least 1 special character"
                );
              }
              // This does not work and should be fixed later
              // if (forbiddenChars.test(enteredPass)) {
              //   setErrorMsg("Password contains forbidden characters!");
              // } else
              else {
                onRegister(formData.email, formData.password);
              }
            }}
            classes="green width-full"
          />
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Register;
