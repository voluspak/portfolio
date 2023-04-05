import style from '../styles/styles.module.css'

const Notificacion = () => {
  return (
    <span className={style.notification} aria-live='assertive'>
      ¡El formulario fue enviado exitosamente! 🚀
    </span>
  )
}

export default Notificacion
