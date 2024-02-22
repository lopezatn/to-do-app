import { useState } from "react";
import InputField from "../InputField/InputField";
import "./login.css";
import Button from "../Example/Button/Button";

const USERNAME = "user";
const PASSWORD = "password";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (value: string) => {
    const userInput = value;
    setUsername(userInput);
  };

  const handlePassword = (value: string) => {
    const userInput = value;
    setPassword(userInput);
  };

  const handleClick = () => {
    if (username === USERNAME && password === PASSWORD) {
      alert("Hi there");
    } else {
      alert("Oh no :(");
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h2>Please log-in to proceed</h2>
      </div>

      <InputField
        id="username"
        placeholder="username"
        onChange={handleUsername}
      />
      <InputField
        id="userpass"
        type="password"
        placeholder="password"
        onChange={handlePassword}
      />
      <Button buttonValue="Login" onClick={handleClick} />
    </div>
  );
};

export default Login;
