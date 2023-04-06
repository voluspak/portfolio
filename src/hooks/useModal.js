import { useState } from 'react'

export const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const listenForEsc = (e) => {
    if (e.key === 'Escape') {
      setShowModal(!showModal)
    }
  }

  return { toggleModal, showModal, listenForEsc }
}
