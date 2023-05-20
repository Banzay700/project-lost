import { useEffect, useRef, useState, RefObject } from 'react'

export const useHover = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<T>(null)

  const handleMouseEnter = () => setIsHovered(true)

  const handleMouseLeave = () => setIsHovered(false)

  useEffect(() => {
    const element = ref.current
    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    return undefined
  }, [ref])

  return [ref, isHovered]
}
