import { useState } from "react";
import { useToken } from "../auth/useToken";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [token, setToken] = useToken();

  const history = useHistory();

  const onSignup = async () => {
    const response = await axios.post("/api/signup", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push("/");
  };
  return (
    <div className="bg-white p-5 rounded-lg">
      <h1>Sign up</h1>
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
      <input
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
        type="password"
        placeholder="Confirm Password"
      />
      <hr />
      <button
        onClick={onSignup}
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
      >
        Sign up
      </button>

      <button onClick={() => history.push("/login")}>Log in</button>
    </div>
  );
};

export default SignUpPage;
