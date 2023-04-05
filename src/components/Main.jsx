
import style from '../styles/styles.module.css'
import Carrusel from './Carrusel'
import RedesSociales from './RedesSociales'

const Main = () => {
  return (
    <main>
      <section>
        <h2 className={style.header} id='acercaDe'>Acerca de</h2>
        <p className={style.intro}>
          ¡Hola! ¿Buscas a alguien apasionado y dedicado al <b>desarrollo front end</b> y <b>accesibilidad</b>? 🔎
          <br />
          <br />
          Soy Ivan, un venezolano que reside en España y estoy emocionado por mostrar lo que puedo hacer.
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

      <Carrusel />
    </main>
  )
}

export default Main
