import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Landingpage from "./Components/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Show Login page first by default */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
