import projects_1 from "../assets/images/projects_1.png";
import projects_2 from "../assets/images/projects_2.png";
import projects_3 from "../assets/images/projects_3.png";

const Projects = () => {
  return (
    <section class="projects">
      <h2 class="projects__title title">COMPLETED PROJECTS</h2>
      <div class="projects__box">
        <div class="projects__card card">
          <img src={projects_1} alt="projects_1" class="card__img" />
          <div class="card__box">
            <div className="card__info">
              <h3 class="card__title">DESIGN OF A HOUSE</h3>
              <p class="card__text">Los Angeles, California</p>
            </div>
            <button class="card__btn btn">Learn more...</button>
          </div>
        </div>
        <div class="projects__card card">
          <img src={projects_2} alt="projects_1" class="card__img" />
          <div class="card__box">
            <div className="card__info">
              <h3 class="card__title">DESIGN OF A HOUSE</h3>
              <p class="card__text">Los Angeles, California</p>
            </div>
            <button class="card__btn btn">Learn more...</button>
          </div>
        </div>
        <div class="projects__card card">
          <img src={projects_3} alt="projects_1" class="card__img" />
          <div class="card__box">
             <div className="card__info">
              <h3 class="card__title">DESIGN OF A HOUSE</h3>
              <p class="card__text">Los Angeles, California</p>
            </div>
            <button class="card__btn btn">Learn more...</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
