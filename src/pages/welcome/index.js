import Steps from "../../components/steps";
import "./welcome.css";

const Welcome = () => {
	return (
		<div className="welcome bg-lightgrey">
			<h1 className="h2">Welcome to Cohort Manager</h1>
			<p className="text-lightblue">Create your profile to get started</p>
			<div className="">
				<h2>Create profile</h2>
				<p className="text-lightblue">
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
