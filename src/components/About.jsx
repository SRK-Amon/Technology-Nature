import aboutImg from "../assets/images/aboutUS_img.png";

const About = () => {
  return (
    <section class="about">
      <div class="about__box">
        <h2 class="about__title title">ABOUT US</h2>
        <p class="about__text">
          We create innovative solutions that help preserve the environment
          while improving quality of life. Our goal is to prove that
          technological progress can go hand in hand with ecological
          responsibility. By using cutting-edge developments, we strive to
          minimize the negative impact on nature and contribute to building a
          sustainable and harmonious future. We bring together engineers,
          ecologists, and designers to develop products and services inspired by
          nature itself, yet empowered by the strength of technology.
        </p>
        <button class="btn">More...</button>
      </div>
      <img src={aboutImg} alt="img_aboutUS" class="about__img" />
    </section>
  );
};

export default About;
