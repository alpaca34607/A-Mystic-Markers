import { useState } from "react";
import "../css/style.css";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
     <Navbar />
      <section id="banner">
      
      </section>
    </>
  );
}


export default App;

