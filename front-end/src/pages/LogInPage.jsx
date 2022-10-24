import { useState } from "react";
import { useHistory } from "react-router-dom";

const LogInPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const onLogIn = () => {
    alert("Log in functionality not implemented yet");
    if (!emailValue || !passwordValue) {
      setErrorMessage("Enter a valid email or password");
    }
  };
  return (
    <div>
      <h1>Log In</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={onLogIn} disabled={!emailValue || !passwordValue}>
        Login
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot password?
      </button>
      <button onClick={() => history.push("/signup")}>Sign up</button>
    </div>
  );
};

export default LogInPage;
