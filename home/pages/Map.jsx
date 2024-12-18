import App from "../src/App";
import Navbar from "./component/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Gallerypage from "Gallerypage"

export default function Map() {
  return (
    <>
      <Cursor />
      <Routes>
        <Route
          path="/Map"
          element={
            <main>
                <Navbar/>
              <div>我是地圖頁</div>
                <ul>
                <li><Link to="/page/1">地圖推薦1</Link></li>
                <li><Link to="/page/2">地圖推薦2</Link></li>
                </ul>              
            </main>
          }
        />
        <Route path="/page/:pageId" element={<Gallerypage/>} />
        <Route path="/Story" element={<Story />} />
        <Route path="/" element={<App />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
