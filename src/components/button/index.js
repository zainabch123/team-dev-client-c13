const Button = ({
  text,
  onClick,
  type = "button",
  classes = "",
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes} ${disabled ? "button-disabled" : ""}`}
      disabled={disabled}
    >
      {isLoading ? <span className="spinner"></span> : text}
    </button>
  );
};

export default Button;
