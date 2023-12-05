import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/ServiceComponent/Service";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Shop />
      <Service />
      <Footer />
    </>
  );
}

export default App;
