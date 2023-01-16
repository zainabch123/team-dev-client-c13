import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";
import FullLogo from "../../assets/fullLogo";
import "./login.css";

const Login = () => {
	const { onLogin } = useAuth();
	const [formData, setFormData] = useState({ email: "", password: "" });

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="login mx-auto">
			<div className="login-logo">
				<FullLogo />
			</div>
			<h1 className="h3">Login</h1>
			<div>
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
			</div>
			<Button
				text="Log in"
				onClick={() => onLogin(formData.email, formData.password)}
				classes="bg-green width-full text-blue"
			/>
			<p>Need an account?</p>
			<Button text="Sign up" classes="bg-offwhite text-lightblue"></Button>
		</div>
	);
};

export default Login;
