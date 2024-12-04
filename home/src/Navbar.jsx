import "../css/style.css";


function  Navbar() {
  return (
    <header className="Topbar">
      <div className="Topbar-right">
      {/* LOGO 圖標 */} 
        <a href="#forum">
          <div className="logo">
            <img src="/images/LOGO.png" alt="神秘座標LOGO" />
            <h3 className="logoText">Mystic Markers</h3>
          </div>
        </a>
        {/* 登入/註冊 */}
        <div className="member">
          <a href="">登入</a> | <a href="">註冊</a> 
        </div>
      </div>
      {/* 通知/會員管理/MENU */}
      <nav className="navigation">
        <a href="#news">
          <img src="/images/news.png" alt="news" />
        </a>
        <a href="#Group">
          <img src="/images/Group.png" alt="Group" />
        </a>
        <a href="#menu">
          <img src="/images/menu.png" alt="menu" />
        </a>
       {/* menu待補 */}
      </nav>
    </header>
  );
}
export default Navbar;