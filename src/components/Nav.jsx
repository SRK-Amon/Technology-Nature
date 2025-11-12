import logo from "../assets/images/logo.svg";

const Nav = () => {
  return (
    <nav class="nav">
      <div class="container">
        <div class="nav__box">
          <img src={logo} alt="" class="nav__logo" />
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
      </div>
    </nav>
  );
};

export default Nav;
