const Button = ({ text, onClick, type = "button", classes }) => {
	return (
		<button type={type} onClick={onClick} className={classes}>
			{text}
		</button>
	);
};

export default Button;
