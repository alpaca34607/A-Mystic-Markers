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
import ParallaxComponent from "./component/PaperScroll";

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
              <img id="mark" src="/images/LOGO.svg" alt="神秘座標" />
              <img src="/images/logo_XL.svg" alt="神秘座標" />
              <div className="p"><GlowingText text="MYSTIC MARKERS" /></div>

            </a>
          </div>
        </section>
        <section className="intro">


          <div id="intro1">
            <div className='door'>
              <figure> <img src="/images/door.png" /></figure>
              <div id="intro_Q">
                <img src="/images/intro_Q.svg" alt="準備好要探索未知了嗎?" />
                <p>
                  這裡是通往神秘世界的入口，<br />
                  你即將探索不為人知的領域。<br />
                  深入幽暗的角落揭開真相。<br />
                  這裡的每一個角落都充滿驚喜，<br />
                  準備好面對未知的恐懼吧！<br />
                </p>
              </div>
            </div>
          </div>
          <ParallaxComponent/>
   </section>
      </main>
    </>
  );
}


export default App;