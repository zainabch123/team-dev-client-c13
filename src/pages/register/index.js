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
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function validatePassword() {
    const specialChars = /^(?=.*[!@#$%^&*])/;
    const numbers = /^(?=.*[0-9])/;
    const forbiddenChars = /^(?=.*[(){}[\]|`¬¦"'<>:;|~_\-+=,])/;
    let enteredPass = formData.password;
    setErrorMsg("");
    if (forbiddenChars.test(enteredPass)) {
      setErrorMsg("Password contains invalid characters!");
      return false;
    } else if (enteredPass.length < 8) {
      setErrorMsg("Password must be at least 8 characters long!");
      return false;
    } else if (
      enteredPass.toLowerCase() === enteredPass ||
      enteredPass.toUpperCase() === enteredPass
    ) {
      setErrorMsg(
        "Password must contain at least 1 uppercase and 1 lowercase letter"
      );
      return false;
    } else if (!numbers.test(enteredPass)) {
      setErrorMsg("Password must contain at least 1 number");
      return false;
    } else if (!specialChars.test(enteredPass)) {
      setErrorMsg("Password must contain at least 1 special character");
      return false;
    } else {
      return true;
    }
  }

  function submitRegisterUser() {
    if (validatePassword()) {
      onRegister(formData.email, formData.password);
    }
  }

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
              onChange={onFormChange}
              type="email"
              name="email"
              label={"Email *"}
            />
            <TextInput
              value={formData.password}
              onChange={onFormChange}
              name="password"
              label={"Password *"}
              type={"password"}
            />
            <div>{errorMsg}</div>
          </form>
          <Button
            text="Sign up"
            onClick={() => {
              submitRegisterUser();
            }}
            classes="green width-full"
          />
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Register;
