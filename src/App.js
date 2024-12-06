import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import CodingProjects from "./pages/CodingProjects/CodingProjects.jsx";
import DesignProject1 from "./pages/DesignProjects/DesignProject1.jsx";
import DesignProject2 from "./pages/DesignProjects/DesignProject2.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/codingprojects" element={<CodingProjects />} />
          <Route path="/designproject1" element={<DesignProject1 />} />
          <Route path="/designproject2" element={<DesignProject2 />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
