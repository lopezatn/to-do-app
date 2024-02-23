import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import RegistrationForm from "./Example/RegistrationForm/RegistrationForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
