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

    if (!/[A-Z]/.test(password)) {
      fail = `${fail}Password must contain at least 1 capital letter\n`;
    }

    if (!/[a-z]/.test(password)) {
      fail = `${fail}Password must contain at least 1 lowercase letter\n`;
    }

    if (!/\d/.test(password)) {
      fail = `${fail}Password must contain at least 1 number\n`;
    }

    if (!/[!@#$%^&*()_+={[}\]|:;"'<,>.]/.test(password)) {
      fail = `${fail}Password must contain at least 1 special character`;
    }

    if (fail.length > 0) {
      setFailureMessage(fail);
    } else {
      setFailureMessage("Password valid");
    }
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
