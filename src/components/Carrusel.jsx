import style from '../styles/styles.module.css'
import { useRef } from 'react'

const LEFT_TAB_LIMITS = {
  '-270': () => {
    document.querySelector('.project5').setAttribute('tabindex', '-1')
    document.querySelector('.project5-container').setAttribute('aria-hidden', true)
    document.querySelector('.project2').removeAttribute('tabindex')
    document.querySelector('.project2-container').removeAttribute('aria-hidden')
  },
  0: () => {
    document.querySelector('.project4').setAttribute('tabindex', '-1')
    document.querySelector('.project4-container').setAttribute('aria-hidden', true)
    document.querySelector('.project1').removeAttribute('tabindex')
    document.querySelector('.project1-container').removeAttribute('aria-hidden')
  }
}
const RIGHT_TAB_LIMITS = {
  '-270': () => {
    document.querySelector('.project1').setAttribute('tabindex', '-1')
    document.querySelector('.project1-container').setAttribute('aria-hidden', true)
    document.querySelector('.project4').removeAttribute('tabindex')
    document.querySelector('.project4-container').removeAttribute('aria-hidden')
  },
  '-540': () => {
    document.querySelector('.project2').setAttribute('tabindex', '-1')
    document.querySelector('.project2-container').setAttribute('aria-hidden', true)
    document.querySelector('.project5').removeAttribute('tabindex')
    document.querySelector('.project5-container').removeAttribute('aria-hdden')
  }
}

const Carrusel = () => {
  const projectContainer = useRef()

  const currentLeft = parseInt(window.getComputedStyle(projectContainer.current).getPropertyValue('margin-left'))
  console.log(projectContainer.current)

  function handleLeftArrow () {
    if (currentLeft === 0) return

    const newValue = currentLeft + 270
    projectContainer.current.style.marginLeft = `${newValue}px`

    return LEFT_TAB_LIMITS[newValue]
  }

  function handleRightArrow () {
    if (currentLeft < -270) return

    const newValue = currentLeft - 270 // 270 toma en cuenta el tamaño de la imagen mas sus margines
    projectContainer.current.style.marginLeft = `${newValue}px`

    return RIGHT_TAB_LIMITS[newValue]
  }

  return (
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
              <button id='project4' className={style.project} tabIndex='-1'>
                <img className={style.projectImg} src='./assets/project4.png' alt='Proyecto 4' />
              </button>
            </li>
            <li className='project5-container' aria-hidden='true'>
              <button id='project1' className={style.project} tabIndex='-1'>
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
  )
}

export default Carrusel
