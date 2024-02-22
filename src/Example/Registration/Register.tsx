import { useState } from "react";
import InputField from "../../InputField/InputField";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsername = (value: string) => {
    setUsername(value);
    console.log(username);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
    console.log(password);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
    console.log(email);
  };

  return (
    <>
      <h2>Register to continue</h2>
      <InputField
        id="username"
        placeholder="username"
        onChange={handleUsername}
      />
      <InputField
        id="password"
        type="password"
        placeholder="password"
        onChange={handlePassword}
      />
      <InputField
        id="email"
        type="email"
        placeholder="email"
        onChange={handleEmail}
      />
    </>
  );
};

export default Register;
