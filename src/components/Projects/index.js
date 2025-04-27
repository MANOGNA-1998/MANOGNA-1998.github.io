// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./project.module.css";
import ProjectsCard from "../ProjectCard";

function Projects() {
  return (
    <>
      <div id="projects" className={styles.anchor}></div>
    
    <div className={styles.container}>
      <div className={styles.title_section}>
        <h1 className={styles.title}>&lt;Projects/&gt;</h1>
        <span />
      </div>

      <div className={styles.card_container}>
        <ProjectsCard
          title="Movie Recommendation System"
          image="movie_recommendation"
          desc="A full stack web application to journal, rate movies and get recommendations. "
          repo="https://github.com/MANOGNA-1998/Movie-Recommendation-Engine/tree/main#"
        />
        <ProjectsCard
          title="Forecasting Energy Demand Flexibility in Electric Vehicles"
          image="ev_demand"
          desc="Developed a Multi Variate Time Series Forecasting model to make day-ahead predictions of energy flexibility using
          LSTM."
          repo="https://github.com/MANOGNA-1998/Forecasting-Energy-Demand-Flexibility-in-Electric-Vehicles"
        />
        {/* <ProjectsCard
          title="Project 1"
          image="banner"
          desc="Description"
          repo="Project 1"
        /> */}
      </div>
    </div>
    </>
  );
}

export default Projects;
