import ProjectCard from './ProjectCard'
import style from '../styles/styles.module.css'

const ProjectsGallery = () => {
  return (
    <section className={style.projectGallery}>
      <h2 className={style.subHeader}>Galería de Proyectos</h2>
      <div className={style.cardsContainer}>
        <ProjectCard />
      </div>
    </section>
  )
}

export default ProjectsGallery
