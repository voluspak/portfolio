import React from 'react'
import './App.css'

function App () {
  return (
    <React.Fragment className='App'>
      <header>
        <img src='./images/ivan.jpeg' alt='Foto de Ivan Telleria' class='header-img' title='Foto de Ivan Telleria' />
        <h1 class='header'>Ivan Telleria</h1>
        <h2 class='subtitle'>Front End Developer</h2>
        <nav>
          <ul class='navigation'>
            <li class='nav-item'>
              <a href='#acercaDe'>Acerca de</a>
            </li>
            <li class='nav-item'>
              <a href='#misProyectos'>Mis Proyectos</a>
            </li>
            <li class='nav-item'>
              <a href='#contacto'>Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2 class='header' id='acercaDe'>Acerca de</h2>
          <p class='intro'>
            ¡Hola, soy Ivan! Soy venezolano viviendo en España 👋, me encanta crear y
            aprender cosas nuevas. Antes me dedicaba a la gastronomía como barista
            profesional ☕ hasta que decidí dedicarme a la programacion 💻. tengo un enfoque
            principal en el desarrollo front end, específicamente en React.js ⚛ y mas
            recientemente en accesibilidad. Tambien manejo tecnologías de backend como Express.js.
            y MongoDB con Mongoose. Más abajo puedes ver algunos de mis proyectos recientes.
            ¡Puedes contactarme por cualquiera de mis redes sociales!
          </p>
          <ul class='social-media'>
            <li>
              <a href='https://twitter.com/gmzjuliana' target='_blank' rel='noreferrer'>
                <i title='Instagram' aria-roledescription='img' alt='Instagram' class='fa-brands fa-instagram' />
                <p>Instagram</p>
              </a>
            </li>
            <li>
              <a href='https://github.com/gmzjuliana' target='_blank' rel='noreferrer'>
                <img title='Github' alt='Github' src='images/github-logo.png' />
                <p>Github</p>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ivan-telleria/' target='_blank' rel='noreferrer'>
                <img title='Linkedin' alt='Linkedin' src='images/linkedin.png' />
                <p>Linkedin</p>
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 class='header' id='misProyectos'>Mis proyectos</h2>
          <div class='carousel'>
            <button class='arrow arrow-left' aria-label='backward button' />
            <div class='window'>
              <ul class='project-container'>
                <li class='project1-container'>
                  <button class='project1 project'>
                    <img class='project-img' src='/images/project1.png' alt='Proyecto 1' />
                  </button>
                </li>
                <li class='project2-container'>
                  <button class='project2 project'>
                    <img class='project-img' src='/images/project2.png' alt='Proyecto 2' />
                  </button>
                </li>
                <li class='project3-container'>
                  <button class='project3 project'>
                    <img class='project-img' src='/images/project3.png' alt='Proyecto 3' />
                  </button>
                </li>
                <li class='project4-container' aria-hidden='true'>
                  <button class='project4 project' tabindex='-1'>
                    <img class='project-img' src='/images/project4.png' alt='Proyecto 4' />
                  </button>
                </li>
                <li class='project5-container' aria-hidden='true'>
                  <button class='project5 project' tabindex='-1'>
                    <img class='project-img' src='/images/project5.png' alt='Proyecto 5' />
                  </button>
                </li>
              </ul>
            </div>
            <button class='arrow arrow-right' aria-label='forward button' />
          </div>
        </section>
      </main>

      <footer class='contact-section'>
        <h2 class='header' id='contacto'>Contacto</h2>
        <i class='intro mensaje-guia'>Para mandarme un mensaje ✉, puedes usar el siguiente formulario 👇</i>
        <form class='form-container'>
          <label>Nombre</label>
          <input id='name' type='text' aria-label='Nombre' placeholder='Carlos Garcia' /> <br />
          <span id='name-error' aria-live='assertive' />

          <label>Correo</label>
          <input type='text' aria-label='Correo electronico' placeholder='c.garcia98@ejemplo.com' /> <br />
          <div>
            <label>Mensaje</label>
            <textarea
              class='message-input'
              aria-label='Mensaje'
              placeholder='Escribe un mensaje aqui...'
              minlength='500'
            /> <br />
          </div>
          <button class='send-button'>Enviar</button>
        </form>
      </footer>

      <div class='notification' aria-live='assertive' />
      <div class='modal-container'>
        <div class='modal'>
          <h2 class='header' id='modal-header'>Ejemplo de un proyecto mio</h2>
          <img
            src='./images/project1.png'
            alt='Proyecto de desarrollo'
            title='Proyecto'
            class='modal-project-image'
          />
          <button tabindex='0' class='modal-button'>Cerrar</button>
        </div>
      </div>

    </React.Fragment>
  )
}

export default App
