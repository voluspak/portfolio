import style from '../styles/styles.module.css'

const Footer = () => {
  return (
    <footer className={[style.contactSection]}>
      <h2 className={style.header} id='contacto'>Contacto</h2>
      <i className={style.intro} id='mensaje-guia'>Para mandarme un mensaje ✉, puedes usar el siguiente formulario 👇</i>
      <form className={style.formContainer}>
        <label>Nombre</label>
        <input id='name' type='text' aria-label='Nombre' placeholder='Carlos Garcia' /> <br />
        <span id='name-error' aria-live='assertive' />

        <label>Correo</label>
        <input type='email' aria-label='Correo electronico' placeholder='c.garcia98@ejemplo.com' /> <br />
        <div>
          <label>Mensaje</label>
          <textarea
            className={style.messageInput}
            aria-label='Mensaje'
            placeholder='Escribe un mensaje aqui...'
            minLength='500'
          /> <br />
        </div>
        <button className={style.sendButton}>Enviar</button>
      </form>
    </footer>
  )
}

export default Footer
