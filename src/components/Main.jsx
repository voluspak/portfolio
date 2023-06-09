
import style from '../styles/styles.module.css'
import ProjectsGallery from './ProjectsGallery'
import RedesSociales from './RedesSociales'

const Main = () => {
  return (
    <main>
      <section>
        <h2 className={style.subHeader} id='acercaDe'>Acerca de</h2>
        <p className={style.intro}>
          ¡Hola! ¿Buscas a alguien apasionado y dedicado al <b>desarrollo front end</b> y <b>accesibilidad</b>? 🔎
          <br />
          <br />
          Soy un exbarista profesional apasionado por la creación y el aprendizaje constante.
          Me he enfocado principalmente en el desarrollo front end, utilizando tecnologías como <b> React.js ⚛ </b>
          y en el backend con <b>Express.js</b> y <b>MongoDB</b> con <b>Mongoose</b>.
          <br />
          <br />
          Si buscas un desarrollador con varios proyectos
          realizados y gran entusiasmo, ¡Aquí estoy! Echa un vistazo a algunos de mis proyectos recientes que se encuentran
          más abajo 👇. Contáctame en cualquiera de mis redes sociales 📱 y
          hablemos sobre cómo puedo ayudarte a llevar tu proyecto al siguiente nivel 🚀. ¡Hablemos!
        </p>
        <RedesSociales />
      </section>

      <ProjectsGallery />
    </main>
  )
}

export default Main
