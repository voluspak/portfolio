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
    img: ''
  },
  {
    red: 'Github',
    link: 'https://github.com/voluspak',
    img: './assets/github-logo.png'
  },
  {
    red: 'LinkedIn',
    link: 'https://www.linkedin/in/ivan-telleria',
    img: './assets/linkedin.png'
  },
  {
    red: 'Correo',
    link: 'mailto:ivantelleria96@gmail.com?subject=Contacto&body=Hola! Te contacto desde tu portfolio',
    img: ''
  }
]

export { LEFT_TAB_LIMITS, RIGHT_TAB_LIMITS, redesSociales }
