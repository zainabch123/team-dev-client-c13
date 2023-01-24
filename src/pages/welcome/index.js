import Steps from "../../components/steps";
import Card from "../../components/card";
import ProfileIcon from "../../assets/icons/profileIcon";
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
				</form>
			</Card>
		</main>
	);
};

export default Welcome;
