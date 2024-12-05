import { useState } from "react";
import "../css/style.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Story from "./pages/Storys";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";
import GlowingText from "./component/GlowingText";

function App() {
 
  return (
    <>
      {/* <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Story/>}></Route>
        <Route path="/news" element={<Map/>}></Route>
        <Route path="/news" element={<Forum/>}></Route>
        <Route path="/news" element={<Contact/>}></Route>
      </Routes>       */}
      <main className="home">
      <section className="banner">
        <Navbar />
        
        <div className="logoXL">
          <a href="./index.html">
          <img id="mark" src="/images/LOGO.svg" alt="神秘座標"  />
            <img  src="/images/logo_XL.svg" alt="神秘座標" />
            <p><GlowingText text="MYSTIC MARKERS"/></p>
                        
          </a>
        </div>
        
      </section>
      </main>
    </>
  );
}


export default App;

