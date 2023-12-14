import "./App.css";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

  const validatePassword = () => {
    let fail = "";
    if (password !== confirmPassword) {
      fail = "Passwords must match\n";
    }

    if (password.length < 6) {
      fail = `${fail}Password must have at least 6 characters\n`;
    }

    fail = `${fail}${validateCharacters()}`;

    if (fail.length > 0) {
      setFailureMessage(fail);
    } else {
      setFailureMessage("Password valid");
    }
  };

  const validateCharacters = () => {
    const checks = [/[A-Z]/, /[a-z]/, /\d/, /[!@#$%^&*()_+={[}\]|:;"'<,>.]/];
    const failMessages = [
      "Password must contain at least 1 capital letter\n",
      "Password must contain at least 1 lowercase letter\n",
      "Password must contain at least 1 number\n",
      "Password must contain at least 1 special character",
    ];
    let failMessage = "";

    checks.forEach((check, i) => {
      if (!check.test(password)) {
        failMessage = `${failMessage}${failMessages[i]}`;
      }
    });

    return failMessage;
  };

  return (
    <div className="App">
      <input
        placeholder="password"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="confirm password"
        value={confirmPassword}
        onInput={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={validatePassword}>submit</button>
      <div>{failureMessage}</div>
    </div>
  );
}

export default App;
