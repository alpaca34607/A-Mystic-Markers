
import "./style.scss";
// import "../css/style.css";
import "./style.scss";
import Navbar from "./component/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Story from "./pages/Storys";
import Map from "./pages/Map";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";
import GlowingText from "./component/GlowingText";
import Intro2Component from "./component/Intro2Component";
import Carousel from "./component/Carousel";
import ForumImg from "./component/ForumImg";
import Fog from "./component/Fog";




function App() {

  return (
    <>
  
      <Routes>
      <Route path="/" element={
              
      <main className="home">
       
        <section className="banner">
          <Navbar />
          <div id="fog-masked">
         <div id="fog-rotate">
          <div className="fog-area">
            <Fog/>
          </div>
          </div>
          </div>
        
          
          <div className="logoXL">
            <Link to="/">
              <img id="mark" src="/images/LOGO.svg" alt="神秘座標" />
              <img id="logoB"src="/images/logo_XL.svg" alt="神秘座標" />
              <div className="p"><GlowingText text="MYSTIC MARKERS" /></div>

            </Link>
          </div>
        </section>
        <section className="intro">
          <div id="intro1">
            <div className='door'>
              <figure> <img src="/images/door.png" alt="未知之門" /></figure>
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
          <Intro2Component />
          <Carousel />
          <div id="intro3">
            <div className="title">
              <h2>靈異導航</h2>
              <h3>
                探索靈異地點，標記、收藏有趣的景點，並留下你的經歷與評論，發掘身邊未知的神秘之地。
              </h3>
            </div>
            <div className="map-area">
              <img src="/images/map_intro.png" alt="Map Intro" />
              <div className="map-intro" >
                <h4>1.</h4>
                <p>按鈕切換地圖  鬧鬼地點/收驚廟宇</p>
                <h4>2.</h4>
                <p>可搜尋地點&座標</p>
                <h4>3.</h4>
                <p>可收藏地點(需登入帳號)</p>
                <h4>4.</h4>
                <p>可直接在地圖上標註地點</p>
                <p>可收藏地點(需登入帳號)</p>
                <h4>5.</h4>
                <p>瀏覽地點與相關評論</p>
              </div>
            </div>

            <div id="intro4">
              <div className="title">
                <h2>鬼影探索</h2>
                <h3>
                  靈異愛好者的專屬交流空間，分享靈異故事、實地探險經驗，<br />
                  並討論各類神秘現象，找到志同道合的朋友。
                </h3>
              </div>
              <ForumImg />
            </div>
            
          </div>

        </section>

      </main>
      }/>
   
     <Route path="/Story" element={<Story/>}/>
     <Route path="/Map" element={<Map/>}/>
     <Route path="/Forum" element={<Forum/>}/>
     <Route path="/Contact" element={<Contact/>}/>
   </Routes>
 
   </>
  );
}


export default App;