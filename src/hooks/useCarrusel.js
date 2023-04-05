import { RIGHT_TAB_LIMITS, LEFT_TAB_LIMITS } from '../services/constants'
import { useRef, useEffect } from 'react'

const useCarrusel = () => {
  const projectContainer = useRef()
  let currentLeft

  function handleLeftArrow () {
    if (currentLeft === 0) return

    const newValue = currentLeft + 270
    projectContainer.current.style.marginLeft = `${newValue}px`
    console.log(projectContainer.current.style.marginLeft)
    return LEFT_TAB_LIMITS[newValue]
  }

  function handleRightArrow () {
    if (currentLeft < -270) return

    const newValue = currentLeft - 270 // 270 toma en cuenta el tamaño de la imagen mas sus margines
    projectContainer.current.style.marginLeft = `${newValue}px`

    return RIGHT_TAB_LIMITS[newValue]
  }

  useEffect(() => {
    currentLeft = parseInt(window.getComputedStyle(projectContainer.current).getPropertyValue('margin-left'))
  }, [projectContainer])

  return { handleLeftArrow, handleRightArrow, projectContainer }
}

export default useCarrusel
