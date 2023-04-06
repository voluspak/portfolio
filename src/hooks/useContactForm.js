import { useState, useReducer } from 'react'

const initialState = ''
const reducer = (state, action) => {
  const { type: actionType } = action

  switch (actionType) {
    case 'ERROR_NOMBRE': {
      const newState = '*Este campo no puede estar vacío'
      state = newState

      setTimeout(() => {
        state = initialState
      }, 5000)
      return state
    }
    case 'ERROR_CORREO': {
      const newState = '*Este campo no puede estar vacío y debe tener un formato válido'
      state = newState

      setTimeout(() => {
        state = initialState
      }, 5000)
      return state
    }
    case 'ERROR_MENSAJE': {
      const newState = '*No deberias enviar un mensaje en blanco 🤔'

      state = newState
      setTimeout(() => {
        state = initialState
      }, 5000)
      return state
    }
  }
  return state
}

function useContactForm () {
  const [nombreError, setNombreError] = useState('')
  const [correoError, setCorreoError] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const errorNombre = () => dispatch({ type: 'ERROR_NAME' })
  const errorCorreo = () => dispatch({ type: 'ERROR_CORREO' })
  const errorMensaje = () => dispatch({ type: 'ERROR_MENSAJE' })

  function handleForm (e) {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))

    if (fields.correo === '') {
      errorCorreo()
      setCorreoError()
      return state
    }
    if (fields.nombre === '') {
      errorNombre()
      return state
    }
    if (fields.nombre.length < 3) {
      setNombreError('*Este campo debe tener más de 3 caracteres')
      setTimeout(() => setNombreError(''), 5000)
      return state
    }
    if (fields.mensaje === '') {
      errorMensaje()
      return state
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
