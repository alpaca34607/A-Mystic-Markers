
import "../style.scss";
const ForumImg = () => {
    const images = [
        { src: "/images/Legends.jpg", alt: "都市傳說",link:"#Forum1" },
        { src: "/images/Horror.jpg", alt: "恐怖獵奇",link:"#Forum2" },
        { src: "/images/Exorcism.jpg", alt: "驅邪收驚",link:"#Forum3"  },
        { src: "/images/Creeps.jpg", alt: "恐怖作品",link:"#Forum4"  },
        { src: "/images/Ruins.jpg", alt: "廢墟探險",link:"#Forum5" },
    ];
    return (
        <div className="forum-gallery">

            {images.map((image, index) => (

                <div className="image-link" key={index}>
                    <a href={image.link}>
                        <img src={image.src} alt={image.alt} />
                        <span className="overlaytext">{image.alt}</span>
                    </a>
                    
                </div>


            ))}
        </div>
    )

}
export default ForumImg