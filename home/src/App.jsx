import { useState } from "react";
import "../css/style.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Story from "./pages/Storys";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";

function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Story/>}></Route>
        <Route path="/news" element={<Map/>}></Route>
        <Route path="/news" element={<Forum/>}></Route>
        <Route path="/news" element={<Contact/>}></Route>
      </Routes>
      <section id="homebanner">
        <div id="logoXL">
          <a href="./index.html">
            <img src="/images/logo_XL.svg" alt="神秘座標" title="神秘座標" />
            <p id="ENtitle-s">MYSTIC MARKERS</p>
          </a>
        </div>

      </section>
    </>
  );
}


export default App;

