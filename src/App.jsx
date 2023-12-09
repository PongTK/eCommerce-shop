import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Register from "./Components/Register/Register";

function App() {
  const [displayRegisPage, setdisplayRegisPage] = useState(false);

  let regisPagePopUp = false;
  if (!!displayRegisPage) {
    regisPagePopUp = <Register setdisplayRegisPage={setdisplayRegisPage} />;
  }
  return (
    <Router>
      <>
        <Navbar setdisplayRegisPage={setdisplayRegisPage} />
        {regisPagePopUp}
        <Routes>
          <Route
            index
            element={<Home setdisplayRegisPage={setdisplayRegisPage} />}
          />
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
