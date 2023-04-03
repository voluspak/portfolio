import style from './styles/styles.module.css'

function App () {
  return (
    <>
      <header>
        <img
          src='./assets/ivan.jpeg'
          alt='Foto de Ivan Telleria'
          className={style.headerImg}
          title='Foto de Ivan Telleria'

        />
        <h1 className={style.header}>Ivan Telleria</h1>
        <h2 className={style.subtitle}>Front End Developer</h2>
        <nav>
          <ul className={style.navigation}>
            <li className={style.navItem}>
              <a href='#acercaDe'>Acerca de</a>
            </li>
            <li className={style.navItem}>
              <a href='#misProyectos'>Mis Proyectos</a>
            </li>
            <li className={style.navItem}>
              <a href='#contacto'>Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

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

        <section>
          <h2 className={style.header} id='misProyectos'>Mis proyectos</h2>
          <div className={style.carousel}>
            <button className={[style.arrow, style.arrowLeft]} aria-label='backward button' />
            <div className={style.window}>
              <ul className={style.projectContainer}>
                <li className='project1-container'>
                  <button id='project1' className={style.project}>
                    <img className={style.projectImg} src='./assets/project1.png' alt='Proyecto 1' />
                  </button>
                </li>
                <li className='project2-container'>
                  <button id='project2' className={style.project}>
                    <img className={style.projectImg} src='./assets/project2.png' alt='Proyecto 2' />
                  </button>
                </li>
                <li className='project3-container'>
                  <button id='project3' className={style.project}>
                    <img className={style.projectImg} src='./assets/project3.png' alt='Proyecto 3' />
                  </button>
                </li>
                <li className='project4-container' aria-hidden='true'>
                  <button id='project4' className={style.project} tabindex='-1'>
                    <img className={style.projectImg} src='./assets/project4.png' alt='Proyecto 4' />
                  </button>
                </li>
                <li className='project5-container' aria-hidden='true'>
                  <button id='project1' className={style.project} tabindex='-1'>
                    <img className={style.projectImg} src='./assets/project5.png' alt='Proyecto 5' />
                  </button>
                </li>
              </ul>
            </div>
            <button className={[style.arrow, style.arrowRight]} aria-label='forward button' />
          </div>
        </section>
      </main>

      <footer className={style.contactSection}>
        <h2 className={style.header} id='contacto'>Contacto</h2>
        <i className={style.intro} id='mensaje-guia'>Para mandarme un mensaje ✉, puedes usar el siguiente formulario 👇</i>
        <form className={style.formContainer}>
          <label>Nombre</label>
          <input id='name' type='text' aria-label='Nombre' placeholder='Carlos Garcia' /> <br />
          <span id='name-error' aria-live='assertive' />

          <label>Correo</label>
          <input type='text' aria-label='Correo electronico' placeholder='c.garcia98@ejemplo.com' /> <br />
          <div>
            <label>Mensaje</label>
            <textarea
              className={style.messageInput}
              aria-label='Mensaje'
              placeholder='Escribe un mensaje aqui...'
              minlength='500'
            /> <br />
          </div>
          <button className={style.sendButton}>Enviar</button>
        </form>
      </footer>

      <div className={style.notification} aria-live='assertive' />
      <div className={style.modalContainer}>
        <div className={style.modal}>
          <h2 className={style.header} id='modal-header'>Ejemplo de un proyecto mio</h2>
          <img
            src='./images/project1.png'
            alt='Proyecto de desarrollo'
            title='Proyecto'
            className={style.modalProjectImage}
          />
          <button tabindex='0' className={style.modalButton}>Cerrar</button>
        </div>
      </div>

    </>
  )
}

export default App
