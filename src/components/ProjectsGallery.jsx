import ProjectCard from './ProjectCard'
import style from '../styles/styles.module.css'

const ProjectsGallery = () => {
  return (
    <section>
      <h2 className={style.subHeader}>Galería de Proyectos</h2>
      <ProjectCard />
    </section>
  )
}

export default ProjectsGallery
