// Function to validate email and return specific error messages

export const validateEmail = (email) => {
  if (!email) {
    return "Email is required.";
  }

  if (!email.includes("@")) {
    return "Email must contain '@'";
  }

  if (!email.includes(".")) {
    return "Email must contain a '.'";
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  return ""; // Return empty string if email is valid
};

// Function to validate password with conditions
export const validatePassword = (password) => {
  const specialChars = /^(?=.*[!@#$_~\-%^&*])/;
  const numbers = /^(?=.*[0-9])/;
  const forbiddenChars = /^(?=.*[(){}[\]|`¬¦"'<>:;|+=,])/;
  const passwordErrors = [];

  if (forbiddenChars.test(password)) {
    passwordErrors.push("Password contains invalid characters!", <br />);
  }
  if (password.length < 8) {
    passwordErrors.push("Password must be at least 8 characters long!", <br />);
  }
  if (
    password.toLowerCase() === password ||
    password.toUpperCase() === password
  ) {
    passwordErrors.push(
      "Password must contain at least 1 uppercase and 1 lowercase letter.",
      <br />
    );
  }
  if (!numbers.test(password)) {
    passwordErrors.push("Password must contain at least 1 number.", <br />);
  }
  if (!specialChars.test(password)) {
    passwordErrors.push(
      "Password must contain at least one of the following: !@#$-_~%^&*",
      <br />
    );
  }
  if (passwordErrors[0]) {
    return passwordErrors;
  } else {
    return "";
  }
};
