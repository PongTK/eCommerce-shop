import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Shop/*" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
