const TextInput = ({ value, onChange, name, label, type = "text" }) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} value={value} onChange={onChange} />
		</div>
	);
};

export default TextInput;
