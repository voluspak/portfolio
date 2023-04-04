
import style from '../styles/styles.module.css'
import Carrusel from './Carrusel'

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
        <ul className={style.socialMedia}>
          <li>
            <a href='https://twitter.com/gmzjuliana' target='_blank' rel='noreferrer'>
              <i
                title='Instagram'
                aria-roledescription='img'
                alt='Instagram'
                className='fa-brands fa-instagram'
              />
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href='https://github.com/gmzjuliana' target='_blank' rel='noreferrer'>
              <img title='Github' alt='Github' src='./assets/github-logo.png' />
              <p>Github</p>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/ivan-telleria/' target='_blank' rel='noreferrer'>
              <img title='Linkedin' alt='Linkedin' src='./assets/linkedin.png' />
              <p>Linkedin</p>
            </a>
          </li>
        </ul>
      </section>

      <Carrusel />
    </main>
  )
}

export default Main
