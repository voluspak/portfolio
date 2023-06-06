import style from '../styles/styles.module.css'

const Modal = ({ toggleModal }) => {
  console.log('me muestro')
  return (
    <div className={style.modalContainer}>
      <div className={style.modal}>
        <h2 className={style.header} id='modal-header'>Ejemplo de un proyecto mio</h2>
        <img
          src='./images/project1.png'
          alt='Proyecto de desarrollo'
          title='Proyecto'
          className={style.modalProjectImage}
        />
        <button onClick={() => toggleModal()} tabIndex='0' className={style.modalButton}>Cerrar</button>
      </div>
    </div>
  )
}

export default Modal
