import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Calculate from "./Components/Calculate";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculate" element={<Calculate />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
