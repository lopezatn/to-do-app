import { useState } from "react";
import InputField from "../InputField/InputField";
import "./login.css";
import Button from "../Example/Button/Button";
import Footer from "../Footer/Footer";
import RegisterLink from "../RegisterLink/RegisterLink";
import logo from "../images/logo.png";

const USERNAME = "username";
const PASSWORD = "password";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  let isDisabled = username === "" && password === "";

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
      setErrorMessage(false);
      console.log(errorMessage);
    } else {
      setErrorMessage(true);
      console.log(errorMessage);
    }
  };

  const keyDown = (e: any) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <section className="mainContainer">
        <div className="titleContainer">
          <img className="siteLogo" src={logo} alt="logo" />
          <h2>Please log-in to proceed</h2>
        </div>

        <InputField
          id="username"
          placeholder="username"
          onChange={handleUsername}
          onKeyDown={keyDown}
        />
        <InputField
          id="userpass"
          type="password"
          placeholder="password"
          onChange={handlePassword}
          onKeyDown={keyDown}
        />
        <label className="errorMessage">
          {errorMessage ? "Incorrect username or password" : ""}
        </label>
        <Button
          id="Button"
          buttonValue="Login"
          isDisabled={isDisabled}
          onClick={handleClick}
        />
        <RegisterLink />
      </section>
      <Footer />
    </>
  );
};

export default Login;
