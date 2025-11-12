import social_media_1 from "../assets/images/social_media_1.svg";
import social_media_2 from "../assets/images/social_media_2.svg";
import social_media_3 from "../assets/images/social_media_3.svg";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__box">
          <div class="footer__card">
            <h3 class="footer_title">HOME PAGE</h3>
            <a href="#!" class="footer__link">
              ABOUT
            </a>
            <a href="#!" class="footer__link">
              GALLERY
            </a>
            <a href="#!" class="footer__link">
              PROJECTS
            </a>
            <a href="#!" class="footer__link">
              CONTACTS
            </a>
          </div>
          <div class="footer__card">
            <h4 class="footer_title">CONTACTS</h4>
            <a href="#!" class="footer__text footer_link">
              +(212) 111-4242
            </a>
            <a href="#!" class="footer__text footer_link">
              Technature.agency
            </a>
          </div>
          <div class="footer__card">
            <h3 class="footer_title">FOLLOW US</h3>
            <div class="social_media__box">
              <img src={social_media_1} alt="" />
              <img src={social_media_2} alt="" />
              <img src={social_media_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
