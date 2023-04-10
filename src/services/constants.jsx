import { Correo, ExpressLogo, Github, Instagram, LinkedIn, MongoDBLogo, NextLogo, NodeLogo, ReactLogo, TypescriptLogo } from '../components/Icons'

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
    name: 'Sueldos.dev',
    link: 'https://www.sueldos.dev/',
    img: './assets/sueldosDev.png',
    description: `Proyecto open source desarrollado e impulsado 
      por la comunidad de @Midudev. Participo como colaborador 
      optimizando el código para su escalabilidad y aportando 
      funcionalidades que mejoran la calidad de la UX.

      Gracias a eso, la página aumento su accesibilidad hasta lograr un
      puntaje de 98 en la herramienta Google Lighthouse`,
    relatedIcons: [
      {
        component: <NextLogo />,
        language: 'Next.js'
      },
      {
        component: <NodeLogo />,
        language: 'Node.js'
      }
    ]
  },
  {
    name: 'Galipan pan APP',
    link: 'https://galipan-pan-ivan-telleria.vercel.app/index.html',
    img: './assets/Galipan/GalipanSitioWeb.png',
    description: `Sitio web con 4 páginas. Posee su propia App de delivery y API. La app tiene 
      un sistema de autogestion que le facilita al dueño la actualización en tiempo real e incluso
      gestionar su disponibilidad además de un sistema de usuario para que solo
      el dueño del negocio pueda hacerlo`,
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
  },
  {
    name: 'Google Translate Clone',
    link: 'https://translator-clone-jmfis7662-voluspak.vercel.app/',
    img: './assets/translatorClone.png',
    description: `Clon del traductor de google usando la API de Chatgpt y 
      funcionalidades nativas de Javascript para la reproducción de audio y 
      copiado de texto. Uso de API propia para aligerar carga el frontend`,
    relatedIcons: [
      {
        component: <TypescriptLogo />,
        language: 'Typescript'
      },
      {
        component: <ReactLogo />,
        language: 'React.js'
      },
      {
        component: <ExpressLogo />,
        language: 'Express.js'
      }
    ]
  }
]

export { LEFT_TAB_LIMITS, RIGHT_TAB_LIMITS, redesSociales }
