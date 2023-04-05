import { useState } from 'react'

function useContactForm () {
  const [nombreError, setNombreError] = useState('')
  const [correoError, setCorreoError] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  function handleForm (e) {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))

    if (fields.correo === '') {
      setCorreoError('*Este campo no puede estar vacío y debe tener un formato válido')
      setTimeout(() => setCorreoError(''), 5000)
      return
    }
    if (fields.nombre === '') {
      setNombreError('*Este campo no puede estar vacío')
      setTimeout(() => setNombreError(''), 5000)
      return
    }
    if (fields.nombre.length < 3) {
      setNombreError('*Este campo debe tener más de 3 caracteres')
      setTimeout(() => setNombreError(''), 5000)
      return
    }
    if (fields.mensaje === '') {
      setMensajeError('*No deberias enviar un mensaje en blanco 🤔')
      setTimeout(() => setMensajeError(''), 5000)
      return
    }

    if (fields.mensaje.length < 10) {
      setMensajeError('*El mensaje debe tener más de 10 caracteres')
      setTimeout(() => setMensajeError(''), 5000)
      return
    }

    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 5000)
  }

  return { nombreError, correoError, mensajeError, showNotification, handleForm }
}

export default useContactForm
