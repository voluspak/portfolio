import { Correo, Github, Instagram, LinkedIn, MongoDBLogo, NodeLogo, ReactLogo } from '../components/Icons'

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

const redesSociales = [
  {
    red: 'Instagram',
    link: 'https://www.instagram.com/itelleria96/',
    img: <Instagram />
  },
  {
    red: 'Github',
    link: 'https://github.com/voluspak',
    img: <Github />
  },
  {
    red: 'LinkedIn',
    link: 'https://www.linkedin/in/ivan-telleria',
    img: <LinkedIn />
  },
  {
    red: 'Correo',
    link: 'mailto:ivantelleria96@gmail.com?subject=Contacto&body=Hola! Te contacto desde tu portfolio',
    img: <Correo />
  }
]

export const projects = [
  {
    name: 'Galipan pan APP',
    link: 'https://galipan-pan-ivan-telleria.vercel.app/index.html',
    img: ['./assets/Galipan/GalipanSitioWeb.png', './assets/Galipan/GalipanDeliveryAppScreen.png'],
    description: `Sitio web con 4 páginas. Posee su propia App de delivery y API. La app tiene 
      un sistema de autogestion que le facilita al dueño la actualización en tiempo real e incluso
      gestionar su disponibilidad`,
    relatedIcons: [
      {
        component: <ReactLogo />,
        language: 'React.js'
      },
      {
        component: <NodeLogo />,
        language: 'Node.js'
      },
      {
        component: <MongoDBLogo />,
        language: 'MongoDB'
      }
    ]
  }
]

export { LEFT_TAB_LIMITS, RIGHT_TAB_LIMITS, redesSociales }
