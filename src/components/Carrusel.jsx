import { useModal } from '../hooks/useModal'
import style from '../styles/styles.module.css'
import useCarrusel from '../hooks/useCarrusel'
import Modal from './Modal'

const Carrusel = () => {
  const { handleLeftArrow, handleRightArrow, projectContainer } = useCarrusel()
  const { toggleModal, showModal, listenForEsc } = useModal()

  return (
    <div onKeyUp={(e) => listenForEsc(e)}>
      <section>
        <h2 className={style.header} id='misProyectos'>Mis proyectos</h2>
        <div className={style.carousel}>
          <button
            className={[style.arrow, style.arrowLeft]}
            aria-label='backward button'
            onClick={handleLeftArrow}
          >
            <img src='./assets/play-button-left.png' alt='forward arrow' />
          </button>
          <div className={style.window}>
            <ul className={style.projectContainer} ref={projectContainer} id='project-container'>
              <li className='project1-container'>
                <button id='project1' className={style.project} onClick={() => toggleModal()}>
                  <img className={style.projectImg} src='./assets/project1.png' alt='Proyecto 1' />
                </button>
              </li>
              <li className='project2-container'>
                <button id='project2' className={style.project} onClick={() => toggleModal()}>
                  <img className={style.projectImg} src='./assets/project2.png' alt='Proyecto 2' />
                </button>
              </li>
              <li className='project3-container'>
                <button id='project3' className={style.project} onClick={() => toggleModal()}>
                  <img className={style.projectImg} src='./assets/project3.png' alt='Proyecto 3' />
                </button>
              </li>
              <li className='project4-container' aria-hidden='true'>
                <button id='project4' className={style.project} tabIndex='-1' onClick={() => toggleModal()}>
                  <img className={style.projectImg} src='./assets/project4.png' alt='Proyecto 4' />
                </button>
              </li>
              <li className='project5-container' aria-hidden='true'>
                <button id='project5' className={style.project} tabIndex='-1' onClick={() => toggleModal()}>
                  <img className={style.projectImg} src='./assets/project5.png' alt='Proyecto 5' />
                </button>
              </li>
            </ul>
          </div>
          <button
            className={[style.arrow, style.arrowRight]}
            aria-label='forward button'
            onClick={handleRightArrow}
          >
            <img src='./assets/play-button-right.png' alt='forward arrow' />
          </button>
        </div>
      </section>
      {showModal && <Modal toggleModal={toggleModal} listenForEsc={listenForEsc} />}
    </div>
  )
}

export default Carrusel
