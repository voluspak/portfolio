import style from '../styles/styles.module.css'
import { redesSociales } from '../services/constants'

const RedesSociales = () => {
  return (
    <ul className={style.socialMedia}>

      {redesSociales.map(contacto => (
        <li key={contacto.red}>
          <a href={contacto.link} target='_blank' rel='noreferrer'>
            {contacto.img}
            <p>{contacto.red}</p>
          </a>
        </li>
      ))}

    </ul>
  )
}

export default RedesSociales
