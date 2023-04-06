import style from '../styles/styles.module.css'
import { SunIcon, MoonIcon } from './Icons'

const Header = () => {
  return (
    <header>
      <div>
        <button
          aria-label='Modo Oscuro'
        >
          <span>
            <SunIcon />
          </span>
          <span>
            <MoonIcon />
          </span>
        </button>
      </div>
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
  )
}

export default Header
