
import style from '../styles/styles.module.css'
import Carrusel from './Carrusel'
import RedesSociales from './RedesSociales'

const Main = () => {
  return (
    <main>
      <section>
        <h2 className={style.header} id='acercaDe'>Acerca de</h2>
        <p className={style.intro}>
          ¡Hola, soy Ivan! Soy venezolano viviendo en España 👋, me encanta crear y
          aprender cosas nuevas. Antes me dedicaba a la gastronomía como barista
          profesional ☕ hasta que decidí dedicarme a la programacion 💻. tengo un enfoque
          principal en el desarrollo front end, específicamente en React.js ⚛ y mas
          recientemente en accesibilidad. Tambien manejo tecnologías de backend como Express.js.
          y MongoDB con Mongoose. Más abajo puedes ver algunos de mis proyectos recientes.
          ¡Puedes contactarme por cualquiera de mis redes sociales!
        </p>
        <RedesSociales />
      </section>

      <Carrusel />
    </main>
  )
}

export default Main
