import gallery_1 from "../assets/images/gallery_1.png";
import gallery_2 from "../assets/images/gallery_2.png";
import gallery_3 from "../assets/images/gallery_3.png";
import gallery_4 from "../assets/images/gallery_4.png";
import gallery_5 from "../assets/images/gallery_5.png";
import gallery_6 from "../assets/images/gallery_6.png";

const Gallery = () => {
  return (
    <section class="gallery">
          <h2 class="gallery__title title">GALLERY</h2>
          <div class="gallery__box">
            <img src={gallery_1} alt="1" class="gallery__img" />
            <img src={gallery_2} alt="2" class="gallery__img" />
            <img src={gallery_3} alt="3" class="gallery__img" />
            <img src={gallery_4} alt="4" class="gallery__img" />
            <img src={gallery_5} alt="5" class="gallery__img" />
            <img src={gallery_6} alt="6" class="gallery__img" />
          </div>
        </section>
  )
}

export default Gallery