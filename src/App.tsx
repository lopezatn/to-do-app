import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Register from "./RegistrationForm/Register";
import { useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Logout from "./Logout/Logout";

function App() {
  const user = useSelector((state: RootState) => state.user);

  const isLogged = user ? true : false;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Logout"
          element={
            <ProtectedRoute element={<Logout />} isAuthenticated={isLogged} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
