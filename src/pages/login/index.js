import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";
import CredentialsCard from "../../components/credentials";
import "./login.css";

const Login = () => {
  const { onLogin } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const isValidEmail = (emailAddress) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailAddress);
  };

  const isValidPassword = (password) => {
    // Example validation: at least 8 characters, 1 uppercase, 1 number, 1 special character
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = isValidEmail(formData.email)
      ? ""
      : "Please enter a valid email address.";
    const passwordError = isValidPassword(formData.password)
      ? ""
      : "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.";

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    // If no errors, proceed with login
    onLogin(formData.email, formData.password);
  };

  return (
    <div className="bg-blue login credentialpage">
      <CredentialsCard
        title="Login"
        socialLinksTitle="Or log in with"
        altButtonTitle="Need an account?"
        altButtonLink="/register"
        altButtonText="Sign up"
      >
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <TextInput
              value={formData.email}
              onChange={onChange}
              name="email"
              label={"Email *"}
              error={errors.email}
            />
            <TextInput
              value={formData.password}
              onChange={onChange}
              name="password"
              label={"Password *"}
              type={"password"}
              error={errors.password}
            />
            <Button
              text="Log in"
              onClick={() => onLogin(formData.email, formData.password)}
              classes="green width-full"
            />
          </form>
          {/* <Button
            text="Log in"
            onClick={() => onLogin(formData.email, formData.password)}
            classes="green width-full"
          /> */}
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Login;
