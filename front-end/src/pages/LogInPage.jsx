import { useState } from "react";
import { useToken } from "../auth/useToken";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LogInPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [token, setToken] = useToken();

  const history = useHistory();

  const onLogIn = async () => {
    const response = await axios.post("/api/login", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push("/");
  };
  return (
    <div className="bg-white p-5 rounded-lg">
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
      <hr />
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
