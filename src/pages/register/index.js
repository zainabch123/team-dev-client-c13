import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";
import CredentialsCard from "../../components/credentials";
import "./register.css";

const Register = () => {
	const { onLogin } = useAuth();
	const [formData, setFormData] = useState({ email: "", password: "" });

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="bg-blue register">
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
					</form>
					<Button
						text="Sign up"
						onClick={() => onLogin(formData.email, formData.password)}
						classes="green width-full"
					/>
				</div>
			</CredentialsCard>
		</div>
	);
};

export default Register;
