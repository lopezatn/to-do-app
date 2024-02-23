import { Link } from "react-router-dom";
import "./registerlink.css";

const RegisterLink = () => {
  return (
    <>
      <div className="registerContainer">
        <h3>I don't have an account</h3>
        <Link to="/RegistrationForm">Register Account</Link>
      </div>
    </>
  );
};

export default RegisterLink;
