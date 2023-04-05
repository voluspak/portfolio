import { useState } from 'react'
import style from '../styles/styles.module.css'
import Notificacion from './Notificacion'

const Footer = () => {
  const [nombreError, setNombreError] = useState('')
  const [correoError, setCorreoError] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  function handleForm (e) {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))

    if (fields.correo === '') {
      setCorreoError('*Este campo no puede estar vacío y debe tener un formato válido')
      setTimeout(() => setCorreoError(''), 5000)
      return
    }
    if (fields.nombre === '') {
      setNombreError('*Este campo no puede estar vacío')
      setTimeout(() => setNombreError(''), 5000)
      return
    }
    if (fields.nombre.length < 3) {
      setNombreError('*Este campo debe tener más de 3 caracteres')
      setTimeout(() => setNombreError(''), 5000)
      return
    }
    if (fields.mensaje === '') {
      setMensajeError('*No deberias enviar un mensaje en blanco 🤔')
      setTimeout(() => setMensajeError(''), 5000)
      return
    }

    if (fields.mensaje.length < 10) {
      setMensajeError('*El mensaje debe tener más de 10 caracteres')
      setTimeout(() => setMensajeError(''), 5000)
      return
    }

    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 5000)
  }

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
