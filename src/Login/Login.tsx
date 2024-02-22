import { useState } from "react";
import InputField from "../InputField/InputField";
import "./login.css";

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

  return (
    <>
      <div className="login-container">
        <h2>Please log-in to proceed</h2>
        <InputField label="Username" id="username" onChange={handleUsername} />
        <InputField label="Password" id="userpass" onChange={handlePassword} />
      </div>
    </>
  );
};

export default Login;
