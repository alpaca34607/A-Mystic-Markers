import "./style.scss";
// import "../css/style.css";
import Navbar from "./component/Navbar";
import { useParams } from "react-router-dom";


    const imageData = [
        { src: "/images/Legends.jpg", alt: "都市傳說",link:"#Forum1"  },
        { src: "/images/Horror.jpg", alt: "恐怖獵奇",link:"#Forum2" },
        { src: "/images/Exorcism.jpg", alt: "驅邪收驚",link:"#Forum3"  },
        { src: "/images/Creeps.jpg",alt: "恐怖作品",link:"#Forum4"  },
        { src: "/images/Ruins.jpg",alt: "廢墟探險",link:"#Forum5" },
    ];
    function GalleryPage(){
        const { pageId } = useParams();
        const images = imageData[pageId] || [];

    }

    const { pageId }=useParams();


return(

    <>
    <Navbar/>
<h1>推薦地圖頁{pageId}</h1>
<div>
    {images.map((image, index)=> (
        <img key={index} src={image.src} alt={image.alt}/>

    ))
}
</div>
    
    </>
)



export default GalleryPage