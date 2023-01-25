import TickIcon from "../../assets/tickIcon";
import "./toast.css";

const Toast = ({ text = "", linkText = "" }) => {
	return (
		<div className="toast bg-blue">
			<TickIcon height={40} width={40} />
			<p className="text-white text-large">{text}</p>
			<a href="#nogo" className="text-green text-large">
				Edit
			</a>
		</div>
	);
};

export default Toast;
