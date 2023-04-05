import useContactForm from '../hooks/useContactForm'
import style from '../styles/styles.module.css'
import Notificacion from './Notificacion'

const Footer = () => {
  const { nombreError, correoError, mensajeError, showNotification, handleForm } = useContactForm()

  return (
    <footer className={[style.contactSection]}>
      <h2 className={style.header} id='contacto'>Contacto</h2>
      <i className={style.intro} id='mensaje-guia'>Para mandarme un mensaje ✉, puedes usar el siguiente formulario 👇</i>

      <form
        className={style.formContainer}
        onSubmit={handleForm}
      >
        <label>Nombre</label>
        <input
          name='nombre'
          id='name' type='text'
          aria-label='Nombre'
          placeholder='Carlos Garcia'
        /> <br />
        <span className={style.error} aria-live='assertive'>
          {nombreError}
        </span>

        <label>Correo</label>
        <input
          name='correo'
          type='email'
          aria-label='Correo electronico'
          placeholder='c.garcia98@ejemplo.com'
        /> <br />
        <span className={style.error} aria-live='assertive'>
          {correoError}
        </span>

        <div>
          <label>Mensaje</label>
          <textarea
            name='mensaje'
            className={style.messageInput}
            aria-label='Mensaje'
            placeholder='Escribe un mensaje aqui...'
          /> <br />
          <span className={style.error} aria-live='assertive'>
            {mensajeError}
          </span>
        </div>
        <button className={style.sendButton}>Enviar</button>
      </form>

      {showNotification && <Notificacion />}

    </footer>
  )
}

export default Footer
