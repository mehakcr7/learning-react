import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Contact from "./Contact";
import About from "./about";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Sharon() {
  return (
    <div className=" h-auto bg-black">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Sharon;
