import logo from "../assets/images/logo.svg";
import about from "../assets/images/mobile__about.svg";
import gallery from "../assets/images/mobile__gallery.svg";
import projects from "../assets/images/mobile__projects.svg";
import contacts  from "../assets/images/mobile__contacts.svg";
import call from "../assets/images/mobile__call.svg";

const Nav = () => {
  return (
    <nav class="nav">
      <div class="container">
        <div class="nav__box">
          <a href="#!">
            <img src={logo} alt="" class="nav__logo" />
          </a>
          <ul class="nav__list">
            <li>
              <a href="#!" class="nav__link">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#!" class="nav__link">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#!" class="nav__link">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#!" class="nav__link">
                CONTACTS
              </a>
            </li>
          </ul>
          <a href="tel:+(212) 111-4242" class="nav__call">
            +(212) 111-4242
          </a>
        </div>
        <div className="nav__mobile--images">
          <a href="#!"><img src={logo} alt="logoImg" /></a>
          <a href="#!"><img src={about} alt="aboutImg" /></a>
          <a href="#!"><img src={gallery} alt="GalleryImg" /></a>
          <a href="#!"><img src={projects} alt="ProjectsImg" /></a>
          <a href="#!"><img src={contacts} alt="ContactsImg" /></a>
          <a href="#!"><img src={call} alt="CallImg" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
