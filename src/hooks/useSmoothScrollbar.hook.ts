import { RefObject, useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'

export const useSmoothScrollbar = <T extends HTMLElement>(): RefObject<T> => {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      Scrollbar.init(container, { damping: 0.1 })
    }

    return () => {
      if (container) {
        Scrollbar.destroy(container)
      }
    }
  }, [])

  return containerRef
}
