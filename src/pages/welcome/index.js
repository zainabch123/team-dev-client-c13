import Steps from "../../components/steps";
import Card from "../../components/card";
import ProfileIcon from "../../assets/icons/profileIcon";
import TextInput from "../../components/form/textInput";
import Button from "../../components/button";
import Toast from "../../components/toast";
import "./welcome.css";

const Welcome = () => {
	return (
		<main className="welcome">
			<div className="welcome-titleblock">
				<h1 className="h2">Welcome to Cohort Manager</h1>
				<p className="text-blue1">Create your profile to get started</p>
			</div>
			<Card>
				<div className="welcome-cardheader">
					<h2>Create profile</h2>
					<p className="text-blue1">
						Tell us about yourself to create your profile
					</p>
				</div>
				<div className="welcome-steps">
					<Steps />
				</div>
				<div className="welcome-formheader">
					<h3>Basic info</h3>
				</div>
				<form className="welcome-form">
					<div className="welcome-form-profileimg">
						<p className="text-blue1">Photo</p>
						<div className="welcome-form-profileimg-input">
							<ProfileIcon colour="#28C846" background="#64DC78" />
							<p className="text-blue1">Add headshot</p>
						</div>
						<p className="welcome-form-profileimg-error">
							Please upload a valid image file
						</p>
					</div>
					<div className="welcome-form-inputs">
						<TextInput value="" name="firstName" label={"First name *"} />
						<TextInput value="" name="lastName" label={"Last name *"} />
						<TextInput value="" name="username" label={"Username *"} />
						<TextInput
							value=""
							name="githubUsername"
							label={"Github Username *"}
						/>
						<p className="text-blue1">*Required</p>
					</div>
					<div className="welcome-form-buttons">
						<Button text="Back" classes="offwhite visibility-none" />
						<Button text="Next" classes="blue" />
					</div>
				</form>
			</Card>
			<div className="welcome-form-popup-wrapper">
				<Card>
					<div className="welcome-form-popup">
						<h4>Upload photo</h4>
						<p>Choose a file to upload for your headshot.</p>
						<div className="welcome-form-popup-buttons">
							<Button text="Cancel" classes="offwhite" />
							<Button text="Choose file" classes="blue" />
						</div>
					</div>
				</Card>
			</div>
			<Card>
				<div className="welcome-cardheader">
					<h2>Create profile</h2>
					<p className="text-blue1">
						Tell us about yourself to create your profile
					</p>
				</div>
				<div className="welcome-steps">
					<Steps active={2} />
				</div>
				<div className="welcome-formheader">
					<h3>Contact info</h3>
				</div>
				<form className="welcome-form">
					<div className="welcome-form-inputs">
						<TextInput value="" name="email" label={"Email *"} />
						<TextInput value="" name="mobile" label={"Mobile *"} />
						<TextInput name="password" label={"Password *"} type={"password"} />
					</div>
					<div className="welcome-form-buttons">
						<Button text="Back" classes="offwhite" />
						<Button text="Next" classes="blue" />
					</div>
				</form>
			</Card>
			<Toast text="Profile created" linkText="Edit" />
		</main>
	);
};

export default Welcome;
