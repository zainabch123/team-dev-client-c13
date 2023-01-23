import Steps from "../../components/steps";
import "./welcome.css";

const Welcome = () => {
	return (
		<div className="welcome bg-lightgrey">
			<div className="welcome-titleblock">
				<h1 className="h2">Welcome to Cohort Manager</h1>
				<p className="text-blue1">Create your profile to get started</p>
			</div>
			<div className="">
				<h2>Create profile</h2>
				<p className="text-blue1">
					Tell us about yourself to create your profile
				</p>
			</div>
			<div className="">
				<Steps />
			</div>
		</div>
	);
};

export default Welcome;
