import "./steps.css";

const Steps = ({ active = 1 }) => {
	return (
		<ul className="steps">
			{[...Array(4)].map((step, i) => (
				<li className={`steps-number ${active === i + 1 && "active"}`} key={i}>
					<span className="text-white ">{i + 1}</span>
				</li>
			))}
		</ul>
	);
};

export default Steps;
